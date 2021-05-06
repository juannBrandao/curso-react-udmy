import produtos from "../../data/produtos"
import "./TabelaProdutos.css"
export default () => {

    const produtosTD = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'par': ''}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td> R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })
    return (
        <div className="TabelaProdutos">
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosTD}
                </tbody>
            </table>
        </div>

    )
}