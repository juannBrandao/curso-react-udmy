import { useState } from 'react'
import IndiretaFilho from "./IndiretaFilho"
import React from "react"

export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerinformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdade' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerinformacoes} ></IndiretaFilho>
        </div>
    )
}