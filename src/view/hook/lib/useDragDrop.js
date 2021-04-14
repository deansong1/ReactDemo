import React, { useState, useRef, useEffect, useMemo } from "react";
const DRAGGABLE = "DRAGGABLE";
const BAR = "BAR";

function draggable(item,id){
    return {
      type:DRAGGABLE,
      id,
      data:item
    }
}

function insertBars(list){
  let i=0;  //id
  const newBar = () =>{
      return {
        type:BAR,
        id:i++
      }
    }
}


