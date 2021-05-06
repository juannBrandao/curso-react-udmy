export default props => {
    const  cb =  props.quandoClicar
    const geraIdade = ()=> parseInt(Math.random() * (20) + 50) 
    const geraNerd = ()=> Math.random() > 0.5  
    return (
        <div>
            <div>
                filho
            </div>
            <button onClick={
                _ => cb('maico dogras', geraIdade(), geraNerd())
            }>
                Fornecer informações
            </button>
        </div>
    )
}