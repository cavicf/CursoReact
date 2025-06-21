import { Card } from "./components/card";
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
    <Header/>
      <div>
        Hello World
        <Card 
          id={2}
          paragrafo="Typescript"
          details="TS para frontend e backend"
        />
        <Card 
          id={3}
          paragrafo="HTML"
          details="HTML para frontend"
        />
        <Card 
          id={4}
          paragrafo="SQL"
          details="SQL para banco de dados"
        />
      </div>
      <Footer/>
    </>
  );
}

export default App;
