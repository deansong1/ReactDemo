import React,{Component} from 'react';

const myStyle = {
    width:'100%',
    height:40,
    backgroundColor:'#ff0',
    fontSize:20,
    color:"#000",
}  
class Nav extends Component{
    constructor(props){  // 构造函数是唯一可以给 this.state 赋值的地方
        super(props)
        this.state = {
            date:new Date(),
        }    
    }
    // 挂载阶段
    componentDidMount(){
         this.timer = setInterval(()=>this.tick(),1000);
      }
    // 卸载阶段
    componentWillUnmount(){
          clearInterval(this.timer)
      }
    tick(){
          this.setState({   //setState方法可以修改state的值
              date:new Date(),
          })
      }
    //   pageChange(){
    //     console.log('this is:', this);
    //   }
  
    render(){ 
        
        return ( 
            <div> 
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
                <div style={myStyle}>样式测试</div>
                <a target="_blank" href="http://www.baidu.com"  rel="noopener noreferrer" type="button" className="jump" onClick={this.pageChange}>CLICK ME</a> 
            </div>
          ) 
              
        } 
}

export default Nav;