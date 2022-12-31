import './App.css';
import Home from './Componants/Home';
import Navbar from './Componants/Navbar';
import Plans from './Componants/Plans';
import Programs from './Componants/Programs';
import Reasons from './Componants/Reasons ';
import Testimonials from './Componants/Testimonials';
import Join from './Componants/Join';
import Footer from './Componants/Footer';


function App() {
  return (
     <div className="App">
                 <Navbar/>
                  <Home/>
                  <Programs/>
                  <Reasons/>
                  <Plans/>
                  <Testimonials/>
                  <Join/>
                  <Footer/>
</div>
  );
}

export default App;
