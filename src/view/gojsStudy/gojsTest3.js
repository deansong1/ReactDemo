import React from 'react';
import * as go from 'gojs';
import { Form, Row, Col, Input, Button } from 'antd';
// import { ReactDiagram } from 'gojs-react';
import ModalTest from "../../antdTest/doubleModal.js";

class gojsTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          nodeDataArray:[
            { key: 0, name: "George V", gender: "M", birthYear: "1865", deathYear: "1936", reign: "1910-1936" },
            { key: 1, parent: 0, name: "Edward VIII", gender: "M", birthYear: "1894", deathYear: "1972", reign: "1936" },
            { key: 2, parent: 0, name: "George VI", gender: "M", birthYear: "1895", deathYear: "1952", reign: "1936-1952" },
            { key: 7, parent: 2, name: "Elizabeth II", gender: "F", birthYear: "1926", reign: "1952-" },
            { key: 16, parent: 7, name: "Charles, Prince of Wales", gender: "M", birthYear: "1948" },
            { key: 38, parent: 16, name: "Prince William", gender: "M", birthYear: "1982" },
            { key: 39, parent: 16, name: "Prince Harry of Wales", gender: "M", birthYear: "1984" },
            { key: 17, parent: 7, name: "Anne, Princess Royal", gender: "F", birthYear: "1950" },
            { key: 40, parent: 17, name: "Peter Phillips", gender: "M", birthYear: "1977" },
            { key: 82, parent: 40, name: "Savannah Phillips", gender: "F", birthYear: "2010" },
            { key: 41, parent: 17, name: "Zara Phillips", gender: "F", birthYear: "1981" },
            { key: 18, parent: 7, name: "Prince Andrew", gender: "M", birthYear: "1960" },
            { key: 42, parent: 18, name: "Princess Beatrice of York", gender: "F", birthYear: "1988" },
            { key: 43, parent: 18, name: "Princess Eugenie of York", gender: "F", birthYear: "1990" },
            { key: 19, parent: 7, name: "Prince Edward", gender: "M", birthYear: "1964" },
            { key: 44, parent: 19, name: "Lady Louise Windsor", gender: "F", birthYear: "2003" },
            { key: 45, parent: 19, name: "James, Viscount Severn", gender: "M", birthYear: "2007" },
            { key: 8, parent: 2, name: "Princess Margaret", gender: "F", birthYear: "1930", deathYear: "2002" },
            { key: 20, parent: 8, name: "David Armstrong-Jones", gender: "M", birthYear: "1961" },
            { key: 21, parent: 8, name: "Lady Sarah Chatto", gender: "F", birthYear: "1964" },
            { key: 46, parent: 21, name: "Samuel Chatto", gender: "M", birthYear: "1996" },
            { key: 47, parent: 21, name: "Arthur Chatto", gender: "M", birthYear: "1999" },
            { key: 3, parent: 0, name: "Mary, Princess Royal", gender: "F", birthYear: "1897", deathYear: "1965" },
            { key: 9, parent: 3, name: "George Lascelles", gender: "M", birthYear: "1923", deathYear: "2011" },
            { key: 22, parent: 9, name: "David Lascelles", gender: "M", birthYear: "1950" },
            { key: 48, parent: 22, name: "Emily Shard", gender: "F", birthYear: "1975" },
            { key: 49, parent: 22, name: "Benjamin Lascelles", gender: "M", birthYear: "1978" },
            { key: 50, parent: 22, name: "Alexander Lascelles", gender: "M", birthYear: "1980" }
          ],
          modal:{
            title:"",
            visible:false,
            initialValues:{}
          }
        };
      }
    // 初始化gojs
    componentDidMount(){
        this.init();
        // this.shapeInit();
    }
    init() {
        var $ = go.GraphObject.make;  // for conciseness in defining templates
        var myDiagram =
            $(go.Diagram, "myDiagramDiv",  // must be the ID or reference to div
              {
            "toolManager.hoverDelay": 100,  // 100 milliseconds instead of the default 850
            allowCopy: false,
            layout:  // create a TreeLayout for the family tree
            $(go.TreeLayout,
              { angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform })
        });
        var bluegrad = '#90CAF9';
        var pinkgrad = '#F48FB1';
        // Set up a Part as a legend, and place it directly on the diagram
        myDiagram.add(
            $(go.Part, "Table",
              { position: new go.Point(300, 10), selectable: false },
              $(go.TextBlock, "Key",
                { row: 0, font: "700 14px Droid Serif, sans-serif" }),  // end row 0
              $(go.Panel, "Horizontal",
                { row: 1, alignment: go.Spot.Left },
                $(go.Shape, "Rectangle",
                  { desiredSize: new go.Size(30, 30), fill: bluegrad, margin: 5 }),
                $(go.TextBlock, "Males",
                  { font: "700 13px Droid Serif, sans-serif" })
               ),  // end row 1
              $(go.Panel, "Horizontal",
                { row: 2, alignment: go.Spot.Left },
                $(go.Shape, "Rectangle",
                  { desiredSize: new go.Size(30, 30), fill: pinkgrad, margin: 5 }),
                $(go.TextBlock, "Females",
                  { font: "700 13px Droid Serif, sans-serif" })
               )  // end row 2
             ));
        // get tooltip text from the object's data
        function tooltipTextConverter(person) {
            var str = "";
            str += "Born: " + person.birthYear;
            if (person.deathYear !== undefined) str += "\nDied: " + person.deathYear;
            if (person.reign !== undefined) str += "\nReign: " + person.reign;
            return str;
        }
        // define tooltips for nodes
        var tooltiptemplate =
            $("ToolTip",
              { "Border.fill": "whitesmoke", "Border.stroke": "black" },
              $(go.TextBlock,
                {
                font: "bold 8pt Helvetica, bold Arial, sans-serif",
                wrap: go.TextBlock.WrapFit,
                margin: 5
            },
                new go.Binding("text", "", tooltipTextConverter))
             );
        // define Converters to be used for Bindings
        function genderBrushConverter(gender) {
            if (gender === "M") return bluegrad;
            if (gender === "F") return pinkgrad;
            return "orange";
        }
        // replace the default Node template in the nodeTemplateMap
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
              { deletable: false, toolTip: tooltiptemplate },
              new go.Binding("text", "name"),
              $(go.Shape, "Rectangle",
                {
            fill: "lightgray",
            stroke: null, strokeWidth: 0,
            stretch: go.GraphObject.Fill,
            alignment: go.Spot.Center
        },
                new go.Binding("fill", "gender", genderBrushConverter)),
              $(go.TextBlock,
                {
            font: "700 12px Droid Serif, sans-serif",
            textAlign: "center",
            margin: 10, maxSize: new go.Size(80, NaN)
        },
                new go.Binding("text", "name"))
             );
        // define the Link template
        myDiagram.linkTemplate =
            $(go.Link,  // the whole link panel
              { routing: go.Link.Orthogonal, corner: 5, selectable: false },
              $(go.Shape, { strokeWidth: 3, stroke: '#424242' }));  // the gray link shape
        // here's the family data
        let {nodeDataArray} = this.state;
        // create the model for the family tree
        myDiagram.model = new go.TreeModel(nodeDataArray);
        // document.getElementById('zoomToFit').addEventListener('click', function() {
        //     myDiagram.commandHandler.zoomToFit();
        // });
        // document.getElementById('centerRoot').addEventListener('click', function() {
        //     myDiagram.scale = 1;
        //     myDiagram.scrollToRect(myDiagram.findNodeForKey(0).actualBounds);
        // });
    }
    ;
    // if(window.init) {init();}
    shapeInit(){
        var $ = go.GraphObject.make, 
        diagram = $(go.Diagram, "myDiagramShape");
        diagram.div.style.background = "lightgray";
        diagram.add(
            $(go.Part, "Table",
              $(go.Shape, { row: 0, column: 0, figure: "Club", width: 60, height: 60, margin: 4,        wfill: "green" }),
              $(go.TextBlock, "green", { row: 1, column: 0 }),
              $(go.Shape, { row: 0, column: 1, figure: "Club", width: 60, height: 60, margin: 4,
                           fill: "white" }),
              $(go.TextBlock, "white", { row: 1, column: 1 }),
              $(go.Shape, { row: 0, column: 2, figure: "Club", width: 60, height: 60, margin: 4,
                           fill: "transparent" }),
              $(go.TextBlock, "transparent", { row: 1, column: 2 }),
              $(go.Shape, { row: 0, column: 3, figure: "Club", width: 60, height: 60, margin: 4,
                           fill: null }),
              $(go.TextBlock, "null", { row: 1, column: 3 })
             ));
    }
    showModal(){
        this.setState({
          modal:{
            title:"栅格式表单",
            visible:true,
            initialValues:{}
          }
        })
    }
    handleOk=()=>{
      this.setState({
        modal:{
          title:"栅格式表单",
          visible:false,
          initialValues:{}
        }
      })
    }
    handleCancel=()=>{
      this.setState({
        modal:{
          title:"栅格式表单",
          visible:false,
          initialValues:{}
        }
      })
    }
    onFinish(values){
      console.log(values)
      this.setState({
        modal:{
          title:"栅格式表单",
          visible:false,
          initialValues:{}
        }
      })
    }
  // 渲染功能....
  render() {
    return (
      <div style={{width:"1000px"}}>
        <Button type="primary" onClick={this.showModal.bind(this)} style={{width:"100px",margin:"auto"}}>模态框</Button>
        <div id="myDiagramDiv" style={{backgroundColor: 'white', border: '1px solid black', width: '1000px',height: '500px',position: 'relative', tapHighlightColor: "#f00", cursor: "auto"}}>
        {/* <p>
            <button id="zoomToFit">Zoom to Fit</button> 
            <button id="centerRoot">Center on root</button>
        </p> */}
        </div>
        <ModalTest
          modal={this.state.modal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          onFinish={this.onFinish.bind(this)}
        />
        {/* 形状练习 */}
        {/* <div id="myDiagramShape" style={{width:'600px',height:'100px'}}></div> */}
      </div>
    );
  }
}
 
export default gojsTest;