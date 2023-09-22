// import { DEL_TODO_ITEM } from "./actionTypes";
/*该文件主要用来处理传送过来的action*/
//默认的数据
const initState = {
    count:0,
    value:"默认值",
    inputValue:"关键字",
    // status:false
     initData:[ "搞什么哦","你丫","哼棒棒哦","数据仓库"]
}
const reducer =(state = initState,action)=>{
        console.log(state,action,'111')
        // reducer里只能接受state
        // reducer 要接受action 然后进行逻辑处理
        // 判断发送过来的action是不是需要的
        // 如果是我们需要的，就返回一个新的 state
        switch (action.type) {
            case "send_type":
                return Object.assign({},state,action);
            case "add_action":
                return {
                    count:state.count + 1
                };
            case "send_love":
                return true;
            case "changeInput":
                let newState = JSON.parse(JSON.stringify(state))
                newState.value = action.value
                return newState;    
            case "stop_love":
                return  false;
            case "addItem": //input填写增加内容
                let newState1 = JSON.parse(JSON.stringify(state))
                newState1.initData.push(newState1.value)
                newState1.value = "";
                return  newState1;
            case "deleItem": //点击单行删除
                let newState2 = JSON.parse(JSON.stringify(state))
                console.log(newState2)
                newState2.initData.splice(action.index,1) 
                return  newState2;
            default:
                return state;
        }
}

export default reducer







// const defaultState = {
//     playArr:[
//         {id:1,title:'看一小时的react教程',show:false},
//         {id:2,title:'打一小时DOTA',show:false},
//         {id:3,title:'看一小时的JS教程',show:false},
//         {id:4,title:'看一小时的隐秘的角落',show:false},
//     ],
//     finishedCount:0
// }
// export default (state = defaultState,action)=>{
//         console.log(state,action);
//         //删除一条数据
//         if (action.type === DEL_TODO_ITEM) {
//             const newState = JSON.parse(JSON.stringify(state));
//             let finishCount = 0;
//             //1.删除
//             newState.playArr.map((item,i) => {
//                 if (item.id === action.todoId) {
//                     newState.playArr.splice(i,1);
//                 }
//             })
//             //2.处理选中的 
//             if (newState.show) {
//                 finishCount += 1;
//             }
//             //3.更新
//             newState.finishCount = finishCount;
//             return newState;
//         }
//         return state
// }