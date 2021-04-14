import React from 'react';
import {connect} from "react-redux";

class ComA extends React.Component{
    // 1) 初始化阶段
   constructor(props){
     super(props);
     this.state = {
       
     };
   }
  
   handleClick=()=>{
        // console.log("输出：",this.props);
       this.props.addAction();
   }

   render(){
       return (
           <button onClick={this.handleClick}>+</button>
       )
   }
  
}

/*这个函数需要一个返回值，返回值是一个对象*/ 
const mapDispatchToProps = (dispatch) =>{
    return {
        addAction:()=>{
        // 利用dispatch发送一个action
        // 传递action 对象，我们要定义个type属性
            dispatch({
                type:"add_action"
                })
        }
    }   
}
export default connect(null,mapDispatchToProps)(ComA);