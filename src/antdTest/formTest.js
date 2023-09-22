import React, { useState } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import "./style/modal.less";
import $ from "jquery";
class formTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputContent:[
                {
                    name:"item1",
                    label:"item1",
                    key:"item1",
                    rules:[
                        {
                        required: true,
                        message: 'Input something!',
                        },
                    ]
                },
                {
                    name:"item2",
                    label:"item2",
                    key:"item2",
                    rules:[
                        {
                        required: true,
                        message: 'Input something!',
                        },
                    ]
                },
                {
                    name:"item3", 
                    label:"item3",
                    key:"item3",
                    inputStyle:"noInput",
                    rules:[
                        {
                        required: true,
                        message: 'Input something!',
                        },
                    ]
                },
            ]
         }
    }

    componentDidMount(){}
    //FORM表单内部input框
    inputElements=()=>{
       let inputEle;
       this.state.inputContent.map((item,i) =>{
          inputEle = 
          <Col span={12}>
            <Form.Item
            name={item.name}
            label={item.label}
            rules={item.rules}
            key={`${item.key}-${i}`}>
                <input placeholder="请填写"/>
            </Form.Item>
        </Col>;
        return inputEle;
       })
       return inputEle;
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    showMore(){
     $(".showmore-Btn").toggle().css("color","black");
     $("tr:nth-child(3),tr:nth-child(4),tr:nth-child(5),#topInput>input").toggle();   
    }
    render() { 
       return (
           <div id="nine-paradise" style={{display:'flex',width:'600px',height:'600px',background:"#fff"}}>
               <div style={{height:'300px',overflow:'auto'}}>
                    <div id="topInput"><input type="text" style={{display:"none"}}/></div>
                    <table>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>
                        </tbody>
                    </table>
               </div>
               
                <div className="showmore-Btn" style={{color:"black",height:'60px'}} onClick={this.showMore.bind(this)}>
                    更多↓
                </div>
                <div className="showmore-Btn" style={{color:"black",height:'60px',display:"none"}} onClick={this.showMore.bind(this)}>
                    收起↑
                </div>
               
            {/* <Form
                // form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={this.onFinish.bind(this)}
                >
                <Row gutter={24} justify="start">
                    {/* <Col span={12}>
                        <Form.Item
                        name={"选项1"}
                        label={"选项1"}
                        >
                            <input placeholder="请填写"/>
                        </Form.Item>
                    </Col>  
                    <Col span={12}>
                        <Form.Item
                        name={'选项2'}
                        label={"选项2"}>
                            <input placeholder="请填写"/>
                        </Form.Item>
                    </Col>   */}
                    {/* {this.inputElements()} 
                {this.state.inputContent.map((item,i) =>{ 
                      let ele; 
                      if(item.inputStyle === "noInput"){
                        ele = <Col span={12} key={item.key}  offset={1}>
                        <Form.Item
                        name={item.name}
                        label={item.label}
                        rules={item.rules}
                       >
                           <textarea name="text" id="" cols="24" rows="2"></textarea>
                        </Form.Item>
                    </Col>;
                      }else{
                        ele = <Col span={12} key={item.key}>
                                <Form.Item
                                name={item.name}
                                label={item.label}
                                rules={item.rules}
                               >
                                    <input placeholder="请填写"/>
                                </Form.Item>
                            </Col>;
                      }
                      
                       return ele;
                    })}
                </Row>
                <Row>
                    <Col
                    span={24}
                    style={{textAlign: 'right'}}
                    >
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                    <Button style={{margin: '0 8px'}}>Clear</Button>
                    </Col>
                </Row>
                </Form> */}
           </div>
       );
        
    }
}

export default formTest;