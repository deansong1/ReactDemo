import React from "react";
import $ from 'jquery';
import { Modal,  Form, Input,Button } from 'antd';
import "../jspLumb/demo.less";
const pStyle = {
    fontWeight:"bold",
    fontSize:"xx-large",
    color:"red"
};

class ModelChart extends React.Component{
   // 构造函数是唯一可以给 this.state 赋值的地方
    constructor(props){  
        super(props)
        this.state = {
            testValue:""
        }   
    }
    formItemLayout = {
        labelCol: {
          span: 6
        },}
    //监听props的变化
    static getDerivedStateFromProps(nextProps, prevState) {
            // console.log(nextProps, prevState)
            if(nextProps.propsWatch!==prevState.testValue){
                console.log(nextProps, prevState,"再次触发")
                return {
                    testValue:nextProps.propsWatch
                }
            }
            return null
    }
    
     // 挂载阶段
     componentDidMount(){
      console.log(this.props)
     }
     // 卸载阶段
     componentWillUnmount(){
            // clearInterval(this.timer) 消除定时器
         
        }
    handleOk=()=>{
        this.props.onOk();
    }
    handleCancel=()=>{
        this.props.onCancel();
    }
     // form表单验证失败函数
    onFinishFailed = (values) => {
            this.props.onFinishFailed(values)
    }
    // form表单验证成功函数
    onFinish = (values) => {
        // if (this.state.status === 'error') {
            this.props.onFinish(values)
                // }
            }
    delStyle(){
        // $("h1,h2,p").toggleClass("blue")
        // $("#div1").load("/try/ajax/demo_test.txt");
        $.get("/try/ajax/demo_test.php",function(data,status){
            console.log(data);
        })
    }
    render(){
          
            return (
                <div>
                    <h1 className="blue">标题 1</h1>
                    <h2 className="blue">标题 2</h2>
                    <p className="blue">这是一个段落。</p>
                    <p className="important" style={pStyle}>这是另外一个段落。</p>
                    <br></br>
                    <div id="div1"><h2>使用 jQuery AJAX 修改文本内容</h2></div>
                    <button onClick={this.delStyle.bind(this)}>从元素中移除 class</button>
                </div>
            )
        }
    }

 export default ModelChart;  
   