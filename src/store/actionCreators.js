/*action的 构建函数*/ 
// import { CHANGE_INPUT } from "./actionTypes";
//删除一条记录
const sendAction=()=>{
        return {
            type:"send_type",
            value:"我是一个action",
        }        
}       
const listAdd=()=>{
        return {
            type:"addItem",
        }        
}       
const chgInput=(value)=>{
        return {
            type:"changeInput",
            value
        }        
}       
module.exports = {
        sendAction,
        listAdd,
        chgInput
};