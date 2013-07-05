(function() {

    var ENTRY_SIZE = 80;
    var PAGE_SIZE = 12;

    var StateMachine = window.StateMachine;

    var Scene = function() {

        this.pages = [];
        this.nextOffset = 0;
        this.firstOpaqueIndex = 0;
        this.lights = {
            changed : true,
            structureChanged : true,
            point: { length: 0, intensity: [], position: [], attenuation: [], visibility: [] },
            directional: { length: 0, intensity: [], direction: [], visibility: [] },
            spot: { length: 0, intensity: [], direction: [], attenuation: [], visibility: [], position: [], falloffAngle: [], softness: [] }
        };
        this.activeView = null;

        this.remove = function(obj) {
            var index = this.ready.indexOf(obj);
            if (index == -1) {
                index = this.queue.indexOf(obj);
                this.queue.splice(index, 1);
            } else
                this.ready.splice(index, 1);
        };
        this.clear = function() {
            this.ready = [];
            this.queue = [];
        };
        this.moveFromQueueToReady = function(obj) {
            var index = this.queue.indexOf(obj);
            if (index != -1) {
                this.queue.splice(index, 1);
                if(obj.shader.program.hasTransparency) {
                    this.ready.unshift(obj);
                    this.firstOpaqueIndex++;
                }
                else {
                    this.ready.push(obj);
                }
            }
        };
        this.moveFromReadyToQueue = function(obj) {
            var index = this.ready.indexOf(obj);
            if (index != -1) {
                this.ready.splice(index, 1);
                if(index < this.firstOpaqueIndex)
                    this.firstOpaqueIndex--;
                this.queue.push(obj);
            }
        };
        this.remove = function(obj) {
            var index = this.queue.indexOf(obj);
            if (index != -1) {
                this.queue.splice(index, 1);
            }
            index = this.ready.indexOf(obj);
            if (index != -1) {
                this.ready.splice(index, 1);
                if(index < this.firstOpaqueIndex)
                    this.firstOpaqueIndex--;
            }
        };
        this.consolidate = function() {
            this.queue.slice().forEach(function(obj) {
                while (obj.can('progress') && obj.progress() == StateMachine.Result.SUCCEEDED ) {};
                if(obj.current == "NoMesh") {
                    if (obj.dataComplete() !== StateMachine.Result.SUCCEEDED) {
                        obj.dataNotComplete();
                    }
                }
            });
        };
        this.updateLights = function(lights, shaderManager) {
            if (lights.structureChanged) {
                this.forEach(function(obj) { obj.lightsChanged(lights, shaderManager); }, this);
                lights.structureChanged = false;
            } else {
                this.queue.forEach(function(obj) {
                    if (obj.current == "NoLights")
                        obj.lightsChanged(lights, shaderManager);
                }, this);
            }
        };
        this.forEach = function(func, that) {
            this.queue.slice().forEach(func, that);
            this.ready.slice().forEach(func, that);
        };

        this.createPageEntry = function() {
            var offset = this.nextOffset;
            var page = offset>>ENTRY_SIZE;
            var localOffset = offset&((1<<ENTRY_SIZE)-1);
            if(!this.pages[page]) {
                XML3D.debug.logInfo("New page:" + page);
                this.pages[page] = new Float32Array(1<<PAGE_SIZE);
            }
            this.nextOffset += ENTRY_SIZE;
            return { page: this.pages[page], offset : localOffset};
        };

        this.createRenderObject = function(opt) {
            var pageEntry = this.createPageEntry();
            var renderObject = new XML3D.webgl.RenderObject(this, pageEntry, opt);
            this.queue.push(renderObject);
            return renderObject;
        };

        this.createRenderGroup = function(opt) {
            var pageEntry = this.createPageEntry();
            return new XML3D.webgl.RenderGroup(this, pageEntry, opt);
        };

        this.createRenderView = function(opt) {
            var pageEntry = this.createPageEntry();
            return new XML3D.webgl.RenderView(this, pageEntry, opt);
        };

        this.createRenderLight = function(opt) {
            var pageEntry = this.createPageEntry();
            this.addLightDataOffsetToPageEntry(pageEntry, opt.lightType);
            this.lights.structureChanged = true;
            return new XML3D.webgl.RenderLight(this, pageEntry, opt);
        };

        this.addLightDataOffsetToPageEntry = function(pageEntry, lightType) {
            var lightObj = this.lights[lightType];
            pageEntry.lightOffset = lightObj.length++;
        };

        this.createRootNode = function() {
            var pageEntry = this.createPageEntry();
            var root = new XML3D.webgl.RenderGroup(this, pageEntry, {});
            root.setWorldMatrix(XML3D.math.mat4.create());
            root.transformDirty = false;
            root.shaderDirty = false;
            root.visible = true;
            root.shaderHandle = {};
            this.rootNode = root;
            return root;
        };
        this.rootNode = this.createRootNode();
        this.clear();
    };


    window.StateMachine.create({
        target:XML3D.webgl.RenderObject.prototype,
        events:[
            { name:'create', from:'none', to:'NoLights'   },
            // batch processing
            { name:'progress', from:'NoLights', to:'NoMaterial'   },
            { name:'progress', from:'NoMaterial', to:'NoMesh'   },
            { name:'dataNotComplete', from:'NoMesh', to:'NoMeshData' },
            { name:'dataComplete', from:'NoMesh', to:'Ready' },
            { name:'progress', from:'DirtyMeshData', to:'Ready' },
            // events
            { name:'lightsChanged', from: ['NoLights','NoMaterial', 'NoMesh', 'Ready', 'NoMeshData', 'DirtyMeshData'], to:'NoLights' },
            { name:'materialChanged', from: ['NoMaterial', 'NoMesh', 'Ready', 'NoMeshData', 'DirtyMeshData'], to:'NoMaterial' },
            { name:'materialChanged', from: ['NoLights'], to:'NoLights' },
            { name:'dataStructureChanged', from: ['NoMesh', 'Ready', 'NoMeshData', 'DirtyMeshData'], to:'NoMesh' },
            { name:'dataValueChanged', from: ['Ready', 'DirtyMeshData'], to:'DirtyMeshData' },
            { name:'dispose', from:'*', to:'Disposed' }
        ]});

    XML3D.webgl.Scene = Scene;

})();
