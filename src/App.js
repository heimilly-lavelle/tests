import croct from '@croct/plug';
import {render} from 'react-dom';
import {CroctProvider} from '@croct/plug-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Perfil from './components/Perfil';
import Contato from './components/Contato';
import Cursos from './components/Cursos';
import Container from './components/Container';
import Header from './components/header';
import Footer from './components/footer';

croct.plug({appId: '00000000-0000-0000-0000-000000000000'});

function App() {
  return (
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
    <Router>
      <Header />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Cursos">
            <Cursos />
          </Route>
          <Route exact path="/Contato">
            <Contato />
          </Route>
          <Route exact path="/Perfil">
            <Perfil />
          </Route>
        </Container>  
      </Switch>
      <Footer />
    </Router>

    </CroctProvider>
  );
}

render(<App />, document.getElementById('root'));

export default App;
