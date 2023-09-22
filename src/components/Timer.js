import React,{Component} from "react";

function FormattedDate(props){
    return <h1>{props.date.toLocaleTimeString()}</h1>
}

class Timer extends Component{
        constructor(props){  //构造函数赋值给this.state
            super(props);
                this.state={
                    date:new Date(),
            }
        }

        //挂载阶段
        componentDidMount(){
            this.timer = setInterval(()=>this.tick(),1000)   
        }
        //卸载阶段
        componentWillUnmount(){
            clearInterval(this.timer)
        }

        tick(){
            this.setState({
                date:new Date(),
            })
        }
        pageChange(){}
        render(){
            return (
                <div>
                    <FormattedDate date={ this.state.date } />      
                </div>
            )
        }


}

export default Timer