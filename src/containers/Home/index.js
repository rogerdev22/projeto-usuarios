
// 21/10/2022 13:21 Aula 06 montando telas de cadastro e outra dos usuarios 

import React, { useState, useRef } from "react";

import {link} from 'react-router-dom'


import axios from "axios";

import Casal1 from '../../assets/casal1.svg'
import Arrow from  '../../assets/arrow.svg'


import {
  Container,
  H1,
  Image,
  ContainerItens,
  Inputlabel,
  Input,
  Button
 
} from "./styles";





function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();


  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3000", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser])
  }
 
 
  
  return (
    <Container>
      <Image alt="logo-casal1" src={Casal1} />

      <ContainerItens>

        <H1>Olá React</H1>

        <Inputlabel> Nome</Inputlabel>
        <Input ref={inputName} placeholder="Nome" />

        <Inputlabel>Idade</Inputlabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="Seta" src={Arrow} />
        </Button>

     <link to="/usarios"> Usuarios</link>

      </ContainerItens>
    </Container>

  );
}
export default App
