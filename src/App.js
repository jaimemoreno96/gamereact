import React, { Fragment, useState } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [login, setLogin] = useState(false);
  const [nameA, setNameA] = useState('');
  const [balance, setBalance] = useState(0);
  return (
    <Fragment>
      <Header
        title="Game React"
        login={login}
        nameA={nameA}
        balance={balance}
      />
      <Footer />
    </Fragment>
  );
}

export default App;
