import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome="junior" idade={17} nerd={true}></DiretaFilho>
            <DiretaFilho nome="maicão" idade={24} nerd={false}></DiretaFilho>
        </div>
    )
}