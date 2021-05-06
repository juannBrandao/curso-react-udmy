import If from "./if"

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome} </strong>!
            </If>
            <If teste={usuario && !!usuario.nome}>
                Seja bem vindo <strong>Amigão </strong>!
            </If>
        </div>
    )
}