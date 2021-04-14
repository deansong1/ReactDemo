import React from "react";
import "./mid.css";
import PropTypes from "prop-types";
// import store from "../../store";

class Mid extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            btnStyle:false,
        }
        // this.removeList = this.removeList.bind(this);
        // store.subscribe(this.removeList)
    }
     
   static propsType = {
       item:PropTypes.object.isRequired,
       removeList:PropTypes.func.isRequired,
       finishedCount:PropTypes.number.isRequired
   }

    btnShow(flag){
                this.setState({
                    btnStyle:flag
                })
        }

    render(){
        const {item,removeList} = this.props,
              {btnStyle} = this.state;
              console.log(this.props)
        return (
                <div>
                    <div className="middle" 
                        onMouseOver={()=>this.btnShow(true)}
                        onMouseOut={()=>this.btnShow(false)}
                    >
                        
                        <label>
                            <input type="checkbox" onChange={()=>this.isChecked}/>
                            <span>
                                {item.title}
                            </span>
                        </label>
                        <button style={{display:btnStyle?"block":"none"}} onClick={()=>removeList(item.id)}>
                                删除
                        </button>

                    </div>
                
                </div>
                )
    }
    removeList(todoId){
        // const action = getDelItemAction(todoId);
        // store.dispatch(action);
    //    this.setState(
    //        store.getState()
    //    )
    }
}

export default Mid;