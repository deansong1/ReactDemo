import React from "react";
// import jsplumb from 'jsplumb';
// import $ from 'jquery';
import { Modal,  Form, Input,Button } from 'antd';


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
    render(){
          
            return (
                <div >
                    <Modal
                        title={this.props.model.title}
                        visible={this.props.model.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[]}
                        >
                      <Form
                        {...this.formItemLayout}
                        name="messages"
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                            >
                         {
                        this.props.formInfo.map((item, index) =>  
                            <Form.Item name={item.key}
                                label={item.title}
                                // rules={item.rules}
                                key={`${item.key}-${index}`}>
                                <Input/>
                                </Form.Item>  
                            )}
                            <Form.Item noStyle>
                                <footer>
                                    <Button type="text" style={{'marginRight': '10px'}} onClick={this.handleCancel}>取消</Button>
                                    <Button type="primary" htmlType="submit" >确定</Button>
                               </footer> 
                                </Form.Item>  
                        </Form>
                    </Modal>
                </div>
            )
        }
    }

 export default ModelChart;  
   