import React, { useEffect, useRef, useContext } from "react";
import "./lib/drag.css";
// import img2 from "../../assets/img/2.jpeg";
import useDragDrop from "./lib/useDragDrop";

const list = [
  {
    src:require("../../assets/img/2.jpeg"),
    title: "弥豆子"
  },
  {
    title: "灶门炭治郎",
    src:require("../../assets/img/1.jpeg")
  },
  {
    title: "恋柱",
    src:require("../../assets/img/3.jpeg")
  }
];

export default function App() {
  return <div className="App">
            <Card {...list[0]}/>
        </div>;
}

function DrggableList({list}){
    return <div className="draggable-list"></div>
}

function Draggable({children}){
  return <div className="dragable">
    {children}
  </div>
}

function bar(){

}

function Card({src,title}){
  return (
    <div className="card">
      <img src={src} alt="img1"/>
      <span>{title}</span>
    </div>
  )
}

