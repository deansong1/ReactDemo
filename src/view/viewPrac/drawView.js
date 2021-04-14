import React from "react";
// import "./draws.css";

class DrawView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            p_Arr:[
                {id:1,title:'看一小时的react教程',show:false},
                {id:2,title:'打一小时DOTA',show:false},
                {id:3,title:'看一小时的JS教程',show:false},
                {id:4,title:'看一小时的隐秘的角落',show:false},
                {id:5,title:'看一小时的react教程',show:false},
                {id:6,title:'打一小时DOTA',show:false},
                {id:7,title:'看一小时的JS教程',show:false},
                {id:8,title:'看一小时的隐秘的角落',show:false},
                {id:9,title:'看一小时的react教程',show:false},
                {id:10,title:'打一小时DOTA',show:false},
                {id:11,title:'看一小时的JS教程',show:false},
                {id:12,title:'看一小时的隐秘的角落',show:false},
                {id:13,title:'看一小时的react教程',show:false},
                {id:14,title:'打一小时DOTA',show:false},
                {id:15,title:'看一小时的JS教程',show:false},
                {id:16,title:'看一小时的隐秘的角落',show:false},
                {id:16,title:'看一小时的隐秘的角落',show:false},
                {id:16,title:'看一小时的隐秘的角落',show:false},
                {id:16,title:'看一小时的隐秘的角落',show:false},
                {id:16,title:'看一小时的隐秘的角落',show:false},
                {id:16,title:'看一小时的隐秘的角落',show:false},
                {id:16,title:'看一小时的隐秘的角落',show:false},
                {id:16,title:'看一小时的隐秘的角落',show:false},
            ],
           popo:[1,2,3,4,5,6,7,8,9,10]
        }
    }
    justDo(){
        return (
            <div style={{display:"flex"}} className="imgs">
                <div style={{width:50,height:50,backgroundColor:'#ff0'}}></div>
                <div style={{width:50,height:50,backgroundColor:'#ff0'}}></div>
                <div style={{width:50,height:50,backgroundColor:'#ff0'}}></div>
            </div>
        )
    }
    render(){
        const p_Arr = this.state.p_Arr,
            mazeStyle = {
                width:38,
                height:40,
                backgroundColor:'#0f0',
                border:'1px solid #000',
                // float:"left",
                textAlign:"center"
        };
        const circle = p_Arr.map((et,i)=>
                <div style={mazeStyle} key={i}>科</div>
        ),
        another = 
           ( <div style={{color:"#000"}}>
            <h1>jsx练习而已</h1> 
            <h2>选择的未来</h2>
            </div> ? <span style={{color:"#f00"}}>不是现在</span> : <span style={{color:"#000"}}>更不是过去</span> ),
        NewStyle = {
            width:640,
            height:640,
            backgroundColor:"#fff",
            marginBottom:50,
            display:'flex',
            flexWrap:'wrap',
            alignContent:'flex-start' 
        };
        // align-content属性：
        // align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
        // align-content:flex-start 该样式用于让div与交叉轴的起点对齐（即顶部对齐）
        return (
            <div className="main-content" style={NewStyle}>
                {another}
                {  circle }
                {
                    this.state.popo.map((item,i) => (
                        <div>
                            <div style={{width:100,height:100,border:"1px solid #00f",borderRadius:'50%'}}></div>
                        </div>
                        ))
                }
                <div>{
                    this.justDo()}</div>
            </div>
        )
    }
}

export default DrawView;