import { Component } from "react";
import './buscador.css'

class Buscador extends Component {

    render() {
        return(
            <div className='buscador'>
                <input 
                    className='input'
                    type='search'
                    placeholder='faça sua pesquisa'
                    onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}

export default Buscador;