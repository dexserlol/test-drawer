import './SegmentedBtn.css'
import { useState } from 'react'
export default function SegmentedBtn(props){
    const [enable , useEnable] = useState(null)
    const ClickHandler = (e) => {
        useEnable(Number(e.target.id))
    }
    return (
        <div className="btn-container" onClick={ClickHandler}>
            <div id="1" className={enable===1?"text-container enable":"text-container"}>
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
	 width="24px" height="24px" viewBox="0 0 405.272 405.272"
	 xml="preserve">
<g>
	<path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
		c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
		c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"/>
</g>
</svg>
            text1</div>
            <div id="2" className={`${enable===2?"text-container enable":"text-container"}`}>
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
	 width="24px" height="24px" viewBox="0 0 405.272 405.272"
	 xml="preserve">
<g>
	<path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
		c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
		c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"/>
</g>
</svg>
            text2</div>
            <div id="3" className={`${enable===3?"text-container enable":"text-container"}`}>
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
	 width="24px" height="24px" viewBox="0 0 405.272 405.272"
	 xml="preserve">
<g>
	<path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
		c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
		c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"/>
</g>
</svg>
            text3</div>
        </div>)
}