import React from 'react';
import DemoAdd from './demo-add';
// import PropTypes from "prop-types";

class DemoDel extends React.Component{
   constructor(props){
     super(props);
     this.state = {
      tableMsg:[
        { name:'周董',gender:"female",age:38,phone:13838384388},
        { name:'隔壁老樊',gender:"female",age:22,phone:13834584388},
        { name:'周深',gender:"female",age:21,phone:18238384458},
        ],
     };
    this.delForm = this.delForm.bind(this);
    // 使用ref
    this.nameRef=React.createRef();
    this.ageRef=React.createRef();
    this.genderRef=React.createRef();
    this.phoneRef=React.createRef();
   }
  //  增加功能
   addForm(){
     const 
     name = this.nameRef.current.value,
     age = this.ageRef.current.value,
     gender = this.genderRef.current.value,
     phone = this.phoneRef.current.value;
     console.log(name);
      if (!name || !age || !gender || !phone) {
        alert("input框不能为空！！！");
        return
      }
      const  {tableMsg} = this.state;
      tableMsg.unshift({name,age,gender,phone});
      console.log(tableMsg);
      this.setState({
        tableMsg
      })
      //情况填写的数据增加后清除input框
      this.nameRef.current.value = "";
      this.ageRef.current.value = "";
      this.genderRef.current.value = "male";
      this.phoneRef.current.value = "";
   }
   //删除
   delForm(index){
    //  1.删除
    const {tableMsg} = this.state;
    tableMsg.splice(index,1); //splice方法会改变原数组，slice不会
    console.log(tableMsg);
    console.log(index);
    //2.更新
    this.setState({
      tableMsg
    })
   }
    // 挂载阶段
    componentDidMount(){
        
      }
    // 卸载阶段
    componentWillUnmount(){
        
      }
  
    render(){ 
        
        return ( 
            <div>
              <h3>信息录入System</h3>
              <div className='container'>
                <div className="user-msg">
                  <div>
                  <span>姓名:</span><input type="text" placeholder="请输入姓名" ref={this.nameRef}/>
                  </div>
                  <div>
                  <span>年龄:</span><input type="text" placeholder="请输入年龄" ref={this.ageRef}/>
                  </div>
                  <div>
                    <span>性别:</span>
                    <select name="" id=""  ref={this.genderRef}>
                      <option value="male">男</option>
                      <option value="female">女</option>
                    </select>
                  </div>
                  <div>
                  <span>手机:</span><input type="text"  placeholder="请输入手机号"  ref={this.phoneRef}/>
                  </div>
                  <input type="button" value="创建新用户" onClick={()=>this.addForm()}/>
                </div>
              </div>
              <DemoAdd tableMsg={this.state.tableMsg} delForm={this.delForm}/>
            </div>
          ) 
              
        } 
}

export default DemoDel;