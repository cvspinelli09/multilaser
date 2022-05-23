import React from "react";
import { Component } from "react";

import './card-list.css';

class CardList extends Component {

    render() {
        const { produtos } = this.props;
        console.log(this.props);

        return (
            <div className='card-list'>
                {produtos.map((produto) => {
                    const { id, Descricao, Codigo, URL_Imagem_Principal, 
                        Departamento, Cod_Barras, NCM, URL_da_Lamina,
                        Preco_Final_Unitario, Preco_Sugerido, 
                        Preco_Minimo_Permitido  }= produto
                    return (
                    <div key={id} className='card-container'>
                        <img 
                        src={URL_Imagem_Principal} 
                        className='image'
                        alt=''
                        
                        />
                        <div className='card-content'>
                            <div className='cod'><p>{Codigo}</p></div>
                            <div className='card-title'>
                                
                                <h3>{Descricao}</h3>
                            </div>
                            <div className='card-content-container'>
                                <div className='details-container'>
                                    
                                    <div className='card-details'><p >Deptº: </p><p className='item'>{Departamento}</p></div>
                                    <div className='card-details'><p>GTIN: </p><p className='item'>{Cod_Barras}</p></div>
                                    <div className='card-details'><p>NCM: </p><p className='item'>{NCM}</p></div>
                                    
                                </div> 
                            </div>
                            <div className='preços'>
                                <div className='preços-details'><p>Preço Final:</p><p className='item-p'>R$ {Preco_Final_Unitario}</p></div>
                                <div className='preços-details'><p>Preço Sugerido:</p><p className='item-p'>R$ {Preco_Sugerido}</p></div>
                                <div className='preços-details'><p>Preço Mínimo Permitido:</p><p className='item-p'>R$ {Preco_Minimo_Permitido}</p></div>
                            </div>    
                        </div>
                        <div className='button'>
                            
                            <button 
                                className='button-btn' 
                                type='button'
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`https://lista.mercadolivre.com.br/${Descricao}`);
                                }}
                                
                                
                            >Abrir no Mercado Livre
                            </button>
                            <button 
                                className='button-lam' 
                                type='button'
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(`${URL_da_Lamina}`);
                                }}
                                
                                
                            >Abrir Lâmina PDF
                            </button>
                            
                        </div>
                    </div>
                )})}
            </div>
        )
    }
}

export default CardList