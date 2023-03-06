import React from 'react';
import '../Style/Header.css';
import logo from '../../src/logo2.png';

export default function Header() {
  return (
    <div>
      <header>
        <div className='div-logo'>
          <img src={logo} alt="logo" className='logo'/>
        </div>
        <div className='cabecalho'>
          <h2>Seja bem vindo!!!</h2>
          <h2>Contatos</h2>
        </div>
      </header>
    </div>
  )
}
