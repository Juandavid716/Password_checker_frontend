import Input from "./components/Input";
//import Footer from "./components/Footer";

import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      
      <section className="App-header">
      
     
        <div className="inputHeader">
          <div className="title">
          <div  className="statement">
          <h1> ¿Qué tan fuerte es tu contraseña?  </h1>
          </div>
          <h3 id="subtitle">¡Compruebalo!</h3></div>
          
           <Input/>
         
          
        
        </div>
        <div className="content">
          
          <Footer/>
        </div>
        
        
      </section>
    </div>
  );
}

export default App;
