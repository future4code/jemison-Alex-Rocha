import perfil from './img/perfil.jpg';
import logo from './logo.svg';
import './App.css';

function App() {
 const mostrarBoaNoite = () =>{
  alert("Boa noite!")
 }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ola!Eu sou o Alex!</h1>
        <img src={perfil} className="app-perfil" alt="foto de perfil de usuario" />
       
       
        <p>Este é meu primeiro site React!</p>
        <button onClick = {mostrarBoaNoite}>Aperte Aqui!</button>
      </header>
      
    </div>
  );
}

export default App;
