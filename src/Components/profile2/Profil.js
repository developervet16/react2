/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import image from './ombre-homme.jpg'


function App (props) {

    return (
        <div className = 'App'>

            <div> {props.children} </div>

            <h1> {props.name} </h1>
            <h1> {props.bio} </h1>
            <h1> {props.profession} </h1>

            {/* { <button onClick={this.handleClick}></button> } */}

            


        </div>
    )
    
}

export default App ;
