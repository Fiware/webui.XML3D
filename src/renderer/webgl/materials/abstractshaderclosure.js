var GLProgramObject = require("../base/program.js").ProgramObject;
var GetExistingProgram = require("../base/program.js").getExistingProgram;
var XflowUtils= require("../xflow/utils.js");

/**
 * A ShaderClosure connects a mesh-specific GLProgram with it's Xflow data
 * @param {GLContext} context
 * @constructor
 */
var counter = 0;
var AbstractShaderClosure = function (context) {
    /**
     * @private
     * @type {GLProgramObject|null}
     */
    this.program = null;
    this.context = context;
    /**
     * A flag used by shadercomposer to sort out obsolete shaderclosures
     * @type {boolean}
     */
    this.obsolete = false;
    this.id = counter++;

    this.uniformCollection = {};

    /**
     * Stores, if the underlying shader has semi-transparencies
     * and thus needs to considered for alpha-blending
     * @type {boolean}
     */
    this.isTransparent = false;

    /**
     * The source of a shader
     * @private
     * @type {{vertex: string, fragment: string}}
     */
    this.source = {
        vertex: "", fragment: ""
    }
};

Object.defineProperties(AbstractShaderClosure.prototype, {
        attributes: {
            writeable: false, get: function () {
                return this.program ? this.program.attributes : {}
            }
        }, uniforms: {
            writeable: false, get: function () {
                return this.program ? this.program.uniforms : {}
            }
        }, samplers: {
            writeable: false, get: function () {
                return this.program ? this.program.samplers : {}
            }
        }
    });
XML3D.createClass(AbstractShaderClosure, null, {

    equals: function (that) {
        return this.source.vertex === that.source.vertex && this.source.fragment === that.source.fragment;
    },

    hasTransparency: function () {
        return this.isTransparent;
    },

    compile: function () {
        if (!this.source.fragment || !this.source.vertex) {
            XML3D.debug.logError("No source found for material", this);
            return;
        }

        this.program = GetExistingProgram(this.context.gl, this.source);
        if (!this.program) {
            this.program = new GLProgramObject(this.context.gl, this.source);
            this.setDefaultUniforms();
        }
    },

    bind: function () {
        this.program.bind();
    },

    unbind: function () {
        this.program.unbind();
    },

    isValid: function () {
        return this.program.isValid();
    },

    /**
     * @param {Xflow.ComputeResult} xflowResult
     */
    updateUniformsFromComputeResult: function (xflowResult) {
        var map = xflowResult.getOutputMap();
        var envBase = this.uniformCollection.envBase = {};

        for (var name in map) {
            envBase[name] = XflowUtils.getGLUniformValueFromXflowDataEntry(map[name], this.context);
        }

        this.isTransparent = this.getTransparencyFromInputData(map);
    },

    setUniformVariables: (function() {
        var didDeprecatedWarning = false;
        return function (envNames, sysNames, uniformCollection) {
            if (!didDeprecatedWarning) {
                XML3D.debug.logWarning("setUniformVariables is deprecated. Please use setPerFrameUniforms or setPerObjectUniforms instead");
                didDeprecatedWarning = true;
            }
            this.program.setUniformVariables(envNames, sysNames, uniformCollection);
        }
    })(),
    
    setPerFrameUniforms: function(values) {
        this.program.setPerFrameUniforms(values);
    },
    
    setPerObjectUniforms: function(values) {
        for (var name in this.uniformCollection.envBase) {
            if (!values[name]) {
                values[name] = this.uniformCollection.envBase[name];
            }
        }
        this.program.setPerObjectUniforms(values);
    },

    setSystemUniformVariables: (function() {
        var didDeprecatedWarning = false;
        return function (sysNames, sysValues) {
            if (!didDeprecatedWarning) {
                XML3D.debug.logWarning("setSystemUniformVariables is deprecated. Please use setPerFrameUniforms or setPerObjectUniforms instead");
                didDeprecatedWarning = true;
            }
            this.uniformCollection.sysBase = sysValues;
            this.setUniformVariables(null, sysNames, this.uniformCollection);
        }
    })(),

    changeUniformVariableOverride: (function() {
        var didDeprecatedWarning = false;
        return function (prevOverride, newOverride) {
            if (!didDeprecatedWarning) {
                XML3D.debug.logWarning("changeUniformVariableOverride is deprecated. Please use setPerFrameUniforms or setPerObjectUniforms instead");
                didDeprecatedWarning = true;
            }
            var overrideNames = prevOverride ? Object.keys(prevOverride) : [];
            if (newOverride) overrideNames.push.apply(overrideNames, Object.keys(newOverride));
            this.uniformCollection.envOverride = newOverride;
            this.setUniformVariables(overrideNames, null, this.uniformCollection);
        }
    })()
});

module.exports = AbstractShaderClosure;

