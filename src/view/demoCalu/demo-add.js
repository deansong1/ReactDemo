import React from 'react';
import './demo-add.css';
import PropTypes from "prop-types";

class DemoAdd extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       
     };
   }
  
    // 挂载阶段
    componentDidMount(){
      }
    // 卸载阶段
    componentWillUnmount(){
        
      }
    static propTypes={
        tableMsg:PropTypes.array.isRequired,
        delForm:PropTypes.func.isRequired,
    }
    render(){ 
        // console.log(this.props.tableMsg);
        const {tableMsg,delForm} = this.props;
        return ( 
            <div className="table-zone">
             <table width="600px" border='1' cellSpacing="1" cellPadding="0">
                 <thead>
                 <tr className="first-row">
                     <td>姓名</td>
                     <td>性别</td>
                     <td>年龄</td>
                     <td>手机</td>
                     <td>删除</td>
                 </tr>
                 </thead>
               <tbody>
                    {
                        tableMsg.map((it,index) =>
                        ( 
                        <tr key={index}>
                            <td>{it.name}</td>
                            <td>{it.gender}</td>
                            <td>{it.age}</td>
                            <td>{it.phone}</td>
                            <td>
                                <button onClick={()=>delForm(index)}>删除</button>
                            </td>  
                        </tr>
                            )
                        )
                      }
                 </tbody>
             </table>
            </div>
          ) 
              
        } 
}

export default DemoAdd;