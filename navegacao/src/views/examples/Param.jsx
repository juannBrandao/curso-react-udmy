import { useParams } from "react-router-dom";
const Param = (props) => {
  const {id } = useParams()
  return (
    <div className="Param">
      <h1>Param componnent</h1>
      <p>Valor: {id}</p>
    </div>
  );
};
export default Param;
