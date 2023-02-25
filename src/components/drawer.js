import './drawer.css'
import { useRef, useEffect } from 'react'
export default function Drawer (props) {
    const updater=useRef(0)
    useEffect(()=>{
        let timerId
        console.log(updater.current)
        if (props.open && updater.current) {
            updater.current.style.animation= ""
            timerId = setTimeout(()=>{updater.current.style.animation= ".8s linear 0s text"},1)
            
        }
        return ()=>{clearTimeout(timerId)}
    }, [props.open.test])
    return (
    <div className={`drawer ${props.open?"visible":""}`} >
        <div ref={updater} className="textcont" open="open" style={{animation:"1s linear 0s text"}}>{props.open.test}</div>
    </div>
    )
}
