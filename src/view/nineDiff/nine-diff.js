import React from "react";
import "./nineDiff.css";

class NineDiff extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           //购物车数组
            shopArr:[],
        }
       this.addSth = this.addSth.bind(this);
       this.removeSth = this.removeSth.bind(this);
    }
    static defaultProps = {
        dataArr:[
            {icon:"f1",name:"苹果"},
            {icon:"f1",name:"香蕉"},
            {icon:"f1",name:"葡萄"},
            {icon:"f1",name:"西瓜"},
            {icon:"f1",name:"哈密瓜"},
            {icon:"f1",name:"橘子"},
            {icon:"f1",name:"梨子"},
            {icon:"f1",name:"火龙果"},
            {icon:"f1",name:"车厘子"},
        ]
    }
    // 挂载
    componentDidMount(){}
    //卸载
    componentWillUnmount(){}
   
    render(){
      
      return (
          <div className="box">
              {/* 上部分 */}
              <div className="top">
                  <button onClick={this.addSth}>Add</button>
                  <button onClick={this.removeSth}>Remove</button>
              </div>
              {/* 下部分 */}
              <div className="bot">
                      {/* <div></div> 
                      <div></div> 
                      <div></div> 
                      <div></div>  */}
                      {this.state.shopArr}
              </div>
          </div>
      )
    }
    // 按钮
    addSth(){
          //创建子组件插入数组
          const  index = this.state.shopArr.length
          if (index >= 9) {
              alert("购物车已经满啦！！！")
              return
          }
          const {dataArr} = this.props,
                botPart = (
                <div key={index}>
                        <img src={require('../../assets/img/'+dataArr[index].icon+'.png')} alt=""/>
                        <span>{dataArr[index].name}</span>
                </div>
            );
     console.log(dataArr[index].icon)
    //更新状态
    const tempArr = this.state.shopArr;
    tempArr.push(botPart);
    this.setState({
        shopArr:tempArr
    })

  
    }
    // 删除购物车内物品
    removeSth(){
        const tempArr = this.state.shopArr;
        const index = tempArr.length
        if (index === 0) {
            alert("购物车空空如也啦")
            return
        }
        //   更新状态
        tempArr.pop();
        this.setState({
            shopArr:tempArr,
        })
        
    }
}

export default NineDiff;