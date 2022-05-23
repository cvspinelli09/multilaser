import React from 'react';
import { Component } from 'react';
import Buscador from './component/Buscador/buscador.component';
import Scroll from './component/Scroll/scroll.component';
import CardList from './component/card-list/card-list.component';

import './component/Buscador/buscador.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      produtos: [],
      campoPesquisa: ''
    };
  }

  componentDidMount() {
    fetch('https://cvspinelli09.github.io/json/hello.json')
    .then((response) => response.json())
    .then((lista) => 
      this.setState(
        () => {
          return {produtos: lista};
        }
      )
    );
  }


  onSearchChange = (e) => {
    const campoPesquisa = e.target.value.toLowerCase();
    this.setState({ campoPesquisa })
  }

  render() {

    const { produtos, campoPesquisa } = this.state;
    const { onSearchChange } = this;

    const produtosFiltrados = produtos.filter((produto) => {
      return produto.Descricao.toLowerCase().includes(campoPesquisa);
   });
   
    return (
      <div className='App'>
        <h1>PRODUTOS MULTILASER</h1>
        <Buscador onChangeHandler={onSearchChange} />
        <Scroll>
          <CardList produtos={produtosFiltrados}/>
        </Scroll>
        
      </div>
    )
  }
}

export default App;
