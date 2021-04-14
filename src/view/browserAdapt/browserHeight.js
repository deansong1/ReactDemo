import React, { Component } from 'react';

class BrowserHeight extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.autodivheight();
        // window.onresize=autodivheight; 
    }

    componentWillUnmount(){
       
    }

    autodivheight(){ //函数：获取尺寸
        //获取浏览器窗口高度
        var winHeight=0;
        if (window.innerHeight)
            winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
        //通过深入Document内部对body进行检测，获取浏览器窗口高度
        if (document.documentElement && document.documentElement.clientHeight)
            winHeight = document.documentElement.clientHeight;
        //DIV高度为浏览器窗口的高度
        //document.getElementById("test").style.height= winHeight +"px";
        //DIV高度为浏览器窗口高度的一半
        document.getElementById("heighTest").style.height= winHeight/2 +"px";
    }

    render() { 
        return ( 
          <div id="heighTest" style={{border:"1px solid #000"}}></div>
         );
    }
}
 
export default BrowserHeight;
 