import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:"",
            password:"",
        }
        this.login = this.login.bind(this);
    }
    // 挂载
    componentDidMount(){

    }

    //卸载
    componentWillUnmount(){

    }
    login(){
       this.setState({
            userName:this.state.userName
        });
        console.log(this.state.userName);
    }
   getUser(e){
       console.log(e.target.value);
   }
   getPwd(e){
       console.log(e.target.value)
   }
    render(){
        const myStyle = {
            marginLeft:10,
        };
        const {userName,password} = this.state;
        return (
            <form action="" onSubmit={this.login}>
                <div>
                    <span>用户名：</span><input type="text" value={userName}  onChange={(e)=>this.getUser(e)}/>
                    <span style={myStyle}>密码：</span><input type="password" value={password} onChange={(e)=>this.getPwd(e)}/>
                    <input type="submit" value="登录" style={myStyle}/>
                </div>
            </form>
        )
    }

}

export default Login;