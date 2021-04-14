import React from "react";
// import ReactDom from "react-dom";

class Canvas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
        this.refCanvas = React.createRef();
    }
    componentDidMount(){
        this.drawSea();
    }
    drawSea(){
        const draws =this.refCanvas.current
        // ReactDom.findDOMNode() ;
        console.log(draws)
        let ctx = draws.getContext("2d") ; //contexts对象
        // /①定义样式
    //        ctx.strokeStyle = '#ff0';        //颜色
    //     ctx.linewidth = 15;               //线宽
    //     ctx.lineCap='square';           //端点
    //     ctx.lineJoin='round';           //拐点
    //     //②定义路径
    //     // ctx.beginPath();  开始
    //     ctx.moveTo(50,20);      //起点 moveTo(x,y)  
    //     ctx.lineTo(100,100);        //拐点
    //     ctx.lineTo(100,250)    //终点
    //     // ctx.lineTo(50,100);     //终点
    //     ctx.closePath();              //闭合
    //     //③绘制
    //    ctx.stroke();
        // ctx.rect(15,100,300,300); //(15,100)是x轴和y轴，（300,300）是尺寸
        // ctx.stroke();
        //中心点坐标(100,70),半径50,开始角180度，结束角0度，逆时针。
        // ctx.arc(100,70,50,Math.PI,0,true);
        // //③绘制
        // ctx.stroke();
        var gradient=ctx.createLinearGradient(0,0,0,300);//createLinearGradient() 方法创建线性的渐变对象。
		gradient.addColorStop(0,"#e0e0e0");
		gradient.addColorStop(1,"#ffffff");
		ctx.fillStyle=gradient;
		ctx.fillRect=(0,0,draws.width,draws.height);
		//描绘边框
		var grid_cols=10;
		var grid_rows=10;
		var cell_height=draws.height/grid_rows;
		var cell_width=draws.width/grid_cols;
		ctx.lineWidth=1;
		ctx.strokeStyle="#a0a0a0";
		//结束边框描绘
		ctx.beginPath();
		//准备画横线
		for(var col=0;col<=grid_cols;col++)
			{
				var x=col*cell_width;
				ctx.moveTo(x,0);
				ctx.lineTo(x,draws.height);
			}
			//准备画竖线
			for(var row=0;row<=grid_rows;row++)
				{
					var y=row*cell_height;
					ctx.moveTo(0,y);
					ctx.lineTo(draws .width,y);
				}
				//完成描绘
				ctx.stroke();
    }

    render(){
        return (
                <canvas ref={this.refCanvas} width="500" height="500"></canvas>
        )
    }
}

export default Canvas;