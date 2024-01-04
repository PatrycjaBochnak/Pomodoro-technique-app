import React, { useState } from "react";
import "./App.css";
import styled from 'styled-components'
import Header from "./components/Header";
import Timer from "./components/Timer";

const Container = styled.div`
  min-width: 390px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  background: #000300;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  padding: 0 20px;
  margin-bottom: 20px;
  `

function App() {

  return (
   <Container> 
    <Header/>
    <Timer/>
   </Container>
  );
}

export default App;
