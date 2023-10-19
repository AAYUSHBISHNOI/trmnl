import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from './Components/MyHeader';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import What from './Components/What';
import Application from './Components/Application';
import Product from './Components/Product';
import Discover from './Components/Discover';
import Termnl from './Components/Termnl';
import Mylogo from './Components/Mylogo';

function App() {
  return (
    <>
    <Mylogo/>
      <MyHeader/>
      <What/>
      <Application/>
      <Product/>
      <Discover/>
      <Termnl/>
    </>
  );
}

export default App;
