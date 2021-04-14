import React from 'react';

const numbers = [1,2,3,4,5]
function ListItem(argu){
    return <li>{argu.value}</li>
}
function Num(argu){
    const numbers = argu.numbers;
    const listItem = numbers.map(po => 
        <ListItem key={po.toString()} value={po} />
        )

    return ( <ul>{listItem}</ul> )
}

class KeyTest extends React.Component{
    render(){
       return (<Num numbers={numbers} />)
    }
}

export default KeyTest