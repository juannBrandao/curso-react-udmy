import React from "react";

import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"
import "./Contador.css"

class Contador extends React.Component {

    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passoInicial || 5
    }
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    setPasso = (Novopasso) => {
        this.setState({
            passo: Novopasso
        })
    }
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} ></PassoForm>
                <Botoes incrementar={this.inc} decrementar={this.dec} ></Botoes>
            </div>
        )
    }
}

export default Contador