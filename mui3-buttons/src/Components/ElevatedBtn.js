import './ElevatedBtn.css'

export default function ElevatedBtn(props) {
    return (
        <div className="btn" onClick={(e)=>props.callback(e)}>
            {props.children}
        </div>
    )
}