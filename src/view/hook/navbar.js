import React, { Component } from 'react';
import "./navbar.less";
let imgs=null,lis=null,timer=null,num=0,imgInterval=null;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        imgs = document.querySelectorAll("img");
        lis = document.querySelectorAll("li");
        imgs[0].style.display = "block";
        lis[0].className = "active";
        if(document.getElementsByClassName("box")[0]){
            imgInterval = setInterval(() => {
                this.imgChange()
            },1500)
        }
       this.mouseEventsForImg();
    }

    componentWillUnmount(){
        clearInterval(imgInterval);
    }

    liClick(e){ };

    imgChange(){
        num++
        if(num === 3){
            num = 0;
        }

        imgs.forEach((img,i) => {
            img.style.display = "none";
            lis[i].className = "";
            })
        imgs[num].style.display = "block";
        lis[num].className = "active";
    }

    mouseEventsForImg(){
        let _this = this;
        let boxs = document.getElementsByClassName("box")[0];
        boxs.onmouseover = function(){
           clearInterval(imgInterval) 
        }

        boxs.onmouseleave = function(){
            imgInterval = setInterval(() => {
                _this.imgChange();
            },1500)
        }
    }


    render() { 
        return ( 
            <div className="box">
                {/* <h1>Context App</h1> */}
                <img src={[require("../../assets/bench.jpeg")]} alt=""/>
                <img src={[require("../../assets/castle.jpeg")]} alt=""/>
                <img src={[require("../../assets/comicYard.jpeg")]} alt=""/>
                <ul>
                    <li onClick={this.liClick.bind(this,0)}>1</li>
                    <li onClick={this.liClick.bind(this,1)}>2</li>
                    <li onClick={this.liClick.bind(this,2)}>3</li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;
 