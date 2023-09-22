import React, { useReducer,useContext,useState,useEffect } from 'react';

const NewSongForm = ({addSong}) => {
    const [title,setTitle] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title);
        addSong(title);
        setTitle("");
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <label>歌曲名称：</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} style={{color:"#000"}}/>
            <input type="submit" value="添加歌曲"/>
        </form>
    )
}
export default NewSongForm;