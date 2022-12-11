import './App.css';
import imageLogo from './images/logo.png';
import Boton from './components/Boton';

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          src={imageLogo}
          className='logo'
          alt='Logo' />
      </div>
      <div className='calculador-contenedor'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'></div>
        <Boton>Limpiar</Boton>

      </div>
    </div>
  );
}

export default App;
