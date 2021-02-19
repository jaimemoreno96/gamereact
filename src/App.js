import React, { Fragment, useState, useEffect } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  let initialResults = JSON.parse(localStorage.getItem('results'));
  if (!initialResults) {
    initialResults = [];
  }


  // Arreglo de citas
  const [results, setResults] = useState(initialResults);

  useEffect(() => {
    if (initialResults) {
      localStorage.setItem('results', JSON.stringify(results));
    } else {
      localStorage.setItem('results', JSON.stringify([]));
    }
  }, [results, initialResults])

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
      <Content results={results}/>
      <Footer />
    </Fragment>
  );
}

export default App;
