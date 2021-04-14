import React from 'react';

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
function Blog(pop){
    const Box = (
        <ul>
           { pop.posts.map(pot => 
                <li key={pot.id}>
                    {pot.content}
                </li>)
                   }
        </ul>
        
            )
    const Arrow = (
        pop.posts.map(pot => 
            <div key={pot.id}>
                <h1>{pot.title}</h1>
                <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">{pot.content}</a>
            </div>
            )
    )
    
    return (
        <div>
            {Box}
            <hr/>
            {Arrow}
        </div>
        
    )
}
class ReactList extends React.Component{
    render(){
       return (<Blog posts={posts} />)
    }
}

export default ReactList