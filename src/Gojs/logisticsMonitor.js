import React from 'react';
import * as go from 'gojs';
import jq from "jquery";
import "./logisticStyle/DataInspector.css";
import { Inspector } from "./DataInspector";
// import "./logisticStyle/logisticsChart.less";
// import { ReactDiagram } from 'gojs-react';
var myDiagram = null;
var myPalette = null;

class LogisticsChart extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            textAreaValue:{
                "class": "go.GraphLinksModel",
                "copiesArrays": true,
                "copiesArrayObjects": true,
                "linkFromPortIdProperty": "fid",
                "linkToPortIdProperty": "tid",
                "nodeDataArray": [ 
                  {"key":7, 
                  "angle":90, 
                  "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", 
                  "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} 
                ], 
                  "loc":"-199.8133333333334 -133.99999999999997"},
                  {"key":-8, "angle":90, "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-157.2933333333334 -133.99999999999997"},
                  {"key":-9, "angle":90, "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-114.77333333333343 -133.99999999999997"},
                  {"key":-10, 
                  "angle":90, 
                  "fil":"rgba(256,0,0,0.5)",
                  "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", 
                  "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], 
                  "loc":"-242.33333333333337 -134"},
                  {"key":23, "geo":"F1 M997.871,1056.759h-35.433v21.26h8.504c3.131,0,5.669,2.538,5.669,5.669v4.96h21.26v-4.96c0-3.131,2.538-5.669,5.669-5.669h8.504v-21.26H997.871z M1008.5,1067.034l-2.834,2.835l-4.252,4.252v-4.252h-11.339v8.504h4.252l-4.252,4.252l-2.834,2.834l0,0l-2.834-2.834l-4.252-4.252h4.252v-8.504h-18.425v-5.669h35.433v-4.252l4.252,4.252L1008.5,1067.034z", "ports":[ {"id":"U0", "spot":"1 0.33 -0.5 0.25"},{"id":"U4", "spot":"0 0.33 0.5 0.25"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-68.71033333333344 -128.65886999999998"},
                  {"key":22, "angle":90, "geo":"F1 M997.871,1056.759h-35.433v21.26h8.504c3.131,0,5.669,2.538,5.669,5.669v4.96h21.26v-4.96c0-3.131,2.538-5.669,5.669-5.669h8.504v-21.26H997.871z M1008.5,1067.034l-2.834,2.835l-4.252,4.252v-4.252h-11.339v8.504h4.252l-4.252,4.252l-2.834,2.834l0,0l-2.834-2.834l-4.252-4.252h4.252v-8.504h-18.425v-5.669h35.433v-4.252l4.252,4.252L1008.5,1067.034z", "ports":[ {"id":"U0", "spot":"1 0.33 -0.5 0.25"},{"id":"U4", "spot":"0 0.33 0.5 0.25"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-74.05146333333346 -87.91136999999992"},
                  {"key":-13, "angle":180, "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-68.71033333333344 -41.84836999999993"},
                  {"key":-14, "angle":180, "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-68.71033333333344 0.6716300000000501"},
                  {"key":24, "angle":90, "geo":"F1 M997.871,1056.759h-35.433v21.26h8.504c3.131,0,5.669,2.538,5.669,5.669v4.96h21.26v-4.96c0-3.131,2.538-5.669,5.669-5.669h8.504v-21.26H997.871z M1008.5,1067.034l-2.834,2.835l-4.252,4.252v-4.252h-11.339v8.504h4.252l-4.252,4.252l-2.834,2.834l0,0l-2.834-2.834l-4.252-4.252h4.252v-8.504h-18.425v-5.669h35.433v-4.252l4.252,4.252L1008.5,1067.034z", "ports":[ {"id":"U0", "spot":"1 0.33 -0.5 0.25"},{"id":"U4", "spot":"0 0.33 0.5 0.25"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-74.05146333333346 46.73463000000004"},
                  {"key":-16, "angle":180, "geo":"F1 M997.871,1056.759h-35.433v21.26h8.504c3.131,0,5.669,2.538,5.669,5.669v4.96h21.26v-4.96c0-3.131,2.538-5.669,5.669-5.669h8.504v-21.26H997.871z M1008.5,1067.034l-2.834,2.835l-4.252,4.252v-4.252h-11.339v8.504h4.252l-4.252,4.252l-2.834,2.834l0,0l-2.834-2.834l-4.252-4.252h4.252v-8.504h-18.425v-5.669h35.433v-4.252l4.252,4.252L1008.5,1067.034z", "ports":[ {"id":"U0", "spot":"1 0.33 -0.5 0.25"},{"id":"U4", "spot":"0 0.33 0.5 0.25"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-288.14633333333336 90.99950000000001"},
                  {"key":31, "geo":"F1 M1716.377,1073.765c-3.131,0-5.669-2.538-5.669-5.669v-8.504h-21.26v8.504c0,3.131-2.539,5.669-5.669,5.669h-8.504v21.26h8.504c3.131,0,5.669,2.538,5.669,5.669v8.504h21.26v-8.504c0-3.131,2.538-5.669,5.669-5.669h8.504v-21.26H1716.377zM1721.338,1084.395l-2.835,2.834l-4.252,4.252v-4.252h-11.338v11.339h4.252l-4.252,4.252l-2.834,2.834l0,0l-2.835-2.834l-4.252-4.252h4.252v-11.339h-18.425v-5.669h18.425v-18.425h5.669v18.425h11.338v-4.252l4.252,4.252L1721.338,1084.395z", "ports":[ {"id":"U0", "spot":"1 0.5 -0.5 0.25"},{"id":"U4", "spot":"0 0.5 0.5 0.25"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-68.46033333333344 96.34063000000003", "angle":90},
                  {"key":10, "angle":-90,"fil":"rgba(256,256,0,0.8)",
                   "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-114.52333333333343 96.34063000000003"},
                  {"key":-19, "angle":-90, "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-157.0433333333334 96.34063000000003"},
                  {"key":-20, "angle":-90, "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-199.5633333333334 96.34063000000003"},
                  {"key":-21, "angle":-90, "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-242.08333333333337 96.34063000000003"},
                  {"key":9, "fil":"rgba(0,256,0,0.8)","geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-288.14633333333336 53.79499999999996"},
                  {"key":-17, "geo":"F1 M1421.207,1150.782v42.52h21.26v-42.52H1421.207z M1438.923,1164.956h-4.252v21.26h-5.669v-21.26h-4.252l7.087-7.087l0,0l2.834,2.835L1438.923,1164.956L1438.923,1164.956z", "ports":[ {"id":"U6", "spot":"0.5 0 0 0.5"},{"id":"U2", "spot":"0.5 1 0 -0.5"} ], "loc":"-288.14633333333336 11.274999999999977"}
                   ],
                    "linkDataArray": [ 
                  {"from":-8, "to":7, "fid":"U2", "tid":"U6"},
                  {"from":-9, "to":-8, "fid":"U2", "tid":"U6"},
                  {"from":7, "to":-10, "fid":"U2", "tid":"U6"},
                  {"from":23, "to":-9, "fid":"U4", "tid":"U6"},
                  {"from":22, "to":23, "fid":"U4", "tid":"U2"},
                  {"from":-14, "to":-13, "fid":"U2", "tid":"U6"},
                  {"from":-13, "to":22, "fid":"U2", "tid":"U0"},
                  {"from":24, "to":-14, "fid":"U4", "tid":"U6"},
                  {"from":31, "to":24, "fid":"U4", "tid":"U0"},
                  {"from":10, "to":31, "fid":"U2", "tid":"U2"},
                  {"from":-19, "to":10, "fid":"U2", "tid":"U6"},
                  {"from":-20, "to":-19, "fid":"U2", "tid":"U6"},
                  {"from":-21, "to":-20, "fid":"U2", "tid":"U6"},
                  {"from":-16, "to":-21, "fid":"U4", "tid":"U6"},
                  {"from":9, "to":-16, "fid":"U2", "tid":"U2"},
                  {"from":-17, "to":9, "fid":"U2", "tid":"U6"}
                   ]
                },
          
            }
         }
    
    componentDidMount(){
      // ????????????????????????
      this.initDiagram();
    };
    
    //gojs?????????
    initDiagram(){
        var _this = this;
        function init(){
            var $ = go.GraphObject.make;  
            myDiagram =
              $(go.Diagram, "myDiagramDiv",
                {
                  initialScale: 1.2,  //?????????????????????????????????????????????????????????1.5???
                  "commandHandler.defaultScale": 1.2,
                  allowLink: false,  // no user-drawn links
                  // ??????????????????DraggingTool?????????????????????????????????
                  draggingTool: new SnappingTool(),
                  contextMenu:
                    $("ContextMenu",
                      makeButton("Paste",
                        function(e, obj) { e.diagram.commandHandler.pasteSelection(e.diagram.toolManager.contextMenuTool.mouseDownPoint); },
                        function(o) { return o.diagram.commandHandler.canPasteSelection(o.diagram.toolManager.contextMenuTool.mouseDownPoint); }),
                      makeButton("Undo",
                        function(e, obj) { e.diagram.commandHandler.undo(); },
                        function(o) { return o.diagram.commandHandler.canUndo(); }),
                      makeButton("Redo",
                        function(e, obj) { e.diagram.commandHandler.redo(); },
                        function(o) { return o.diagram.commandHandler.canRedo(); })
                    ),
                  "undoManager.isEnabled": true,  //isEnabled???????????????true?????????UndoManager???????????????????????????????????????????????????
                });
                myDiagram.grid.visible = true;  //??????????????????
            // ?????????????????????????????????????????????????????????
            function makeButton(text, action, visiblePredicate) {
              return $("ContextMenuButton",
                $(go.TextBlock, text),
                { click: action },
                // don't bother with binding GraphObject.visible if there's no predicate
                visiblePredicate ? new go.Binding("visible", "", function(o, e) { return o.diagram ? visiblePredicate(o, e) : false; }).ofObject() : {});
            }
      
            // ??????????????????????????????????????? * ????????????????????????????????????----(??????????????????)
            myDiagram.addDiagramListener("Modified", function(e) {
              var button = document.getElementById("SaveButton");
              if (button) button.disabled = !myDiagram.isModified;
              var idx = document.title.indexOf("*");
              if (myDiagram.isModified) {
                if (idx < 0) document.title += "*";
              } else {
                if (idx >= 0) document.title = document.title.substr(0, idx);
              }
            });
            // -----------------------------------------------------------------
            // myDiagram.nodeTemplateMap.add("Comment",
            //   $(go.Node,
            //     new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
            //     $(go.TextBlock,
            //       { stroke: "brown", font: "9pt sans-serif" },
            //       new go.Binding("text"))
            //   ));
      
        //?????????????????????????????????
          // Shape????????????????????????????????????????????????Geometry
            //????????????????????????????????????????????????????????????????????????
            myDiagram.nodeTemplate =
              $(go.Node, "Spot",
                
              $(go.Panel, "Spot",
                  { name: "SHAPE" },
              $(go.Shape,
                {
                  name: "SHAPE",
                  // ??????????????????????????????????????????????????????????????????????????????
                  geometryString: "F1 M0 0 L20 0 20 20 0 20 z",
                  fill: "rgba(128, 128, 128, 0.5)" // ???????????????????????????
                },
                // shape?????????geometryString??????
                new go.Binding("geometryString", "geo"),
                new go.Binding("fill", "fil"),
                // ?????????????????????????????????????????????
                new go.Binding("stroke", "isSelected", function(s) { return s ? "dodgerblue" : "black"; }).ofObject()
                ),
              $(go.Panel,"Spot",
                  { name: "SHAPE",},
                  $(go.TextBlock,
                  new go.Binding("text", "key"),
                  { textAlign:"left",stroke:"red" }),
                  )
               ),
               $(go.TextBlock,{ name: "SHAPE",margin: 6,textAlign:"center",alignment: go.Spot.Right },new go.Binding("text","key")), 
                {
                  locationObjectName: "SHAPE",
                  locationSpot: go.Spot.Center,
                  selectionAdorned: false,
                    // ???Shape.stroke?????????Binding???????????????
                  itemTemplate:
                    // ?????????????????????X??????????????????????????????ID???????????????
                    $(go.Panel,"Spot",
                      new go.Binding("portId", "id"),
                      new go.Binding("alignment", "spot", go.Spot.parse),
                      $(go.Shape, "XLine",
                        { width: 6, height: 6, background: "transparent", fill: null, stroke: "gray" },
                        // portFigure?????????????????????
                        new go.Binding("figure", "id", portFigure), 
                        new go.Binding("angle", "angle"))
                    ),
                  // ??????????????????x?????????
                  linkConnected: function(node, link, port) {
                    if (link.category === "") port.visible = false;
                  },
                  linkDisconnected: function(node, link, port) {
                    if (link.category === "") port.visible = true;
                  }
                },
                // ??????????????????Spot Panel???????????????????????????
                new go.Binding("itemArray", "ports"),
                // ???????????????????????????
                new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
                // ???????????????????????????
                new go.Binding("angle", "angle").makeTwoWay(),
                // ??????????????????????????????????????????????????????????????????????????????????????????
                new go.Binding("layerName", "isSelected", function(s) { return s ? "Foreground" : ""; }).ofObject(),        
            );
      
            // ???????????????????????????????????????????????????????????????????????????????????????
            function portFigure(pid) {
              // console.log(pid);
              if (pid === null || pid === "") return "XLine";
              if (pid[0] === 'F') return "CircleLine";
              if (pid[0] === 'M') return "PlusLine";
              return "XLine";  // including when the first character is 'U'
            }
      
            myDiagram.nodeTemplate.contextMenu =
              $("ContextMenu",
                makeButton("?????? +90??",
                  function(e, obj) { rotate(obj.part.adornedPart, 90); }),
                makeButton("?????? -90??",
                  function(e, obj) { rotate(obj.part.adornedPart, -90); }),
                makeButton("?????? 180??",
                  function(e, obj) { rotate(obj.part.adornedPart, 180); }),
                makeButton("??????",
                  function(e, obj) { detachSelection(); }),
                makeButton("??????",
                  function(e, obj) { e.diagram.commandHandler.cutSelection(); },
                  function(o) { return o.diagram.commandHandler.canCutSelection(); }),
                makeButton("??????",
                  function(e, obj) { e.diagram.commandHandler.copySelection(); },
                  function(o) { return o.diagram.commandHandler.canCopySelection(); }),
                makeButton("??????",
                  function(e, obj) { e.diagram.commandHandler.pasteSelection(e.diagram.toolManager.contextMenuTool.mouseDownPoint); },
                  function(o) { return o.diagram.commandHandler.canPasteSelection(o.diagram.toolManager.contextMenuTool.mouseDownPoint); }),
                makeButton("??????",
                  function(e, obj) { e.diagram.commandHandler.deleteSelection(); },
                  function(o) { return o.diagram.commandHandler.canDeleteSelection(); }),
                makeButton("??????",
                  function(e, obj) { e.diagram.commandHandler.undo(); },
                  function(o) { return o.diagram.commandHandler.canUndo(); }),
                makeButton("Redo",
                  function(e, obj) { e.diagram.commandHandler.redo(); },
                  function(o) { return o.diagram.commandHandler.canRedo(); })
              );
      
            // ?????????????????????????????????????????????
            function rotate(node, angle) {
              var tool = myDiagram.toolManager.draggingTool;  // should be a SnappingTool
              myDiagram.startTransaction("rotate " + angle.toString());
              var sel = new go.Set(/*go.Node*/);
              sel.add(node);
              var coll = tool.computeEffectiveCollection(sel).toKeySet();
              var bounds = myDiagram.computePartsBounds(coll);
              var center = bounds.center;
              coll.each(function(n) {
                n.angle += angle;
                n.location = n.location.copy().subtract(center).rotate(angle).add(center);
              });
              myDiagram.commitTransaction("rotate " + angle.toString());
            }
      
            function detachSelection() {
              myDiagram.startTransaction("detach");
              var coll = new go.Set(/*go.Link*/);
              myDiagram.selection.each(function(node) {
                if (!(node instanceof go.Node)) return;
                node.linksConnected.each(function(link) {
                  if (link.category !== "") return;  // ignore comments
                  // ???????????????????????????????????????
                  if (link.getOtherNode(node).isSelected) return;
                  // ????????????
                  coll.add(link);
                });
              });
              myDiagram.removeParts(coll, false);
              myDiagram.commitTransaction("detach");
            }
      
            // no visual representation of any link data
            myDiagram.linkTemplate = $(go.Link, { visible: false });
      
            // ?????????Comment????????????????????????????????????
            myDiagram.linkTemplateMap.add("Comment",
              $(go.Link,
                { curve: go.Link.Bezier },
                $(go.Shape, { stroke: "brown", strokeWidth: 2 }),
                $(go.Shape, { toArrow: "OpenTriangle", stroke: "brown" })
              ));
      
            // ?????????????????????????????????
            myDiagram.model =
              $(go.GraphLinksModel,
                {
                  copiesArrays: true,
                  copiesArrayObjects: true,
                  linkFromPortIdProperty: "fid",
                  linkToPortIdProperty: "tid"
                });
      
            // ????????????palette????????????key??? '?????????'?????? ??????????????????????????????????????????????????????????????????????????????????????????????????????
            function keyCompare(a, b) {
              var at = a.data.key;
              var bt = b.data.key;
              if (at < bt) return -1;
              if (at > bt) return 1;
              return 0;
            }
      // ?????????????????????????????????
            myPalette =
              $(go.Palette, "myPaletteDiv",
                {
                  initialScale: 1.2,
                  contentAlignment: go.Spot.Center,
                  nodeTemplate: myDiagram.nodeTemplate,  // ?????????myDiagram?????????????????? ?????????????????????????????????????????????????????????
                  "contextMenuTool.isEnabled": false,
                  layout: $(go.GridLayout,
                    {
                      cellSize: new go.Size(1, 1), spacing: new go.Size(5, 5),
                      wrappingColumn:11, comparer: keyCompare
                    }),
                  // ??????????????????????????????????????????
                  model: $(go.GraphLinksModel,
                    {
                      copiesArrays: true,
                      copiesArrayObjects: true,
                      linkFromPortIdProperty: "fid",
                      linkToPortIdProperty: "tid",
                      nodeDataArray: [
                        {
                          key: 1,
                          geo: "F1 M0 0 L20 0 20 20 0 20z", 
                          ports: [
                            { id: "U6", spot: "0.5 0 0 0.5" },
                            { id: "U2", spot: "0.5 1 0 -0.5" }
                          ]
                        },
                        {
                          key: 3, angle: 90,
                          geo: "F1 M0 0 L20 0 20 20 0 20z",
                          ports: [
                            { id: "U6", spot: "0.5 0 0 0.5" },
                            { id: "U2", spot: "0.5 1 0 -0.5" }
                          ]
                        },
                        {  //?????????????????????
                          key: 5,angle: 180,
                          geo: "F1 M447.7,295.2v40h20v-40H447.7z M464.7,323.2l-3.5,3.5l-3.5,3.5l-3.5-3.5l-3.5-3.5h3.5v-23h7v23H464.7z",
                          ports: [
                            { id: "U6", spot: "0.5 0 0 0.5" },
                            { id: "U2", spot: "0.5 1 0 -0.5" }
                          ]
                        },
                        { //?????????????????????
                          key: 7, angle: 90,
                          geo: "F1 M447.7,295.2v40h20v-40H447.7z M464.7,323.2l-3.5,3.5l-3.5,3.5l-3.5-3.5l-3.5-3.5h3.5v-23h7v23H464.7z",
                          ports: [
                            { id: "U6", spot: "0.5 0 0 0.5" },
                            { id: "U2", spot: "0.5 1 0 -0.5" }
                          ]
                        },
                        {  //?????????????????????
                          key: 9,
                          geo: "F1 M447.7,295.2v40h20v-40H447.7z M464.7,323.2l-3.5,3.5l-3.5,3.5l-3.5-3.5l-3.5-3.5h3.5v-23h7v23H464.7z",
                          ports: [
                            { id: "U6", spot: "0.5 0 0 0.5" },
                            { id: "U2", spot: "0.5 1 0 -0.5" }
                          ]
                        },
                        {  //?????????????????????
                          key: 10,angle: -90,
                          geo: "F1 M447.7,295.2v40h20v-40H447.7z M464.7,323.2l-3.5,3.5l-3.5,3.5l-3.5-3.5l-3.5-3.5h3.5v-23h7v23H464.7z",
                          ports: [
                            { id: "U6", spot: "0.5 0 0 0.5" },
                            { id: "U2", spot: "0.5 1 0 -0.5" }
                          ]
                        },
                        {
                          key: 11, 
                          geo: "F1 M429,316.3h-13c-3.9,0-7,3.1-7,7v33h20v-13c0-3.9,3.1-7,7-7l0,0h13v-20H429z M444.1,326.5l-3.5,3.5l-3.5,3.5V330h-9c-3.1,0-5.6,2.5-5.6,5.6v13.1h-7V330l0,0c0-3.9,3.1-7,7-7l0,0h14.6v-3.5l3.5,3.5L444.1,326.5L444.1,326.5z",
                          ports: [
                            { id: "U0", spot: "1 0.25 -0.5 0.25" },
                            { id: "U2", spot: "0.25 1 0.25 -0.5" }
                          ]
                        },
                        {
                          key: 12, angle: 90,
                          geo: "F1 M429,316.3h-13c-3.9,0-7,3.1-7,7v33h20v-13c0-3.9,3.1-7,7-7l0,0h13v-20H429z M444.1,326.5l-3.5,3.5l-3.5,3.5V330h-9c-3.1,0-5.6,2.5-5.6,5.6v13.1h-7V330l0,0c0-3.9,3.1-7,7-7l0,0h14.6v-3.5l3.5,3.5L444.1,326.5L444.1,326.5z",
                          ports: [
                            { id: "U0", spot: "1 0.25 -0.5 0.25" },
                            { id: "U2", spot: "0.25 1 0.25 -0.5" }
                          ]
                        },
                        {
                          key: 13, angle: 180,
                          geo: "F1 M429,316.3h-13c-3.9,0-7,3.1-7,7v33h20v-13c0-3.9,3.1-7,7-7l0,0h13v-20H429z M444.1,326.5l-3.5,3.5l-3.5,3.5V330h-9c-3.1,0-5.6,2.5-5.6,5.6v13.1h-7V330l0,0c0-3.9,3.1-7,7-7l0,0h14.6v-3.5l3.5,3.5L444.1,326.5L444.1,326.5z",
                          ports: [
                            { id: "U0", spot: "1 0.25 -0.5 0.25" },
                            { id: "U2", spot: "0.25 1 0.25 -0.5" }
                          ]
                        },
                        {  //???????????????
                          key: 14, 
                          angle:270, 
                          geo: "F1 M429,316.3h-13c-3.9,0-7,3.1-7,7v33h20v-13c0-3.9,3.1-7,7-7l0,0h13v-20H429z M444.1,326.5l-3.5,3.5l-3.5,3.5V330h-9c-3.1,0-5.6,2.5-5.6,5.6v13.1h-7V330l0,0c0-3.9,3.1-7,7-7l0,0h14.6v-3.5l3.5,3.5L444.1,326.5L444.1,326.5z",
                          ports: [
                            { id: "U0", spot: "1 0.25 -0.5 0.25" },
                            { id: "U2", spot: "0.25 1 0.25 -0.5" }
                          ]
                        },
                        {
                          key: 21,angle: 180,
                          geo: "F1M332.1,376.6v20h15c2.8,0,5,2.2,5,5v15h20v-15c0-2.8,2.2-5,5-5h15v-20H332.1z M386.6,386.6l-3.5,3.5l-3.5,3.5 l0,0v-3.5h-14v14.5h3.5l-7,7l0,0l-7-7h3.5v-14.5h-17v-7h38v-3.5l0,0L386.6,386.6z",
                          ports: [
                            { id: "U0", spot: "1 0.25 -0.5 0.25" },
                            { id: "U4", spot: "0 0.25 0.5 0.25" },
                            { id: "U2", spot: "0.5 1 0 -0.5" },
                          ]
                        },
                        {
                          key: 22, angle: 90,
                          geo: "F1M332.1,376.6v20h15c2.8,0,5,2.2,5,5v15h20v-15c0-2.8,2.2-5,5-5h15v-20H332.1z M386.6,386.6l-3.5,3.5l-3.5,3.5 l0,0v-3.5h-14v14.5h3.5l-7,7l0,0l-7-7h3.5v-14.5h-17v-7h38v-3.5l0,0L386.6,386.6z",
                          ports: [
                            { id: "U0", spot: "1 0.25 -0.5 0.25" },
                            { id: "U4", spot: "0 0.25 0.5 0.25" },
                            { id: "U2", spot: "0.5 1 0 -0.5" },
                          ]
                        },
                        {  
                          key: 23, 
                          // angle: 180,
                          geo: "F1M332.1,376.6v20h15c2.8,0,5,2.2,5,5v15h20v-15c0-2.8,2.2-5,5-5h15v-20H332.1z M386.6,386.6l-3.5,3.5l-3.5,3.5 l0,0v-3.5h-14v14.5h3.5l-7,7l0,0l-7-7h3.5v-14.5h-17v-7h38v-3.5l0,0L386.6,386.6z",
                          ports: [
                            { id: "U0", spot: "1 0.25 -0.5 0.25" },
                            { id: "U4", spot: "0 0.25 0.5 0.25" },
                            { id: "U2", spot: "0.5 1 0 -0.5" },
                          ]
                        },
                        { //????????????????????????
                          key: 24, angle: 270,
                          geo: "F1M332.1,376.6v20h15c2.8,0,5,2.2,5,5v15h20v-15c0-2.8,2.2-5,5-5h15v-20H332.1z M386.6,386.6l-3.5,3.5l-3.5,3.5 l0,0v-3.5h-14v14.5h3.5l-7,7l0,0l-7-7h3.5v-14.5h-17v-7h38v-3.5l0,0L386.6,386.6z",
                          ports: [
                            { id: "U0", spot: "1 0.25 -0.5 0.25" },
                            { id: "U4", spot: "0 0.25 0.5 0.25" },
                            { id: "U2", spot: "0.5 1 0 -0.5" },
                          ]
                        },
                        { //???????????????????????????
                          key: 31,
                          geo: "F1 M452.3,327.6c-2.2,0-4-1.8-4-4v-16h-20v15c0,2.8-2.2,5-5,5h-15v20h15c2.8,0,5,2.2,5,5l0,0v15h20v-15c0-2.8,2.2-5,5-5c0,0,0,0,0,0h15v-20H452.3z M462.8,337.6l-3.5,3.5l-3.5,3.5l0,0v-3.5h-14v14.5h3.5l-3.5,3.5l-3.5,3.5l-3.5-3.5l-3.5-3.5h3.5v-14.5h-17v-7h17v-16.8h7v16.8h14v-3.5l0,0c1.4,1.4,2.4,2.4,3.5,3.5C460.3,335.2,461.4,336.2,462.8,337.6z",
                          ports: [
                            { id: "U0", spot: "1 0.5 -0.5 0.25" },
                            { id: "U4", spot: "0 0.5 0.5 0.25" },
                            { id: "U2", spot: "0.5 1 0 -0.5" }
                          ]
                        },
                        {
                          key: 41,angle: -45,
                          geo: "F1 M14.142 0 L28.284 14.142 14.142 28.284 0 14.142z",
                          ports: [
                            { id: "U1", spot: "1 1 -7.321 -7.321" },
                            { id: "U3", spot: "0 1 7.321 -7.321" },
                            { id: "U5", spot: "0 0 7.321 7.321" },
                            { id: "U7", spot: "1 0 -7.321 7.321" }
                          ]
                        },
      
                      ]  // end nodeDataArray
                    }) 
                });  // end Palette
                // myPalette.grid.visible = true; //??????????????????
                jq(function() {
                  var inspector = new Inspector('myInfo', myDiagram,
                                  {
                    properties: {
                      // key would be automatically added for nodes, but we want to declare it read-only also:
                      "key": { readOnly: true, show: Inspector.showIfPresent },
                      // fill and stroke would be automatically added for nodes, but we want to declare it a color also:
                      "fill": { show: Inspector.showIfPresent, type: 'color' },
                      "stroke": { show: Inspector.showIfPresent, type: 'color' }
                    }
                  });
                });
            // ?????????????????????????????????
            _this.load();  
          }   
  
          // ????????????????????????DraggingTool
          function SnappingTool() {
            go.DraggingTool.call(this);
          }
          go.Diagram.inherit(SnappingTool, go.DraggingTool); //?????????????????????????????????
      
           //???predicate ?????????????????????????????????
           //??????ID?????????????????????U?????????F?????????M?????????????????????????????????????????????
           //??????ID??????????????????????????????????????????????????????????????????????????????
           //????????????????????????????????????????????????????????????????????????????????????
          SnappingTool.prototype.compatiblePorts = function(p1, p2) {
            // ???????????????????????? 
            var part1 = p1.part;
            var id1 = p1.portId;
            // console.log(part1.findLinksConnected(id1),id1);
            if (id1 === null || id1 === "") return false;
            if (part1.findLinksConnected(id1).filter(function(l) { return l.category === ""; }).count > 0) return false;
            var part2 = p2.part;
            var id2 = p2.portId;
            if (id2 === null || id2 === "") return false;
            if (part2.findLinksConnected(id2).filter(function(l) { return l.category === ""; }).count > 0) return false;
            // ??????????????????????????????????????????
            console.log(id1,id2);
            if ((id1[0] === 'U' && id2[0] === 'U') ||(id1[0] === 'F' && id2[0] === 'M') ||
            (id1[0] === 'M' && id2[0] === 'F')) {
              // ???????????????????????????????????????????????????
              var a1 = this.effectiveAngle(id1, part1.angle);
              var a2 = this.effectiveAngle(id2, part2.angle);
              console.log(part1.angle,part2.angle);
              // ???????????????????????????????????????
              if (a1 - a2 === 180 || a1 - a2 === -180) return true;
            }
            return false;
          };
      
          // ????????????????????????????????????????????????????????????
          SnappingTool.prototype.effectiveAngle = function(id, angle) {
            var dir = id[1];
            var a = 0;
            if (dir === '1') a = 45;
            else if (dir === '2') a = 90;
            else if (dir === '3') a = 135;
            else if (dir === '4') a = 180;
            else if (dir === '5') a = 225;
            else if (dir === '6') a = 270;
            else if (dir === '7') a = 315;
            a += angle;
            if (a < 0) a += 360;
            else if (a >= 360) a -= 360;
            return a;
          };
      
          // ??????????????????????????????????????????????????????
          // ?????????????????????????????????????????????
          // ??????????????????????????????????????????
          SnappingTool.prototype.moveParts = function(parts, offset, check) {
            // ???????????????????????????????????????????????????????????????????????????????????????
            if (this._snapOffset && this.isActive && this.diagram.lastInput.up && parts === this.copiedParts) {
              go.DraggingTool.prototype.moveParts.call(this, parts, this._snapOffset, check);
              this._snapOffset = undefined;
              return;
            }
      
            var commonOffset = offset;
            // ????????????????????????????????????????????????
            var sit = parts.iterator;
            while (sit.next()) {
              var node = sit.key;
              if (!(node instanceof go.Node)) continue;
              var info = sit.value;
              var newloc = info.point.copy().add(offset);
      
              // ???????????????????????????
              var snapoffset = newloc.copy().subtract(node.location);
              var nearbyports = null;
              var closestDistance = 20 * 20;  // don't bother taking sqrt
              var closestPort = null;
              var closestPortPt = null;
              var nodePort = null;
              var mit = node.ports;
              while (mit.next()) {
                var port = mit.value;
                if (node.findLinksConnected(port.portId).filter(function(l) { return l.category === ""; }).count > 0) continue;
                var portPt = port.getDocumentPoint(go.Spot.Center);
                portPt.add(snapoffset);  // where it would be without snapping
      
                if (nearbyports === null) {
                  //?????????NODE????????????????????????
                  //????????????????????????????????????PARTS????????????
                  var nearbyparts = this.diagram.findObjectsIn(node.actualBounds,
                    function(x) { return x.part; },
                    function(p) { return !parts.has(p); },
                    true);
      
                  //???????????????????????????????????????GraphObjects??????
                  nearbyports = new go.Set(/*go.GraphObject*/);
                  nearbyparts.each(function(n) {
                    if (n instanceof go.Node) {
                      nearbyports.addAll(n.ports);
                    }
                  });
                }
      
                var pit = nearbyports.iterator;
                while (pit.next()) {
                  var p = pit.value;
                  if (!this.compatiblePorts(port, p)) continue;
                  var ppt = p.getDocumentPoint(go.Spot.Center);
                  var d = ppt.distanceSquaredPoint(portPt);
                  if (d < closestDistance) {
                    closestDistance = d;
                    closestPort = p;
                    closestPortPt = ppt;
                    nodePort = port;
                  }
                }
              }
      
              // ???????????????????????????
              if (closestPort !== null) {
                // ???????????????????????????????????????
                var noderelpt = nodePort.getDocumentPoint(go.Spot.Center).subtract(node.location);
                var snappt = closestPortPt.copy().subtract(noderelpt);
                // ???????????????????????????????????????????????????
                commonOffset = snappt.subtract(newloc).add(offset);
                //????????????node.dragComputation??????
                 //????????????node.minLocation???node.maxLocation
                break;
              }
            }
      
            // ??????????????????????????????????????????????????????????????????
            this._snapOffset = commonOffset.copy();  // remember for mouse-up when copying
            go.DraggingTool.prototype.moveParts.call(this, parts, commonOffset, check);
          };
      
         //???????????????????????????????????????????????????????????????????????????????????????????????????
          SnappingTool.prototype.doDropOnto = function(pt, obj) {
            go.DraggingTool.prototype.doDropOnto.call(this, pt, obj);
            var tool = this;
            // ????????????????????????????????????????????????????????????????????????????????????
            var coll = this.copiedParts || this.draggedParts;
            var it = coll.iterator;
            while (it.next()) {
              var node = it.key;
              if (!(node instanceof go.Node)) continue;
              // ???????????????????????????????????????????????????????????????????????????
              var pit = node.ports;
              while (pit.next()) {
                var port = pit.value;
                // ????????????-????????????????????????????????????????????????
                var portPt = port.getDocumentPoint(go.Spot.Center);
                if (!portPt.isReal()) continue;
                var nearbyports =
                  this.diagram.findObjectsAt(portPt,
                    function(x) {  // some GraphObject at portPt
                      var o = x;
                      // ????????????
                      while (o !== null && o.portId === null) o = o.panel;
                      return o;
                    },
                    function(p) {  // ????????????
                   //????????????????????????????????????????????????????????????P?????????NODE???PORT??????
                      if (coll.has(p.part)) return false;
                      var ppt = p.getDocumentPoint(go.Spot.Center);
                      if (portPt.distanceSquaredPoint(ppt) >= 0.25) return false;
                      return tool.compatiblePorts(port, p);
                    });
                // ??????????????????????????????
                var np = nearbyports.first();
                if (np !== null) {
                  // ???NODE??????????????????????????????????????????????????????
                  this.diagram.toolManager.linkingTool.insertLink(node, port, np.part, np);
                }
              }
            }
          };
      
       // ??????SHIFT?????????????????????????????????????????????????????????????????????
           // SHIFT????????????????????????????????????????????????????????????
           //????????????SHIFT????????????????????????????????????????????????????????????????????????
          SnappingTool.prototype.computeEffectiveCollection = function(parts) {
            if (this.diagram.lastInput.shift) {
              var links = new go.Set(/*go.Link*/);
              var coll = go.DraggingTool.prototype.computeEffectiveCollection.call(this, parts);
              coll.iteratorKeys.each(function(node) {
                // ???????????????????????????????????????????????????
                if (!(node instanceof go.Node)) return;
                node.findLinksConnected().each(function(link) {
                  if (link.category !== "") return;
                  // ????????????????????????????????????????????????
                  var othernode = link.getOtherNode(node);
                  if (othernode !== null && !coll.has(othernode)) {
                    links.add(link);  // remember for later deletion
                  }
                });
              });
              // ?????????????????????????????????????????????????????????
              links.each(function(l) { l.diagram.remove(l); });
              return coll;
            } else {
              var map = new go.Map(/*go.Part, Object*/);
              if (parts === null) return map;
              var tool = this;
              parts.iterator.each(function(n) {
                tool.gatherConnecteds(map, n);
              });
              return map;
            }
          };
      
          //????????????????????????
          SnappingTool.prototype.gatherConnecteds = function(map, node) {
            if (!(node instanceof go.Node)) return;
            if (map.has(node)) return;
            //?????????????????????????????????????????????????????????
            map.add(node, new go.DraggingInfo(node.location));
            // ???????????????????????????????????????????????????????????????
            var tool = this;
            node.findLinksConnected().each(function(link) {
              if (link.category !== "") return;  // ?????? comment ??????
              map.add(link, new go.DraggingInfo());
              tool.gatherConnecteds(map, link.getOtherNode(node));
            });
          };
    //  ????????????????????????
        init();
    };

   // ?????????????????????
    save(){
            console.log(myDiagram,myPalette);  
            document.getElementById("mySavedModel").value = myDiagram.model.toJson();
            myDiagram.isModified = false;
          }
    load(){
            myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
          };

    render(){
        var {textAreaValue} = this.state;
        return (
            <div id="logistic-monitor">
                {/* ??????????????? */}
                 <div id="myPaletteDiv" style={{border:"1px solid black",width: "100%", height:"200px",position:"relative",WebkitTapHighLightColor:"rgba(255, 255, 255, 0)",cursor:"auto"}}>
                  </div>
                {/* ?????? */}
                <div id="myDiagramDiv" 
                    style={{border:"1px solid black",width:'904px', height:'500px',marginTop: '3px',position:"relative", WebkitTapHighLightColor:"rgba(255, 255, 255, 0)",cursor:"auto"}}>
                    {/* <canvas tabIndex="0" width="904" height="498" style={{position: "absolute",top: "0",left: '0', zIndex: '2',userSelect: "none", width: '904px',height: "498px",cursor:"auto"}}>
                    This text is displayed if your browser does not support the Canvas HTML element.
                    </canvas> */}
                </div>
                {/* <div id="myInfoDiv" className="inspector" style={{border:"1px solid black",width: "100%", height:"200px",position:"relative",cursor:"auto"}}> */}
                  {/* </div> */}
                {/* JSON???????????? */}
                <div>
                        <div className="chartData" style={{color:'black'}}>
                           <button id="SaveButton" onClick={this.save.bind(this)}>??????</button> 
                           <button  className="loading" onClick={this.load.bind(this)}>??????</button> 
                           <span>
                              ??????????????????JSON????????????:
                           </span>  
                        </div>
                        <textarea id="mySavedModel" style={{width:"100%",height:"300px",color:"gray"}}
                            defaultValue={JSON.stringify(textAreaValue)}
                        />
                </div>
                <div id="infoDraggable" className="draggable" style={{display: "inline-block",
                 verticalAlign: "top", 
                 padding: "5px",
                 top: "20px", 
                 left: "380px"}}>
                  <div id="infoDraggableHandle" className="handle">Info</div>
                  <div>
                    <div id="myInfo"></div>
                    </div>
                    </div>
                    <div style={{display: "inlineBlock", verticalAlign: "top", width:"400px"}}>
                      {/* <div id="myDiagramDiv" style="background-color: whitesmoke; border: 1px solid black; height: 400px; position: relative; -webkit-tap-highlight-color: rgba(255, 255, 255, 0);">
                        <canvas tabindex="0" width="497" height="497" style="position: absolute; top: 0px; left: 0px; z-index: 2; user-select: none; width: 398px; height: 398px;">This text is displayed if your browser does not support the Canvas HTML element.
                        </canvas>
                        <div style="position: absolute; overflow: auto; width: 398px; height: 398px; z-index: 1;">
                          <div style="position: absolute; width: 1px; height: 1px;"></div>
                        </div>
                        </div> */}
                      </div>
                  
            </div>
        )
    }
};

export default LogisticsChart;
