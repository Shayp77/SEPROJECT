import './App.css';
import {Navbar1} from './Navbar';
import {HomePage} from './HomePage';
import {Footer} from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
