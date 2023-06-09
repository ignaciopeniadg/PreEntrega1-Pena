
import './index.css';
import Navbar from "./components/navbar.jsx";
import CardExperiencia from "./components/card.jsx";
import Button from "./components/common/button.jsx";

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <Navbar />
      </header>
      <div className='PuestoActual'>
        <CardExperiencia
        empresa="Oliver, U-Studio"
        fecha="May 2022 - Actualidad"
        puesto="Director de Arte - Senior"
        descripcion="Agencia Inhouse UNILEVER - Argentina. Desarrollo de KV y adaptación de piezas digitales para
diferentes campañas en marcas específicas.
Dirección de Arte para cuenta Axe Latam @axe.latam,
desarrollo de línea gráfica en productos para la cuenta,
creación de contenido visual."/>
      </div>
      <Button />
    </div>

  );
}

export default App;
