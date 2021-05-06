

export default function (props) {
    const {min , max } = props
    const aleatorio = parseInt(Math.random() * (min - max)) + min
    return (

        <div>
            sorteio entre os valores <strong>{max}</strong> e <strong>{min}</strong>
            <br/>
            o valor sorteado foi <strong> {aleatorio} </strong>

        </div>
    )
};