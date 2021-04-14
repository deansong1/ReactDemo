import React,{useState,createContext} from "react";

export const BookContext = createContext();
const BookContextProvider = () => {
     const [books,setBooks] = useState([
         {title:"撒哈拉的故事",id:1},
         {title:"山海经",id:2},
         {title:"西厢记",id:3},
     ]); 
     return (
        BookContextProvider
     );
};
