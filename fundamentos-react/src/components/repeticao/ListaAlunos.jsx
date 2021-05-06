import alunos from "../../data/Alunos"

export default props => {
    const listalunos = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}  )  {aluno.nome} -> {aluno.nota}
            </li>
        );
    })
    return (
        <div>
            <ul style={{listStyle: "none"}}>
            {listalunos}
            </ul>
        </div>
    )
}