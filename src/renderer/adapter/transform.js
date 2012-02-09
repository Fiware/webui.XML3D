﻿// Adapter for <transform>
(function() {
			
	var XML3DTransformRenderAdapter = function(factory, node) {
		xml3d.webgl.RenderAdapter.call(this, factory, node);
		this.matrix = null;
		this.listeners = new Array();
		this.isValid = true;
	};
	
	xml3d.createClass(XML3DTransformRenderAdapter, xml3d.webgl.RenderAdapter);
	XML3DTransformRenderAdapter.prototype.getMatrix = function() {
		if (!this.matrix) {
			var n         = this.node;
			var m = mat4.identity(mat4.create());
	
			var t = n.translation._data;
			var c = n.center._data;
			var s = n.scale._data;
			var so = n.scaleOrientation.toMatrix()._data;
			var rot = n.rotation.toMatrix()._data;
			
			var tmp = mat4.multiply(mat4.multiply(mat4.multiply(mat4.multiply(mat4.multiply(mat4.multiply(		
					mat4.translate(m,t, mat4.create()),
					mat4.translate(m, c, mat4.create())),
					rot),
					so),
					mat4.scale(m, s, mat4.create())),
					mat4.inverse(so, mat4.create())),
					mat4.translate(m, vec3.negate(c), mat4.create())
					);
					
			this.matrix = tmp;
			
		}
		return this.matrix;
	};
	
	XML3DTransformRenderAdapter.prototype.notifyChanged = function(e) {
		this.matrix = null;
		this.matrix = this.getMatrix();
	
		var ievent = new xml3d.webgl.InternalMutationEvent();
		ievent.source = "transform";
		ievent.type = "transform";
		ievent.newValue = mat4.create(this.matrix);
		
		for (var i=0, length = this.listeners.length; i < length; i++) {
			if (this.listeners[i].isValid)
				this.listeners[i].notifyChanged(ievent);
			else {
				this.listeners.splice(i,1);
				i--;
			}
		}
		this.factory.renderer.requestRedraw("Transformation changed.");
	};
	XML3DTransformRenderAdapter.prototype.dispose = function() {
		this.isValid = false;
	};
	// Export to xml3d.webgl namespace
	xml3d.webgl.XML3DTransformRenderAdapter = XML3DTransformRenderAdapter;

}());