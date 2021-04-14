import React, { createRef } from "react";
import "./header.css";
import PropTypes from "prop-types";

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           js_arr:[
               <h1>下雨天了</h1>,
               <h1>好想你</h1>,
               <h1>真的好想你</h1>,
            ]
        }
       this.refInput = createRef()
    }
    static propTypes={
        addTodo : PropTypes.func.isRequired,
        lastTodoId : PropTypes.number.isRequired
    }
    handleEvent(e){
        let {addTodo,lastTodoId} = this.props;
        console.log(this.props)
        if (13 === e.keyCode) {
            if (!this.refInput.current.value) {
                alert("不能为空！！")
                return
            }
            let add = 
               {id:lastTodoId,title:this.refInput.current.value,show:false};
            
            addTodo(add);
            this.refInput.current.value ="";

        }
    }
    render(){
        return (
            <div className="headers">
                <input type="text" placeholder="请输入今天的任务清单" ref={this.refInput} onKeyDown={(e)=> this.handleEvent(e)}/>
            </div>
            )
    }
}

export default Header;