import React from "react";
import { Layout } from "./components/layout";
import styled from "styled-components";

const Box = styled.div`
  background-color: orange;
  border-radius: 3px;
`

function App() {
  return (
    <Layout>
      <Box>
        <h1>Faça o Login</h1>
      </Box>
      <label htmlFor="emailInput">Email:</label>
      <input id="emailInput" type="email"/>
      <label htmlFor="senhaInput">Senha:</label>
      <input id="senhaInput" type="password"/>
      <button>
        Entrar
      </button>
    </Layout>
  );
}

export default App;
