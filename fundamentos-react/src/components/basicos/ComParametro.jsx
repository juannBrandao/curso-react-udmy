export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'RecuperaÃ§Ã£o'

    return (
        <div>
            <h2>{props.Situação}</h2>
            <p>
                <strong>{props.nome} </strong>
                tem nota
                <strong> {props.nota} </strong>
                e foi
                <strong> {status}</strong>
            </p>

        </div>
    )
}