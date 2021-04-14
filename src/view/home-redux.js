import React from "react";
//store导入
import store from "../store/store";
//导入action构建函数
import {sendAction,listAdd,chgInput} from "../store/actionCreators"
import {Input,Button,List} from "antd";
import axios from "axios";
// import { List } from "antd/lib/form/Form";

// const initData = [ "搞什么哦","你丫","哼棒棒哦","数据仓库"]
   
export default class HomeRedux extends React.Component{
     constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange);
        this.inputValueChange = this.inputValueChange.bind()
     }
     handleClick=()=>{
            const action = sendAction();
            //利用store 发送一个action
            store.dispatch(action);
     }
     componentDidMount(){
        // console.log(this.props,this.state);
         store.subscribe(
             ()=>{
                 console.log("subscribe:",store.getState());
             }
         )
     }
     inputValueChange(e){
        // console.log(e.target.value)
        const action = chgInput(e.target.value);
        store.dispatch(action)
     }
     //增加表单按钮
     listAdd(){
        // let {initData} = this.state;
        // let inputValues = this.refs.inputValues.state.value
        // // console.log(inputValues)
        // initData.push(inputValues)
        // this.setState({
        //     initData
        // })
        const action = listAdd();
        store.dispatch(action)
     }
     storeChange=()=>{
        this.setState(store.getState())
    }
    deleteItem(index){
        // console.log(index);
        const action = {
            type:"deleItem",
            index
        }
        store.dispatch(action)
        // console.log(this.state)
    }
     render(){
         let {initData} = this.state;
         return (<div>
            <button onClick={this.handleClick}>点击发送一个 action</button>
            <div>
                <Input 
                placeholder={this.state.inputValue} 
                style={{width:'200px',paddingLeft:"10px"}}
                onChange={this.inputValueChange}
                value = {this.state.value}
                // ref = "inputValues"
                />
                <Button style={{backgroundColor:"#ff0",marginLeft:4}} onClick={this.listAdd.bind(this)}>增加</Button>
            </div>
            <div>{store.getState().value}</div>
            <div style={{margin:'10px',width:"300px",backgroundColor:"#ebebeb"}}>
                <List
                bordered
                dataSource={initData}
                renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
         </div>)
        
     }
    
}
