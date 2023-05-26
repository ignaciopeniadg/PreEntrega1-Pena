
import './index.css';
import Navbar from "./components/navbar.jsx";
import CardExperiencia from "./components/card.jsx";

function App() {
  return (
    <div>
      <header className="App-header">
        <Navbar />
      </header>
      <div>
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
    </div>

  );
}

export default App;
