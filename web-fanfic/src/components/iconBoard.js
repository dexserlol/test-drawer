import React from "react"
import './iconBoard.css'
import {NavLink} from 'react-router-dom'
export default function IconBoard (props) {
    return (<>
    <NavLink to={props.redirect} className={({isActive})=>isActive?"containerIcon open":"containerIcon"} onClick={()=>props.drawer(props.content)}>
        <div className="container--back">
            <img src={props.icon} />
        </div>
        <h1>{props.text}</h1>
    </NavLink>
    </>)
}