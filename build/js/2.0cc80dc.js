(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{CncF:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("div",{class:{hidden:e.headVisible},attrs:{id:"headPanel"}},[n("span",{staticClass:"logo"},[e._v("Vue 生命周期图示")]),e._v(" "),n("i",{staticClass:"gb-toggle-btn",on:{click:function(t){e.headVisible=!e.headVisible}}})]),e._v(" "),n("item-panel",{attrs:{graph:e.graph},on:{"canvas-add-node":e.addNode,"canvas-add-edge":e.addEdge}}),e._v(" "),n("div",{attrs:{id:"toolbar"}},[n("i",{staticClass:"iconfont icon-undo",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-redo",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-copy",on:{click:e.copyNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-paste",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-line-style",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-line-strong",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-toup",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-todown",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-font-size",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-actual-size",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-full-screen",on:{click:e.addNode}})]),e._v(" "),n("div",{attrs:{id:"canvasPanel"},on:{dragover:function(e){e.preventDefault()}}}),e._v(" "),n("div",{class:{hidden:!e.configVisible},attrs:{id:"configPanel"}},[n("h2",{staticClass:"panel-title"},[e._v("数据配置")]),e._v(" "),n("i",{staticClass:"gb-toggle-btn",on:{click:function(t){e.configVisible=!e.configVisible}}}),e._v(" "),n("div",{staticClass:"config-data"},[e._v("\n      "+e._s(e.config)+"\n    ")])])],1)};a._withStripped=!0;var i=n("0iUn"),o=n("sLSF"),r=n("fD4D"),c=(n("rGqo"),n("8+KV"),n("HAE/"),n("WLL4"),n("jm62"),n("0l/t"),n("RW0V"),n("vYYK"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){!function(e){e.registerBehavior("select-node",{getDefaultCfg:function(){return{multiple:!1}},getEvents:function(){return{"node:click":"onClick","node:dblclick":"ondblClick","canvas:click":"onCanvasClick","node:mouseover":"onNodeMouseOver","node:mouseleave":"onNodeMouseLeave"}},onClick:function(e){this._clearSelected(),this.graph.setItemState(e.item,"nodeSelected",!0),this.graph.emit("after-node-selected",e.item)},ondblClick:function(e){this._clearSelected(),this.graph.setItemState(e.item,"nodeSelected",!0),this.graph.emit("after-node-dblclick",e.item)},onCanvasClick:function(e){this._clearSelected()},onNodeMouseOver:function(e){this.graph.setItemState(e.item,"nodeHover",!0)},onNodeMouseLeave:function(e){this.graph.setItemState(e.item,"nodeHover",!1)},_clearSelected:function(){var e=this;this.graph.findAllByState("node","nodeSelected").forEach((function(t){e.graph.setItemState(t,"nodeSelected",!1)})),this.graph.findAllByState("edge","edgeSelected").forEach((function(t){e.graph.setItemState(t,"edgeSelected",!1)})),this.graph.emit("after-node-selected")}})}(e),function(e){e.registerBehavior("delete-item",{getEvents:function(){return{keydown:"onKeydown"}},onKeydown:function(e){var t=this.graph,n=this.graph.findAllByState("node","nodeSelected"),a=this.graph.findAllByState("edge","edgeSelected");if(8===e.keyCode){if(n&&n.length){var i=n[0].getContainer().get("item");t.emit("before-node-removed",{target:i,callback:function(e){e&&(t.remove(i),t.set("after-node-selected",[]),t.emit("after-node-selected"),t.emit("after-node-removed",i))}})}if(a&&a.length){var o=a[0].getContainer().get("item");t.emit("before-node-removed",{target:o,callback:function(e){e&&(t.remove(o),t.set("after-edge-selected",[]),t.emit("after-edge-selected"),t.emit("after-edge-removed",o))}})}}}})}(e),function(e){e.registerBehavior("active-edge",{getDefaultCfg:function(){return{editMode:!1}},getEvents:function(){return{"canvas:click":"onCanvasClick","edge:click":"onEdgeClick","edge:dblclick":"ondblEdgeClick","edge:mouseenter":"onMouseEnter","edge:mouseleave":"onMouseLeave"}},onCanvasClick:function(e){this.editMode=!1,this._clearSelected()},onEdgeClick:function(e){this._clearSelected(),this.editMode=!0,this.graph.setItemState(e.item.get("id"),"edgeSelected",!0),this.graph.emit("after-edge-selected",e.item)},ondblEdgeClick:function(e){this._clearSelected(),this.editMode=!0,this.graph.setItemState(e.item,"edgeSelected",!0),this.graph.emit("after-edge-dblclick",e.item)},onMouseEnter:function(e){this.editMode||this.graph.setItemState(e.item,"edgeHover",!0)},onMouseLeave:function(e){this.editMode||this.graph.setItemState(e.item,"edgeHover",!1)},_clearSelected:function(){var e=this;this.graph.findAllByState("node","nodeSelected").forEach((function(t){e.graph.setItemState(t,"nodeSelected",!1)})),this.graph.findAllByState("edge","edgeSelected").forEach((function(t){e.graph.setItemState(t,"edgeSelected",!1)})),this.graph.emit("after-edge-selected")}})}(e),function(e){e.registerBehavior("hover-node",{getEvents:function(){return{"node:mouseenter":"onNodeEnter","node:mouseleave":"onNodeLeave"}},onNodeEnter:function(e){this.graph.setItemState(e.item,"anchorShow",!0)},onNodeLeave:function(e){this.graph.setItemState(e.item,"anchorShow",!1)}})}(e),function(e){e.registerBehavior("drag-node",{getDefaultCfg:function(){return{dragTarget:"node",dragStartNode:{},distance:[]}},getEvents:function(){return{"node:mousedown":"onMousedown","node:mouseup":"onMouseup","node:dragstart":"onDragStart","node:drag":"onDrag","node:dragend":"onDragEnd","node:dragenter":"onDragEnter","node:drop":"onDrop"}},onMousedown:function(e){var t=this;e.target.cfg.isAnchor&&(this.dragTarget="anchor",this.dragStartNode=d({},e.item._cfg,{anchorIndex:e.target.cfg.index}),this.graph.findAll("node",(function(e){return e})).forEach((function(e){t.graph.setItemState(e,"anchorActived",!0)})))},onMouseup:function(e){"anchor"===this.dragTarget&&this.graph.findAll("node",(function(e){return e})).forEach((function(e){e.clearStates("anchorActived")}))},onDragStart:function(e){e.target.cfg.isAnchor||(e.item.toFront(),this.dragTarget="node",this._nodeOnDragStart(e,e.item.getContainer()))},onDrag:function(e){"node"===this.dragTarget&&this._nodeOnDrag(e,e.item.getContainer())},onDragEnd:function(e){var t=e.item.getContainer();"anchor"===this.dragTarget?this.graph.findAll("node",(function(e){return e})).forEach((function(e){e.clearStates("anchorActived")})):"node"===this.dragTarget&&this._nodeOnDragEnd(e,t)},onDrop:function(e){this.dragStartNode.id&&e.target.cfg.isAnchor&&this.dragStartNode.id!==e.target.cfg.nodeId&&this.graph.emit("before-edge-add",{source:this.dragStartNode.group.get("item"),target:e.item.getContainer().get("item"),sourceAnchor:this.dragStartNode.anchorIndex,targetAnchor:e.target.cfg.index})},_nodeOnDragStart:function(e,t){var n=t.get("item"),a=n.get("originStyle").radius,i=n.get("currentShape"),o=n.getBBox(),r=o.width,c=o.height,s=o.centerX,l=o.centerY,h=n.get("shapeFactory")[i].shapeType,g={fillOpacity:.1,fill:"rgb(24, 144, 255, 1)",stroke:"#1890FF",cursor:"move",lineDash:[4,4],width:r,height:c};switch(h){case"circle":this.distance=[e.x-s,e.y-l],g=d({},g,{x:0,y:0,r:r/2});break;case"rect":this.distance=[e.x-s+r/2,e.y-l+c/2],g=d({},g,{x:-r/2,y:-c/2,r:r/2}),a&&(g.radius=a);break;case"ellipse":this.distance=[e.x-s,e.y-l],g=d({},g,{x:0,y:0,rx:r/2,ry:c/2});break;case"path":this.distance=[e.x-s,e.y-l],g.path=n.get("keyShape").attrs.path,g.size=[r,c],g.x=0,g.y=0}t.addShape(h,{attrs:g,className:"shadow-node"}).toFront()},_nodeOnDrag:function(e,t){var n=t.get("item"),a=n.getBBox(),i=a.width,o=a.height,r=a.centerX,c=a.centerY,s=n.get("currentShape"),d=n.get("shapeFactory")[s].shapeType,l=t.getItem("shadow-node");if("path"===d){var h=e.x-r-this.distance[0],g=e.y-c-this.distance[1];l.attr({path:[["M",h,g-o/2],["L",h+i/2,g],["L",h,g+o/2],["L",h-i/2,g],["Z"]]})}else l.attr({x:e.x-r-this.distance[0],y:e.y-c-this.distance[1]});l.toFront()},_nodeOnDragEnd:function(e,t){var n=t.get("item"),a=n.getBBox(),i=a.width,o=a.height,r=t.getItem("shadow-node"),c=n.get("currentShape"),s={x:0,y:0};switch(n.get("shapeFactory")[c].shapeType){case"ellipse":case"circle":s.x=e.x-this.distance[0],s.y=e.y-this.distance[1];break;case"rect":s.x=e.x-this.distance[0]+i/2,s.y=e.y-this.distance[1]+o/2;break;case"path":s.x=e.x-this.distance[0],s.y=e.y-this.distance[1]}r.remove(),n.updatePosition(s),this.graph.refreshPositions()}})}(e)},h=(n("f3/d"),n("Z2Ku"),n("dRSK"),{cursor:"default",fill:"#E7F7FE",stroke:"#1890FF",lineWidth:1}),g={hover:{cursor:"pointer",shadowOffsetX:0,shadowOffsetY:4,shadowBlur:10,opacity:.8},selected:{fill:"#f9f9f9",stroke:"#1890FF",cursor:"default"}},f={cursor:"default",fill:"#666",textAlign:"center",textBaseline:"middle",fontSize:12},u={hover:{},selected:{}},p={width:20,height:20,left:0,top:0},v={radius:11,fill:"#1890FF",fillOpacity:.25},y={r:4,fill:"#fff",stroke:"#1890FF",lineWidth:1},b=v,m={setStyle:function(e,t,n,a){e.attr(n),t&&e.attr(a)},anchorShow:function(e,t){e?t.showAnchor(t):t.clearAnchor(t)},anchorActived:function(e,t){e?(t.showAnchor(t),this.getAnchorPoints().forEach((function(e,n){var a=t.get("children")[0].getBBox(),i=t.addShape("circle",{attrs:{x:a.minX+a.width*e[0],y:a.minY+a.height*e[1],r:b.radius,fill:"#1890ff",opacity:.5},nodeId:t.get("item")._cfg.id,className:"node-anchor-bg",draggable:!0,isAnchor:!0,index:n});t.anchorShapes.push(i)})),t.anchorShapes.filter((function(e){"node-anchor"===e.get("className")&&e.toFront(),"node-anchor-group"===e.get("className")&&(e.attr({r:b.radius+2}),e.toFront())}))):t.clearAnchor(t)},nodeSelected:function(e,t){var n=this.options.$style,a=this.options.nodeLabelStyles,i=this.options.nodeStateStyles.selected,o=this.options.nodeLabelStateStyles.selected,r=t.getChildByIndex(0),c=t.getChildByIndex(1);e?m.setStyle(r,c,i,o):m.setStyle(r,c,n,a)},nodeHover:function(e,t){var n=t.getChildByIndex(0),a=t.getChildByIndex(1);e?(n.attr("cursor","move"),a&&a.attr("cursor","default")):(n.attr("cursor","default"),a&&a.attr("cursor","default"))},edgeHover:function(e,t){var n=t.getChildByIndex(0),a=n.get("attrs").endArrow;e?(n.attr("stroke","#1890FF"),a&&n.attr("endArrow",{path:a.path,fill:"#1890FF"})):(n.attr("stroke","#aab7c3"),a&&n.attr("endArrow",{path:a.path,fill:"#aab7c3"}))},edgeSelected:function(e,t){var n=t.getChildByIndex(0),a=n.get("attrs").endArrow;e?(n.attr({stroke:"#1890FF",lineWidth:2}),a&&n.attr("endArrow",{path:a.path,fill:"#1890FF"})):(n.attr({stroke:"#aab7c3",lineWidth:1}),a&&n.attr("endArrow",{path:a.path,fill:"#aab7c3"}))}},S=m,w=n("dfwq"),C=null;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=g,k=u,_=v,E=function(e){var t=e.Util;e.registerNode("base-node",{drawIcon:function(e,t){this.options.icon&&(t.icon=t.addShape("image",{attrs:{img:this.options.icon,x:this.options.iconStyles.left,y:this.options.iconStyles.top,width:this.options.iconStyles.width,height:this.options.iconStyles.height},className:"".concat(this.options.type,"-icon")}),e.hideIcon&&t.icon.hide())},initAnchor:function(e,t){var n=this;t.anchorShapes=[],t.showAnchor=function(t){n.drawAnchor(e,t)},t.clearAnchor=function(e){e.anchorShapes&&e.anchorShapes.forEach((function(e){return e.remove()})),e.anchorShapes=[]}},drawAnchor:function(e,t){var n=this.options.anchorPointStyles,a=t.get("children")[0].getBBox();this.getAnchorPoints().forEach((function(e,i){var o=t.addShape("circle",{attrs:x({x:a.minX+a.width*e[0],y:a.minY+a.height*e[1]},n),nodeId:t.get("id"),className:"node-anchor",draggable:!0,isAnchor:!0,index:i}),r=t.addShape("circle",{attrs:{x:a.minX+a.width*e[0],y:a.minY+a.height*e[1],r:_.radius,fill:"#000",opacity:0},nodeId:t.get("id"),className:"node-anchor-group",draggable:!0,isAnchor:!0,index:i});!function(e,t,n){e.on("mouseenter",(function(){e.attr({cursor:"crosshair"})})),e.on("dragstart",(function(){if(null==C){var a=e.get("attrs").r,i=t.get("cacheCanvasBBox"),o=t.get("item")._cfg,r=o.id,c=(o.model.style.lineWidth||0)/2,s=[(i.width-2*a-4)*(n[0]-.5)-c,(i.height-2*a-4)*(n[1]-.5)-c],d=t.addShape("path",{attrs:{stroke:"#1890FF",lineDash:[5,5],path:[["M"].concat(s),["L"].concat(s)]},className:"dashed-line",pointStart:s});t.toFront(),d.toFront(),C=r}})),e.on("drag",(function(e){var n=t.get("children")[0].get("canvasBox"),a=t.getItem("dashed-line"),i=a.get("pointStart");a.toFront(),a.attr({path:[["M"].concat(Object(w.a)(i)),["L",e.x-n.x-n.width/2-2,e.y-n.y-n.height/2-2]]})})),e.on("dragend",(function(e){t.getItem("dashed-line").remove(),C=null})),e.on("dragenter",(function(e){if(e.target.cfg.nodeId!==C){var n=e.target.cfg.index;n&&t.getAllAnchorBg()[n]&&t.getAllAnchorBg()[n].attr("fillOpacity",.7)}})),e.on("dragleave",(function(e){if(e.target.cfg.nodeId!==C){var n=e.target.cfg.index;n&&t.getAllAnchorBg()[n]&&t.getAllAnchorBg()[n].attr("fillOpacity",.5)}}))}(r,t,e),t.anchorShapes.push(o),t.anchorShapes.push(r)})),t.getAllAnchors=function(){return t.anchorShapes.filter((function(e){return!0===e.get("isAnchor")}))},t.getAnchor=function(e){return t.anchorShapes.filter((function(t){return"node-anchor"===t.get("className")&&t.get("index")===e}))},t.getAllAnchorBg=function(){return t.anchorShapes.filter((function(e){return"node-anchor-bg"===e.get("className")}))}},addLabel:function(e,t){if(e.label){var n=this.options.labelCfg;n&&n.fontSize<12&&(n.fontSize=12),t.addShape("text",{attrs:x({x:0,y:0,width:100,height:100,text:e.label},n),className:"node-text",draggable:!0})}},draw:function(e,n){var a=this.shapeType||"rect",i=t.deepMix({},this.getShapeStyle(e),e),o=n.addShape(a,{attrs:this.getShapeStyle(e),className:"".concat(a,"-shape"),draggable:!0});return this.options=x({labelCfg:{style:{}},nodeStateStyles:A,nodeLabelStateStyles:k},i),this.addLabel(e,n),this.drawIcon(e,n),this.initAnchor(e,n),o},runAnimate:function(e,t){e.active},afterDraw:function(e,t){t.getItem=function(e){return t.get("children").find((function(t){return t.get("className")===e}))},this.runAnimate(e,t)},update:function(e,t){var n=t.get("model"),a=t.get("keyShape").attrs,i=t.get("group").getItem("node-text"),o=t.get("group").get("children")[0];setTimeout((function(){i&&i.attr({text:n.label,labelCfg:a.labelCfg}),o.attr(x({},a,{},n.style))}))},afterUpdate:function(e,t){var n=t.get("group").icon;n&&(e.hideIcon&&n.get("visible")?n.hide():e.hideIcon||n.get("visible")||n.show())},setState:function(e,t,n){var a=n.getContainer();["anchorShow","anchorActived","nodeSelected","nodeHover","nodeOnDragStart","nodeOnDrag","nodeOnDragEnd"].includes(e)&&S[e].call(this,t,a)},getAnchorPoints:function(e){return[[.5,0],[1,.5],[.5,1],[0,.5]]}},"single-node")};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=p,j=h,B=y,D=f,F=function(e){E(e),function(e){e.registerNode("rect-node",{shapeType:"rect",options:{icon:n("PsyZ").default,iconStyles:N},getShapeStyle:function(e){var t=e.style.width||80,n=e.style.height||40;return I({},j,{width:t,height:n,x:-t/2,y:-n/2,radius:5,shadowOffsetX:0,shadowOffsetY:2,shadowColor:"#ccc",shadowBlur:10,anchorPointStyles:B,labelCfg:I({},D,{},e.style.nodeLabelStyles)})},getAnchorPoints:function(e){return[[1,.5],[0,.5]]}},"base-node"),e.registerNode("circle-node",{shapeType:"circle",getShapeStyle:function(e){var t=e.style.r||30;return I({},j,{r:t,x:0,y:0},e.style,{anchorPointStyles:B,labelCfg:I({},D,{},e.style.nodeLabelStyles)})},getAnchorPoints:function(e){return[[.5,0],[1,.5],[.5,1],[0,.5]]}},"base-node"),e.registerNode("ellipse-node",{shapeType:"ellipse",getShapeStyle:function(e){return I({rx:50,ry:30},j,{x:0,y:0,anchorPointStyles:B,labelCfg:I({},D,{},e.style.nodeLabelStyles)})},getAnchorPoints:function(e){return[[.5,0],[0,.5],[1,.5],[.5,1]]}},"base-node"),e.registerNode("diamond-node",{shapeType:"path",getShapeStyle:function(e){return I({path:this.getPath(e)},j,{x:0,y:0,anchorPointStyles:B,labelCfg:I({},D,{},e.style.nodeLabelStyles)})},getPath:function(e){var t=e.size||[80,80],n=t[0],a=t[1];return[["M",0,-a/2],["L",n/2,0],["L",0,a/2],["L",-n/2,0],["Z"]]},getAnchorPoints:function(e){return[[.5,0],[0,.5],[1,.5],[.5,1]]}},"base-node")}(e),function(e){e.registerEdge("polyline-edge",{setState:function(e,t,n){var a=n.getContainer();["edgeHover","edgeSelected"].includes(e)&&S[e].call(this,t,a)}},"polyline"),e.registerEdge("line-edge",{setState:function(e,t,n){var a=n.getContainer();["edgeHover","edgeSelected"].includes(e)&&S[e].call(this,t,a)}},"line"),e.registerEdge("quadratic-edge",{setState:function(e,t,n){var a=n.getContainer();["edgeHover","edgeSelected"].includes(e)&&S[e].call(this,t,a)}},"quadratic"),e.registerEdge("cubic-edge",{setState:function(e,t,n){var a=n.getContainer();["edgeHover","edgeSelected"].includes(e)&&S[e].call(this,t,a)}},"cubic"),e.registerEdge("arc-edge",{curveOffset:40,setState:function(e,t,n){var a=n.getContainer();["edgeHover","edgeSelected"].includes(e)&&S[e].call(this,t,a)}},"arc")}(e)},L=function(e){l(e),F(e)},M=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i.a)(this,e),L(r.a),t.registerFactory&&t.registerFactory(r.a),this.init(t)}return Object(o.a)(e,[{key:"init",value:function(e){var t=Object.assign({container:"canvasPanel",width:window.innerWidth-100,height:window.innerHeight-40,fitViewPadding:20,animate:!0,layout:{type:"dagre",nodesep:30,ranksep:50},modes:{default:["drag-canvas","delete-item","select-node","hover-node","drag-node","active-edge"]},defaultNode:{type:"circle-node"},defaultEdge:{type:"polyline-edge",style:{radius:5,offset:15,stroke:"#aab7c3",lineAppendWidth:10,endArrow:{path:"M 0,0 L 8,4 L 7,0 L 8,-4 Z",fill:"#aab7c3"}}},nodeStateStyles:{hover:{fill:"#eee"},selected:{stroke:"#1890FF"}},edgeStateStyles:{selected:{stroke:"steelblue"},hover:{fill:"steelblue"}}},e);e.plugins&&e.plugins.length&&(t.plugins=e.plugins),this.instance=new r.a.Graph(t)}},{key:"destroy",value:function(){this.instance.destroy(),this.instance=null}}]),e}(),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"itemPanel",class:{hidden:e.itemVisible},attrs:{id:"itemPanel"}},[n("i",{staticClass:"iconfont icon-h-drag"}),e._v(" "),n("div",{staticClass:"icon-tool"},[n("i",{staticClass:"iconfont icon-line",attrs:{draggable:"true","data-type":"edge","data-shape":"line"}}),e._v(" "),n("i",{staticClass:"iconfont icon-quadratic",attrs:{draggable:"true","data-type":"edge","data-shape":"quadratic"}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-circle",attrs:{draggable:"true","data-type":"node","data-shape":"circle"}}),e._v(" "),n("i",{staticClass:"iconfont icon-rect",attrs:{draggable:"true","data-type":"node","data-shape":"rect"}}),e._v(" "),n("i",{staticClass:"iconfont icon-ellipse",attrs:{draggable:"true","data-type":"node","data-shape":"ellipse"}}),e._v(" "),n("i",{staticClass:"iconfont icon-diamond",attrs:{draggable:"true","data-type":"node","data-shape":"diamond"}}),e._v(" "),n("i",{staticClass:"iconfont icon-model-rect",attrs:{draggable:"true","data-type":"node","data-shape":"modelRect"}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"gb-toggle-btn",attrs:{draggable:"true"},on:{click:function(t){e.itemVisible=!e.itemVisible}}})])])};T._withStripped=!0;var V={name:"ItemPanel",props:{graph:{type:Object,default:function(){}}},data:function(){return{itemVisible:!1}},mounted:function(){var e=this;Object(w.a)(this.$refs.itemPanel.querySelector(".icon-tool").querySelectorAll(".iconfont")).forEach((function(t){t.addEventListener("click",(function(t){e.$emit("canvas-add-".concat(t.target.dataset.type),t)})),t.addEventListener("dragend",(function(t){e.$emit("canvas-add-".concat(t.target.dataset.type),t)}))})),document.addEventListener("drop",(function(e){e.preventDefault()}),!1)},methods:{addEdge:function(e){}}},H=n("KHd+"),z=Object(H.a)(V,T,[],!1,null,null,null);z.options.__file="src/pages/graph/ItemPanel.vue";var W=z.exports,Y={nodes:[{id:"1",label:"new Vue()",data:{date:"2020-04-20"},type:"diamond-node",style:{hover:{fill:"#ccc"},selected:{stroke:"#ccc"},nodeLabelStyles:{cursor:"default",fill:"red",textAlign:"center",textBaseline:"middle",fontSize:13}}},{id:"2",label:"id: 2",type:"circle-node"},{id:"3",label:"id: 3"},{id:"4",label:"id: 4",style:{size:[130,100]},type:"ellipse-node"},{id:"5",label:"id: 5",type:"diamond-node"},{id:"8",label:"id: 8",style:{size:[130,100]},type:"ellipse-node"},{id:"9",label:"id: 9"}],edges:[{source:"1",target:"2",data:{type:"A",amount:"100,000 元",date:"2019-08-03"},label:"条件"},{source:"1",target:"3",data:{type:"B",amount:"100,000 元",date:"2019-08-03"},label:"终止"},{source:"2",target:"5",data:{type:"C",amount:"100,000 元",date:"2019-08-03"},label:"循环"},{source:"3",target:"4",data:{type:"C",amount:"100,000 元",date:"2019-08-03"},label:"否"},{source:"1",target:"8",data:{type:"B",amount:"100,000 元",date:"2019-08-03"},label:"小于"},{source:"1",target:"9",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}}]},q={components:{ItemPanel:W},data:function(){return{graph:{},highLight:{undo:!1,redo:!1},lineStyle:{type:"line",width:1},headVisible:!1,configVisible:!1,config:{}}},mounted:function(){var e=this;this.$nextTick((function(){e.createGraphic(),e.initGraphEvent()}))},beforeDestroy:function(){this.graph.destroy()},methods:{createGraphic:function(){var e=new M({});this.graph=e.instance,this.graph.read(Y),this.graph.paint()},copyNode:function(){},paste:function(){},addNode:function(e){var t={text:"node",type:"rect-node",x:e.clientX-50,y:e.clientY+200};this.graph.addItem("node",t)},addEdge:function(e){this.graph.addItem("edge",{text:"edge",shape:"line",style:{strokeWidth:1},label:"xxx",labelCfg:{}})},initGraphEvent:function(){var e=this;this.graph.on("after-node-selected",(function(t){if(e.configVisible=!!t,t){var n=t.get("id"),a=t.get("model");e.config=a,a.label=n,a.style.fill="rgba(24, 144, 255, .3)",e.graph.updateItem(t,a)}})),this.graph.on("after-edge-selected",(function(t){e.configVisible=!!t,t&&(e.config=t.get("model").id,e.graph.updateItem(t,{label:"model"}))})),this.graph.on("before-node-removed",(function(e){e.target;var t=e.callback;setTimeout((function(){t(!0)}),1e3)})),this.graph.on("after-node-dblclick",(function(e){})),this.graph.on("before-edge-add",(function(t){var n=t.source,a=t.target,i=t.sourceAnchor,o=t.targetAnchor;setTimeout((function(){e.graph.addItem("edge",{source:n.get("id"),target:a.get("id"),sourceAnchor:i,targetAnchor:o,label:"edge label"})}),100)}))}}},X=Object(H.a)(q,a,[],!1,null,null,null);X.options.__file="src/pages/graph/graph.vue";t.default=X.exports}}]);