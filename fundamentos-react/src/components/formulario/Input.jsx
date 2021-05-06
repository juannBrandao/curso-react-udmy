import { useState } from "react"

import './input.css'

export default props => {
    const [valor, setValor] = useState('inicial');
    function quandomudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className="Input" >
            <div style={{
                display: "flex",
                flexDirection:"column"
                
            }}>
            <input value={valor}  onChange={quandomudar} type="text" />
            <input value={valor} readOnly type="text" />
            </div>

        </div>
    )
}