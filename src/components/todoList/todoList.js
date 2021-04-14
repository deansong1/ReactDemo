import React from "react";
// import Header from './Header';
import Mid from "./mid";
// import Bot from "./bot";
import store from "../../store/store";

class TodoList extends React.Component{
    constructor(props){
        super(props)
        //  this.state = store.getState(); //获取redux中的数据

        //  store.subscribe();
       // {
        //     playArr:[
        //         {id:1,title:'看一小时的react教程',show:false},
        //         {id:2,title:'打一小时DOTA',show:false},
        //         {id:3,title:'看一小时的JS教程',show:false},
        //         {id:4,title:'看一小时的隐秘的角落',show:false},
        //     ],
        //     finishedCount:0
        // }
        // this.removeList = this.removeList.bind(this);
        // this.addTodo = this.addTodo.bind(this);
    }
    // removeList(todoId){  //删除
    //     const {playArr}= this.state;
    //     let countCheck = this.state.finishedCount;
    //     playArr.forEach((item,index)=>{
    //         console.log(todoId);
    //         if(item.id === todoId){
    //                 playArr.splice(index,1);
    //         }
    //     })
    //     playArr.forEach(item=>{
    //         if(item.id === todoId){
    //                 if (item.show) {
    //                     countCheck +=1
    //                 }
    //         }
    //     })
    //     this.setState({
    //         playArr,
    //         finishedCount:countCheck,
    //     })
    // }
    // 添加一个todo
    addTodo=(add)=>{
        const {playArr}= this.state;
        playArr.push(add);
        this.setState({
            playArr
        })
    }

    render(){
        // const {playArr,finishedCount}= this.state;
        return (
            
            <div>
                {/* <Header addTodo={this.addTodo} lastTodoId={playArr.length === 0 ? 0 : playArr[playArr.length-1].id + 1}/> */}
                {/* {playArr.map(item=>
                        <Mid item={item} 
                        key={item.id} 
                        // removeList={this.removeList}  
                        finishedCount={finishedCount}/>
                )} */}
                {/* <Bot /> */}
            </div>
            )
    }
}

export default TodoList;