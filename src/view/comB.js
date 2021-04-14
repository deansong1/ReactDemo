import React from 'react';
import {connect} from "react-redux"; //导入connect 

class ComB extends React.Component{
    // 1) 初始化阶段
   constructor(props){
     super(props);
     this.state = {
       
     };
   }
  
   render(){
        console.log(this.props)
       return (
            <div>{this.props.count}</div>
       )
   }
  
}

/*接收 两个参数*/ 
const mapStateToProps = (state, ownProps) => {
    //获取reducer中的state
    return state
}

export default connect(mapStateToProps)(ComB);