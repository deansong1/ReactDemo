import React from "react";
import jsplumb from 'jsplumb';
import $ from 'jquery';
const jsPlumbIn = jsplumb.jsPlumb;
class Demo1 extends React.Component{
   // 构造函数是唯一可以给 this.state 赋值的地方
    constructor(props){  
        super(props)
        this.state = {
            
        }   
    }
     
     // 挂载阶段
     componentDidMount(){
        var common = {
            isSource: true,  //是否可以拖动(作为连线起点)   
            isTarget: true,  //是否可放置(连线终点)
            connector: ['StateMachine',{ margin:3}] /*连接器（直线--a straight line，  
                                                    贝塞尔曲线--a Bezier curve，  
                                                    “流程图”--"flowchart"     
                                                    “状态机” -- "state machine"） 默认贝塞尔*/
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
              }, common)
        
              jsPlumbIn.addEndpoint('item_right', {
                anchor: 'Left'
              }, common)
        
              jsPlumbIn.addEndpoint('item_right', {
                anchor: 'Right'
              }, common)
        })
        jsPlumbIn.draggable('item_left')
        jsPlumbIn.draggable('item_right')
      
        jsPlumbIn.bind("dblclick", function (conn, originalEvent) {
           
            console.log(conn, originalEvent)
            //如果连接线有label，则获取焦点，如果没有，则添加。                
            // var labelInfo = that.lineIsHasLabel(conn);
            // if(labelInfo.isHasLabel){
            //     labelInfo.currentLabel.removeClass('label-blur').addClass('label-focus');
            //         var oldText = labelInfo.currentLabel.children('.label-text').html();
            //         var inputDom = $('<input type="text" class="label-input" value="'+oldText+'"/>')
            //         setTimeout(function(){
            //             inputDom.focus();
            //         },50)
            //         labelInfo.currentLabel.append(inputDom)
            //     return false;
            // }
           let container = document.getElementsByClassName("Dotcon")[0];
            // var left =  parseInt(originalEvent.clientX.offset().left)
            // var top =  parseInt(originalEvent.clientY.offset().top)
            let id = "label";
            let labelDom = $('<div className="line-label label-focus" id="' + id + '" data-path="'+conn.id+'"><span className="label-text"></span><input type="text" className="label-input"/></div>')
            console.log(labelDom)
            labelDom.css("left", 186).css("top", 116);
            let input = labelDom.children('input.label-input');
            setTimeout(function(){
                input.focus();
            },50)
            container.append(labelDom);

            labelDom.keydown(function (event) {
                event = event||window.event;
                if(event.keyCode == 13){
                    var text = input.val();
                    if(!text){
                        labelDom.remove();
                        return false;
                    }
                    labelDom.children('span').html(input.val()); 
                    input.remove();
                    labelDom.removeClass('label-focus').addClass('label-blur');
                    return false;
                }                              
            });

            // label 可以拖动
            jsPlumbIn.draggable(id);
            labelDom.draggable({ containment: "parent" });    
        });

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

 export default Demo1;  
   