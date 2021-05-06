
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input  from "./components/formulario/Input"
import Contador  from "./components/contador/Contador"
import Mega from "./components/mega/Mega"


import "./app.css"
export default _ =>

  <div className="App">
    <h1>Fundamentos react</h1>
    <div className="Cards">
    <Card Titulo=" #12  megasena" color="#BE03FD">
        <Mega  qtde={8}/>

      </Card>
    <Card Titulo=" #11  Contador" color="#048243">
        <Contador valorInicial={10} />

      </Card>
    <Card Titulo=" #10  Componente controlado" color="#FD4659">
        <Input  />

      </Card>
    <Card Titulo=" #9  Comunicação Indireta" color="#33B864">
        <IndiretaPai  />

      </Card>
      <Card Titulo=" #8  Comunicação Direta" color="#6C3461">
        <DiretaPai  />

      </Card>
      <Card Titulo=" #7 Renderização Condicional" color="#6C3461">
        <ParOuImpar numero="20" />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo email={{ email: "@gmail.com" }} />
      </Card>
      <Card Titulo=" #6 desafie  repetição Produtos" color="#B00149">
        <TabelaProdutos />
      </Card>
      <Card Titulo=" #5 Repetição" color="#F8481C">
        <ListaAlunos />
      </Card>
      <Card Titulo=" #4 Componente Com filhos" color="#e91e63">
        <Familia sobrenome="ferreira" >
          <FamiliaMembro nome="maicão" />
          <FamiliaMembro nome="maria" />
          <FamiliaMembro nome="patinhas" />
        </Familia>
      </Card>
      <Card Titulo=" #3 Desafio Aleatório" color="#FF5733">
        <Aleatorio max={10} min={3} />
      </Card>

      <Card Titulo=" #2 Com Parametro" color="#A8FF33">
        <ComParametro
          Situacao="Situação do aluno"
          nome="Juann"
          nota={9.7}
        />
      </Card>

      <Card Titulo="#1  Fragento" color="#33FFA6">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
