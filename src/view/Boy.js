import React from 'react';
import {connect} from "react-redux"; //导入connect 

class Boy extends React.Component{
    // 1) 初始化阶段
   constructor(props){
     super(props);
     this.state = {
       status:false
     };
   }
  componentDidMount(){
    console.log(this.props)
  }
   sendLove=()=>{
       let {status} = this.state;
        !status ? this.props.loveSend() : this.props.loveStop()
        this.setState({
            status:!status
        })
   }
   render(){
        console.log(this.props)
       return (
           <div>
            <h3>{this.state.status?"收到":"未收到哟"}</h3>
            <button onClick={this.sendLove}>{this.state.status ? "发射爱心":"停止发射"}</button>
           </div>
                
       )
   }
  
}

/*接收 两个参数*/ 
const mapDispatchToProps = dispatch => {
   
    //获取reducer中的state
    return {
        loveSend:()=>{
            dispatch({ type:"send_love"})
        },
        loveStop:()=>{
            dispatch({
                type:"stop_love"
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(Boy);