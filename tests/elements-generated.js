
/* All tests in this module / file are generated from the spec. Do not edit them manually. */
module("Generated Element interface tests", {
});

test("&lt;xml3d&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "xml3d");
    ok(e, "xml3d exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.onclick, "object", "onclick is of type 'object'");
    equal(typeof e.ondblclick, "object", "ondblclick is of type 'object'");
    equal(typeof e.onmousedown, "object", "onmousedown is of type 'object'");
    equal(typeof e.onmouseup, "object", "onmouseup is of type 'object'");
    equal(typeof e.onmouseover, "object", "onmouseover is of type 'object'");
    equal(typeof e.onmousemove, "object", "onmousemove is of type 'object'");
    equal(typeof e.onmouseout, "object", "onmouseout is of type 'object'");
    equal(typeof e.onkeypress, "object", "onkeypress is of type 'object'");
    equal(typeof e.onkeydown, "object", "onkeydown is of type 'object'");
    equal(typeof e.onkeyup, "object", "onkeyup is of type 'object'");
    equal(typeof e.height, "number", "height is of type 'number'");
    equal(typeof e.width, "number", "width is of type 'number'");
    equal(typeof e.getElementByPoint, "function", "getElementByPoint is of type 'function'");
    equal(typeof e.generateRay, "function", "generateRay is of type 'function'");
    equal(typeof e.getElementByRay, "function", "getElementByRay is of type 'function'");
    equal(typeof e.getLocalBoundingBox, "function", "getLocalBoundingBox is of type 'function'");
    equal(typeof e.getWorldBoundingBox, "function", "getWorldBoundingBox is of type 'function'");
    equal(typeof e.activeView, "string", "activeView is of type 'string'");
});
test("&lt;data&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "data");
    ok(e, "data exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.compute, "string", "compute is of type 'string'");
    equal(typeof e.filter, "string", "filter is of type 'string'");
    equal(typeof e.getOutputNames, "function", "getOutputNames is of type 'function'");
    equal(typeof e.getOutputChannelInfo, "function", "getOutputChannelInfo is of type 'function'");
    equal(typeof e.getComputeInfo, "function", "getComputeInfo is of type 'function'");
    equal(typeof e.getProtoInfo, "function", "getProtoInfo is of type 'function'");
    equal(typeof e.isOutputConnected, "function", "isOutputConnected is of type 'function'");
    equal(typeof e.getResult, "function", "getResult is of type 'function'");
    equal(typeof e.src, "string", "src is of type 'string'");
});
test("&lt;defs&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "defs");
    ok(e, "defs exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
});
test("&lt;group&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "group");
    ok(e, "group exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.onclick, "object", "onclick is of type 'object'");
    equal(typeof e.ondblclick, "object", "ondblclick is of type 'object'");
    equal(typeof e.onmousedown, "object", "onmousedown is of type 'object'");
    equal(typeof e.onmouseup, "object", "onmouseup is of type 'object'");
    equal(typeof e.onmouseover, "object", "onmouseover is of type 'object'");
    equal(typeof e.onmousemove, "object", "onmousemove is of type 'object'");
    equal(typeof e.onmouseout, "object", "onmouseout is of type 'object'");
    equal(typeof e.onkeypress, "object", "onkeypress is of type 'object'");
    equal(typeof e.onkeydown, "object", "onkeydown is of type 'object'");
    equal(typeof e.onkeyup, "object", "onkeyup is of type 'object'");
    equal(typeof e.visible, "boolean", "visible is of type 'boolean'");
    equal(typeof e.getWorldMatrix, "function", "getWorldMatrix is of type 'function'");
    equal(typeof e.getLocalMatrix, "function", "getLocalMatrix is of type 'function'");
    equal(typeof e.getLocalBoundingBox, "function", "getLocalBoundingBox is of type 'function'");
    equal(typeof e.getWorldBoundingBox, "function", "getWorldBoundingBox is of type 'function'");
    equal(typeof e.transform, "string", "transform is of type 'string'");
    equal(typeof e.shader, "string", "shader is of type 'string'");
});
test("&lt;mesh&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "mesh");
    ok(e, "mesh exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.onclick, "object", "onclick is of type 'object'");
    equal(typeof e.ondblclick, "object", "ondblclick is of type 'object'");
    equal(typeof e.onmousedown, "object", "onmousedown is of type 'object'");
    equal(typeof e.onmouseup, "object", "onmouseup is of type 'object'");
    equal(typeof e.onmouseover, "object", "onmouseover is of type 'object'");
    equal(typeof e.onmousemove, "object", "onmousemove is of type 'object'");
    equal(typeof e.onmouseout, "object", "onmouseout is of type 'object'");
    equal(typeof e.onkeypress, "object", "onkeypress is of type 'object'");
    equal(typeof e.onkeydown, "object", "onkeydown is of type 'object'");
    equal(typeof e.onkeyup, "object", "onkeyup is of type 'object'");
    equal(typeof e.visible, "boolean", "visible is of type 'boolean'");
    equal(typeof e.type, "string", "type is of type 'string'");
    equal(typeof e.compute, "string", "compute is of type 'string'");
    equal(typeof e.getWorldMatrix, "function", "getWorldMatrix is of type 'function'");
    equal(typeof e.getLocalBoundingBox, "function", "getLocalBoundingBox is of type 'function'");
    equal(typeof e.getWorldBoundingBox, "function", "getWorldBoundingBox is of type 'function'");
    equal(typeof e.getOutputNames, "function", "getOutputNames is of type 'function'");
    equal(typeof e.getOutputChannelInfo, "function", "getOutputChannelInfo is of type 'function'");
    equal(typeof e.getComputeInfo, "function", "getComputeInfo is of type 'function'");
    equal(typeof e.getProtoInfo, "function", "getProtoInfo is of type 'function'");
    equal(typeof e.isOutputConnected, "function", "isOutputConnected is of type 'function'");
    equal(typeof e.getResult, "function", "getResult is of type 'function'");
    equal(typeof e.src, "string", "src is of type 'string'");
});
test("&lt;transform&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "transform");
    ok(e, "transform exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.translation, "object", "translation is of type 'object'");
    equal(typeof e.scale, "object", "scale is of type 'object'");
    equal(typeof e.rotation, "object", "rotation is of type 'object'");
    equal(typeof e.center, "object", "center is of type 'object'");
    equal(typeof e.scaleOrientation, "object", "scaleOrientation is of type 'object'");
});
test("&lt;shader&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "shader");
    ok(e, "shader exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.compute, "string", "compute is of type 'string'");
    equal(typeof e.getOutputNames, "function", "getOutputNames is of type 'function'");
    equal(typeof e.getOutputChannelInfo, "function", "getOutputChannelInfo is of type 'function'");
    equal(typeof e.getComputeInfo, "function", "getComputeInfo is of type 'function'");
    equal(typeof e.getProtoInfo, "function", "getProtoInfo is of type 'function'");
    equal(typeof e.isOutputConnected, "function", "isOutputConnected is of type 'function'");
    equal(typeof e.getResult, "function", "getResult is of type 'function'");
    equal(typeof e.script, "string", "script is of type 'string'");
    equal(typeof e.src, "string", "src is of type 'string'");
});
test("&lt;light&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "light");
    ok(e, "light exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.onclick, "object", "onclick is of type 'object'");
    equal(typeof e.ondblclick, "object", "ondblclick is of type 'object'");
    equal(typeof e.onmousedown, "object", "onmousedown is of type 'object'");
    equal(typeof e.onmouseup, "object", "onmouseup is of type 'object'");
    equal(typeof e.onmouseover, "object", "onmouseover is of type 'object'");
    equal(typeof e.onmousemove, "object", "onmousemove is of type 'object'");
    equal(typeof e.onmouseout, "object", "onmouseout is of type 'object'");
    equal(typeof e.onkeypress, "object", "onkeypress is of type 'object'");
    equal(typeof e.onkeydown, "object", "onkeydown is of type 'object'");
    equal(typeof e.onkeyup, "object", "onkeyup is of type 'object'");
    equal(typeof e.visible, "boolean", "visible is of type 'boolean'");
    equal(typeof e.global, "boolean", "global is of type 'boolean'");
    equal(typeof e.intensity, "number", "intensity is of type 'number'");
    equal(typeof e.getWorldMatrix, "function", "getWorldMatrix is of type 'function'");
    equal(typeof e.shader, "string", "shader is of type 'string'");
});
test("&lt;lightshader&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "lightshader");
    ok(e, "lightshader exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.compute, "string", "compute is of type 'string'");
    equal(typeof e.getOutputNames, "function", "getOutputNames is of type 'function'");
    equal(typeof e.getOutputChannelInfo, "function", "getOutputChannelInfo is of type 'function'");
    equal(typeof e.getComputeInfo, "function", "getComputeInfo is of type 'function'");
    equal(typeof e.getProtoInfo, "function", "getProtoInfo is of type 'function'");
    equal(typeof e.isOutputConnected, "function", "isOutputConnected is of type 'function'");
    equal(typeof e.getResult, "function", "getResult is of type 'function'");
    equal(typeof e.script, "string", "script is of type 'string'");
    equal(typeof e.src, "string", "src is of type 'string'");
});
test("&lt;script&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "script");
    ok(e, "script exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.src, "string", "src is of type 'string'");
    equal(typeof e.type, "string", "type is of type 'string'");
});
test("&lt;float&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "float");
    ok(e, "float exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.setScriptValue, "function", "setScriptValue is of type 'function'");
});
test("&lt;float2&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "float2");
    ok(e, "float2 exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.setScriptValue, "function", "setScriptValue is of type 'function'");
});
test("&lt;float3&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "float3");
    ok(e, "float3 exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.setScriptValue, "function", "setScriptValue is of type 'function'");
});
test("&lt;float4&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "float4");
    ok(e, "float4 exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.setScriptValue, "function", "setScriptValue is of type 'function'");
});
test("&lt;float4x4&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "float4x4");
    ok(e, "float4x4 exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.setScriptValue, "function", "setScriptValue is of type 'function'");
});
test("&lt;int&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "int");
    ok(e, "int exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.setScriptValue, "function", "setScriptValue is of type 'function'");
});
test("&lt;int4&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "int4");
    ok(e, "int4 exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.setScriptValue, "function", "setScriptValue is of type 'function'");
});
test("&lt;bool&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "bool");
    ok(e, "bool exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.setScriptValue, "function", "setScriptValue is of type 'function'");
});
test("&lt;texture&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "texture");
    ok(e, "texture exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.name, "string", "name is of type 'string'");
    equal(typeof e.param, "boolean", "param is of type 'boolean'");
    equal(typeof e.key, "number", "key is of type 'number'");
    equal(typeof e.type, "string", "type is of type 'string'");
    equal(typeof e.filterMin, "string", "filterMin is of type 'string'");
    equal(typeof e.filterMag, "string", "filterMag is of type 'string'");
    equal(typeof e.filterMip, "string", "filterMip is of type 'string'");
    equal(typeof e.wrapS, "string", "wrapS is of type 'string'");
    equal(typeof e.wrapT, "string", "wrapT is of type 'string'");
    equal(typeof e.wrapU, "string", "wrapU is of type 'string'");
});
test("&lt;img&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "img");
    ok(e, "img exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.src, "string", "src is of type 'string'");
});
test("&lt;video&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "video");
    ok(e, "video exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.src, "string", "src is of type 'string'");
    equal(typeof e.autoplay, "boolean", "autoplay is of type 'boolean'");
    equal(typeof e.play, "function", "play is of type 'function'");
    equal(typeof e.pause, "function", "pause is of type 'function'");
});
test("&lt;view&gt; interface test", function() {
    var e = document.createElementNS(XML3D.xml3dNS, "view");
    ok(e, "view exits");
    equal(typeof e.className, "string", "className is of type 'string'");
    equal(typeof e.style, "object", "style is of type 'object'");
    equal(typeof e.id, "string", "id is of type 'string'");
    equal(typeof e.onclick, "object", "onclick is of type 'object'");
    equal(typeof e.ondblclick, "object", "ondblclick is of type 'object'");
    equal(typeof e.onmousedown, "object", "onmousedown is of type 'object'");
    equal(typeof e.onmouseup, "object", "onmouseup is of type 'object'");
    equal(typeof e.onmouseover, "object", "onmouseover is of type 'object'");
    equal(typeof e.onmousemove, "object", "onmousemove is of type 'object'");
    equal(typeof e.onmouseout, "object", "onmouseout is of type 'object'");
    equal(typeof e.onkeypress, "object", "onkeypress is of type 'object'");
    equal(typeof e.onkeydown, "object", "onkeydown is of type 'object'");
    equal(typeof e.onkeyup, "object", "onkeyup is of type 'object'");
    equal(typeof e.visible, "boolean", "visible is of type 'boolean'");
    equal(typeof e.position, "object", "position is of type 'object'");
    equal(typeof e.orientation, "object", "orientation is of type 'object'");
    equal(typeof e.fieldOfView, "number", "fieldOfView is of type 'number'");
    equal(typeof e.getWorldMatrix, "function", "getWorldMatrix is of type 'function'");
    equal(typeof e.setDirection, "function", "setDirection is of type 'function'");
    equal(typeof e.setUpVector, "function", "setUpVector is of type 'function'");
    equal(typeof e.lookAt, "function", "lookAt is of type 'function'");
    equal(typeof e.getDirection, "function", "getDirection is of type 'function'");
    equal(typeof e.getUpVector, "function", "getUpVector is of type 'function'");
    equal(typeof e.getViewMatrix, "function", "getViewMatrix is of type 'function'");
    equal(typeof e.perspective, "string", "perspective is of type 'string'");
});
