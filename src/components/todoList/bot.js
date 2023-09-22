import React from "react";
import "./bot.less";

class Bot extends React.Component{
    render(){
        return (
            <div className="bots">
                <div>
                    <input type="checkbox" />
                    <span>完成0件/总计2件</span>
                </div>
               <div>
                   <input type="button" value="清除已完成任务"/>
               </div>
            </div>
            )
    }
}

export default Bot;