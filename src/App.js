
import './App.css';
import ExplorAll from './Components/ExplorAll';
import FlashSale from './Components/FlashSale';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Top100 from './Components/Top100';
import TredingMustHaves from './Components/TredingMustHaves';


function App() {
  return (
    <div className="App">
      <Header/> 
      <Slider/> 
       <FlashSale/>
      <TredingMustHaves/>
       <Top100/>
      <ExplorAll/>
       <Footer/>
    </div>
  );
}

export default App;
