// import React, {useState} from 'react';
import React from 'react';
import './App.css';
// import Home from './pages/Home';
import Routes from './routes';
// import Header from './Header';

function App() {
  /*
  const [counter, setCounter] = useState(0);  // retorna [valor, funcao update]
  function handleButtonClick() {
    setCounter(counter + 1)
    console.log({counter})
  }
  */
  return (
    <Routes />
    /*
    <Home />
    <h1>Hello World</h1>
    <div>
      <Header title='Hello World'/>
      <Header title= { `Contador: ${counter}`} />
      <h1>{counter}</h1>
      <h1>Conteúdo da Aplicação</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
    */
  );
}

export default App;
