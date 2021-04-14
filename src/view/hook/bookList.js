import React, { useReducer,useContext,useState,useEffect,Component } from 'react';

const BookList=()=>{
    // const { isLighttheme,light,dark } = useContext(ThemeContext);
    const theme = isLighttheme ? light : dark;
    return (
        <div className="book-list" > 
        {/* style={{color:theme.syntax,background:theme.bg}} */}
            <ul>
                <li style={{background:theme.ui}}>沙哈拉的故事</li>
                <li style={{background:theme.ui}}>梦里花落知多少</li>
                <li style={{background:theme.ui}}>平凡的世界</li>
            </ul>
        </div>
    );
}
 
export default BookList;