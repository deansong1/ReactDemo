import React from 'react';
import * as go from 'gojs';
// import { ReactDiagram } from 'gojs-react';

class gojsTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          status:false,
          nodeDataArray:[
            { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
            { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
            { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
            { key: 3, text: 'Delta', color: 'pink', loc: '150 150' }
          ],
          linkDataArray:[
            { key: -1, from: 0, to: 1 },
            { key: -2, from: 0, to: 2 },
            { key: -3, from: 1, to: 1 },
            { key: -4, from: 2, to: 3 },
            { key: -5, from: 3, to: 0 }
          ]
        };
      }
    // ...
      componentDidMount(){
          this.init();
      }
  /**
   *  *此函数负责设置图表的初始属性和任何模板。
   */
  // initDiagram() {
  //   const $ = go.GraphObject.make;
  //   const diagram =
  //     $(go.Diagram,
  //       {
  //         'undoManager.isEnabled': true,  //启用撤消和重做
  //         'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
  //         model: $(go.GraphLinksModel,
  //           {
  //             linkKeyProperty: 'key'  //重要！在使用GraphLinksModel时必须定义合并和数据同步
  //           })
  //       });

    // 定义一个简单的Node模板
  //   diagram.nodeTemplate =
  //     $(go.Node, 'Auto',  // Shape将围绕TextBlock
  //       new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
  //       $(go.Shape, 'RoundedRectangle',
  //         { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
  //         // Shape.fill绑定到Node.data.color
  //         new go.Binding('fill', 'color')),
  //       $(go.TextBlock,
  //         { margin: 8, editable: true },  // Shape.fill绑定到Node.data.color
  //         new go.Binding('text').makeTwoWay()
  //       )
  //     );

  //   return diagram;
  // }

  /**
   * 此函数处理对GoJS模型的任何更改。
   *在这里，您将对React状态进行任何更新，下面将对此进行讨论。
   */
  // handleModelChange(changes) {
  //   console.log('GoJS模型发生改变了!');
  // }
  init(){
          var $ = go.GraphObject.make, 
        diagram = $(go.Diagram, "myDiagramDiv11");
      var $ = go.GraphObject.make;
      diagram.layout =
        $(go.LayeredDigraphLayout,  // this will be discussed in a later section
          { columnSpacing: 5,
          setsPortSpots: false });
      var nodeDataArray = [
        { key: "Alpha" }, { key: "Beta" }, { key: "Gamma" }, { key: "Delta" },
        { key: "Epsilon" }, { key: "Zeta" }, { key: "Eta" }, { key: "Theta" }
      ];
      var linkDataArray = [
        { from: "Beta", to: "Alpha" },
        { from: "Gamma", to: "Alpha" },
        { from: "Delta", to: "Alpha" },
        { from: "Alpha", to: "Epsilon" },
        { from: "Alpha", to: "Zeta" },
        { from: "Alpha", to: "Eta" },
        { from: "Alpha", to: "Theta" }
      ];
      diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
      diagram.nodeTemplate =
        $(go.Node, "Auto",
          { fromSpot: go.Spot.Right,  // coming out from middle-right
          toSpot: go.Spot.Left },   // going into at middle-left
          $(go.Shape, "Rectangle", { fill: "lightgray" }),
          $(go.TextBlock,
          { margin: 5},
          new go.Binding("text", "key"))
        );
      diagram.linkTemplate =
        $(go.Link,
          $(go.Shape),
          $(go.Shape, { toArrow: "Standard" })
        );
  }
  
  // 渲染功能....
  render() {
    let {nodeDataArray,linkDataArray} = this.state;
    return (
      <div>
        {/* <ReactDiagram
          initDiagram={this.initDiagram.bind(this)}
          divClassName='diagram-component'
          nodeDataArray={nodeDataArray}
          linkDataArray={linkDataArray}
          onModelChange={this.handleModelChange.bind(this)}
        /> */}
        <div id="myDiagramDiv11" style={{width:'600px',height:'150px'}}></div>
      </div>
    );
  }
}
 
export default gojsTest;