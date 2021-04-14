import React, { useState } from 'react';
import { Form, Row, Col, Input, Button,Modal,Select } from 'antd';
// import { DownOutlined, UpOutlined } from '@ant-design/icons';
import "./style/modal.less";
class modalTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        console.log(this.props);
    }
    handleOk(){
        this.props.onOk();
    }
    handleCancel(){
        this.props.onCancel();
    }
   
    render() { 
        // const AdvancedSearchForm = () => {
        //     const [expand, setExpand] = useState(false);
        //     const [form] = Form.useForm();
          
        //     const getFields = () => {
        //       const count = expand ? 10 : 6;
        //       const children = [];
          
        //       for (let i = 0; i < count; i++) {
        //         children.push(
        //           <Col span={12} key={i}>
        //             <Form.Item
        //               name={`field-${i}`}
        //               label={`Field ${i}`}
        //               rules={[
        //                 {
        //                   required: true,
        //                   message: '不能为空！',
        //                 },
        //               ]}
        //             //   onFinish={this.onFinish.bind(this)}
        //             >
        //               {i===2 ? <textarea/>
        //               :i===4?<Select>
        //                   <option value="1">1</option>
        //                   <option value="2">2</option>
        //                   <option value="3">3</option>
        //               </Select>:
        //               <Input placeholder="placeholder" />
        //               }
        //             </Form.Item>
        //           </Col>,
        //         );
        //       }
          
        //       return children;
        //     };
          
            // const onFinish = (values) => {
            //   console.log('Received values of form: ', values);
            //   this.props.onFinish(values)
            // };
            // return (
            //     <Form
            //     form={form}
            //     name="advanced_search"
            //     className="ant-advanced-search-form"
            //     onFinish={onFinish}>
            //         <Row gutter={24}>
            //             {getFields()}
            //         </Row>
            //     <Row>
            //       <Col
            //         span={16}
            //         style={{
            //           textAlign: 'right',
            //         }}  
            //       >
            //       {/* <Form.Item style={{display:"flex",justifyContent:"flex-end"}}> */}
            //         <Button style={{marginRight:"20px"}} onClick={this.handleCancel.bind(this)}>取消</Button>
            //         <Button type="primary" htmlType="submit">确定</Button>
            //       {/* </Form.Item> */}
            //       </Col>
            //     </Row>
            //   </Form>
            // )
        // }
        return ( 
            <div>
                {/* <Modal
                    title={this.props.modal.title}
                    visible={this.props.modal.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    footer={null}
                    maskClosable={false}
                >
                    <AdvancedSearchForm />
                </Modal> */}
                11111111111111111111111
            </div>
         );
    }
}

export default modalTest;