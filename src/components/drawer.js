import './drawer.css'

export default function Drawer (props) {
    return (
    <div className={`drawer ${props.open?"visible":""}`}>
        <div>{props.open.content}</div>
    </div>
    )
}
