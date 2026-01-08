import React  from 'react'
import ReactDom from 'react-dom/client';

import App from './App.jsx'
import Chai from "./chai";


function MyApp(){
    return(
        <div> 
        <h1> custom app</h1>
        </div>
    )
}
// const ReactElement = {
//     type:"a",
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google'
// }

 const anotherElement = ( 
    <a href='https://google.com'  target='_blank'> visit google</a>
 )
const username = "hyyy"
 const reactElement =  React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me visit to google',
    username
 )

ReactDom.createRoot(document.getElementById('root')).render(

 reactElement
 
)
