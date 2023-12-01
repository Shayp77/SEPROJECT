import './App.css';
import { Navbar, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar1} from './Navbar';
import {HomePage} from './HomePage';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar1 />
      </header>
      <main className="bg-dark text-light">
        <HomePage />
      </main>
      <footer class="bg-secondary">
        <Container className="px-4 py-5">
          <p className="text-center text-white">
            Copyright &copy; CINEMAJESTY website 2023 <br/> Wilmer. Davenn. Alvin. Andreas. Bun Jak Sin.
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
