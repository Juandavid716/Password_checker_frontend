import Input from "./components/Input";
//import Pie from "./components/Pie";
import Encabezado from "./components/Encabezado"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Encabezado/>
        <div className="inputHeader">
          <div className="title">
          <h1> ¿Qué tan fuerte es tu contraseña?  </h1>
          <h3>¡Compruebalo!</h3></div>
          <div className="passwordBox">
           <Input/>
          </div>
          
        
        </div>
        
      </header>
    </div>
  );
}

export default App;
