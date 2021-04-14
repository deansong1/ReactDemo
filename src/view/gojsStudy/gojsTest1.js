import React from 'react';
import * as go from 'gojs';
// import { ReactDiagram } from 'gojs-react';
import "./style/gojs.less";

class gojsTest1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          status:false,
          nodeDataArray:[
           
          ],
          linkDataArray:[
          
          ]
        };
      }

      //测试图1
      // initDiagram(){
      //   const $ = go.GraphObject.make;
      //   const myDiagram = $(
      //       go.Diagram, 
      //       "myDiagramDiv",
      //   {"undoManager.isEnabled": true} // enable Ctrl-Z to undo and Ctrl-Y to redo
      //   );
      //   //定义一个简单的Node模板
      //   myDiagram.nodeTemplate =
      //     $(go.Node, "Horizontal",
      //       //整个节点将具有浅蓝色背景
      //       { background: "#44CCFF" },
      //       $(go.Picture,
      //       //图片通常应具有明确的宽度和高度
      //       //此图片具有红色背景，仅在未设置源的情况下可见
      //       //或图像部分透明时。
      //       { margin: 10, width: 50, height: 50, background: "red" },
      //       // Picture.source是绑定到模型数据的“source”属性的数据
      //       new go.Binding("source")
      //            ),
      //       $(go.TextBlock,
      //       "Default Text", // TextBlock.text的初始值   //文本周围有一些空间，一个较大的字体和一个白色笔画：
      //       { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
      //       // TextBlock.text是绑定到模型数据的“name”属性的数据
      //       new go.Binding("text", "name")
      //           )
      //       );
      //   let myModel = $(go.Model);
      //   myModel.nodeDataArray =
      //           [ //注意，每个节点数据对象都拥有所需的任何属性；//为这个应用程序，我们添加了“名”和“源”的属性
      //           { name: "Don Meow", source: "/images/learn/cat1.png" },
      //           { name: "Copricat", source: "/images/learn/cat2.png" },
      //           { name: "Demeter",  source: "/images/learn/cat3.png" },
      //           { /* 空节点数据 */  }
      //           ];
      //       myDiagram.model = myModel;
      //       return myDiagram;
      // }
      // 测试图2
      shapeTest(){
        var $ = go.GraphObject.make, 
        diagram = $(go.Diagram, "myDiagramTest");
      var W_geometry = go.Geometry.parse("M 0,0 L 10,50 20,10 30,50 40,0", false);
      diagram.add(
        $(go.Part, "Horizontal",
          $(go.Shape, { geometry: W_geometry, strokeWidth: 2 }),
          $(go.Shape, { geometry: W_geometry, stroke: "blue", strokeWidth: 10,
                 strokeJoin: "miter", strokeCap: "butt" }),
          $(go.Shape, { geometry: W_geometry, stroke: "blue", strokeWidth: 10,
                 strokeJoin: "miter", strokeCap: "round" }),
          $(go.Shape, { geometry: W_geometry, stroke: "blue", strokeWidth: 10,
                 strokeJoin: "miter", strokeCap: "square" }),
          $(go.Shape, { geometry: W_geometry, stroke: "green", strokeWidth: 10,
                 strokeJoin: "bevel", strokeCap: "butt" }),
          $(go.Shape, { geometry: W_geometry, stroke: "green", strokeWidth: 10,
                 strokeJoin: "bevel", strokeCap: "round" }),
          $(go.Shape, { geometry: W_geometry, stroke: "green", strokeWidth: 10,
                 strokeJoin: "bevel", strokeCap: "square" }),
          $(go.Shape, { geometry: W_geometry, stroke: "red", strokeWidth: 10,
                 strokeJoin: "round", strokeCap: "butt" }),
          $(go.Shape, { geometry: W_geometry, stroke: "red", strokeWidth: 10,
                 strokeJoin: "round", strokeCap: "round" }),
          $(go.Shape, { geometry: W_geometry, stroke: "red", strokeWidth: 10,
                 strokeJoin: "round", strokeCap: "square" }),
          $(go.Shape, { geometry: W_geometry, stroke: "purple", strokeWidth: 2,
                 strokeDashArray: [4, 2] }),
          $(go.Shape, { geometry: W_geometry, stroke: "purple", strokeWidth: 2,
                 strokeDashArray: [6, 6, 2, 2] })
         ));
      }

      componentDidMount(){
          // this.initDiagram();
          this.shapeTest();
      }
  // 渲染功能....
  render() {
   
    return (
      <div>
        {/* <div
          id="myDiagramDiv"
          style={{width:'800px',height:'550px', backgroundColor: "#DAE4E4"}}>
        </div> */}
        {/* ----------------- */}
        <div id="myDiagramTest" style={{width:'600px',height:'100px'}}></div>
      </div>
    );
  }
}
 
export default gojsTest1;