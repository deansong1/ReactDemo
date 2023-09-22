import React, { useReducer,useContext,useState,useEffect } from 'react';
import "./hook.less";
import NewSongform from "./newSongForm";

export default function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  // const [count, setCount] = useState(0);
  // return (
  //   <div id="hookStyle">
  //     <p className="title-color">You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)} className="btn">
  //       Click me
  //     </button>
  //   </div>
  // );


  const SongList = () => {
    const [songs,setSongs] = useState([
      {title:"Lemon",id:1},
      {title:"Loser",id:2},
      {title:"打上花火",id:3}
    ]);
    const [age,setAge] = useState(18);

    useEffect(() => {
        console.log("effect函数运行:",songs);
      },[songs]);
    const addSong = (title) => {
      setSongs([...songs,{title,id:Math.random()}])
    }

    return (
      <div className="song-list">
        <ul>
          {
            songs.map(song => 
               (<li key={song.id}>{song.title}</li>)
            )
          }
          <NewSongform addSong={addSong}/> 
        </ul>
        <button onClick={addSong}>添加歌曲</button>
        <button onClick={()=>setAge(age + 1)}>点击一次加一==={age}</button>
      </div>
    )
  };

  const [count,setCount] = useState(0);
  useEffect(()=>{
    document.title = `you click ${count} times`;
  })
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={()=>setCount(count + 1)}>
        Click me
      </button>
      <SongList/>
         
    </div>
  )
}

// function reducer(state,action){
//   console.log(state,action);
//   switch (action.type) {
//     case "add":
//       return {
//         count:state.count + 1
//       };
//     case "sub":
//       return {
//         count:state.count - 1
//       };
//     default:
//       throw "...";
//   }
// };

// export default function Counter(){
//   const [counter,dispatch] = useReducer(reducer,{count:0});
//   return (
//     <div style={{color:"#000"}}>
//       <div>your count is:{counter.count}</div>  
//       <button onClick={()=>dispatch({type:"add"})}>+</button>
//       <button onClick={()=>dispatch({type:"sub"})}>-</button>
//     </div>
//   )
// };