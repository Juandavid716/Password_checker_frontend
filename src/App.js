import Input from "./components/Input";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Result from "./components/Result"

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      
        <Header/>
        <div className="inputHeader">
          <div className="title">
          <div  className="statement">
          <h1> ¿Qué tan fuerte es tu contraseña?  </h1>
          </div>
          <h3>¡Compruebalo!</h3></div>
          <div className="passwordBox">
           <Input/>
          </div>
          
        
        </div>
        <div className="content">
          <Result/>
          <Footer/>
        </div>
        
        
      </header>
    </div>
  );
}

export default App;
