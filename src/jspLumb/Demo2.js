import React from "react";
import jsplumb from 'jsplumb';
// import $ from 'jquery';
const jsPlumbIn = jsplumb.jsPlumb;

class Demo2 extends React.Component{
   // 构造函数是唯一可以给 this.state 赋值的地方
    constructor(props){  
        super(props)
        this.state = {
            
        }   
    }
     
     // 挂载阶段
     componentDidMount(){
        //样式
        let endAllPointStyle={
            endpoint: 'Dot', //端点的形状
            isSource: true, //是否可以拖动（作为连线起点）
            isTarget: true, //是否可以放置（连线终点）
        }
        jsPlumbIn.ready(function () {
            jsPlumbIn.connect({
                connector:'Flowchart',
                source: 'item_left',
                target: 'item_right',
                endpoint: 'Rectangle',
                paintStyle: { stroke: 'red', strokeWidth: 3 },
                endpointStyle: { fill: 'red', outlineStroke: 'darkgray', outlineWidth: 2 },
                overlays: [ ['Arrow', { width: 12, length: 12, location: 0.5 }] ]
            })
            jsPlumbIn.addEndpoint('item_left', {
                anchors: ['Right']
              }, endAllPointStyle)
        
              jsPlumbIn.addEndpoint('item_right', {
                anchor: 'Left'
              }, endAllPointStyle)
        
              jsPlumbIn.addEndpoint('item_right', {
                anchor: 'Right'
              }, endAllPointStyle)
        })
        jsPlumbIn.draggable('item_left');
        jsPlumbIn.draggable('item_right');
      
     }
     // 卸载阶段
     componentWillUnmount(){
            // clearInterval(this.timer) 消除定时器
         
        }
        render(){
            let diagramContainer={
                padding: '20px',
                width: '80%',
                height: '200px',
                border: '1px solid gray'
            };
            let item={
                position: 'absolute',
                height: '80px',
                width: '80px',
                border: '1px solid blue',
                color: 'blue',
                float: 'left'
            };
            let leftPo={
                position: 'absolute',
                height: '80px',
                width: '80px',
                border: '1px solid blue',
                color: 'blue',
                float: 'left',
                left:'150px'
            };
            return (
                <div className="Dotcon" style={diagramContainer}>
                <div id="item_left" style={item}></div>
                <div id="item_right" style={leftPo}></div>
            </div>
            )
        }
    }

 export default Demo2;  
   