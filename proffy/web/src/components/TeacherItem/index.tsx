import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/25774278?s=460&u=9f3207c7fe6543da8b2985fcdf81fbe35ace0e5f&v=4" alt="Bruno"/>
      <div>
        <strong>Bruno Barbosa</strong>
        <span>Programação</span>
      </div>
    </header>

    <p>
      Tentando ensinar alguma coisa de programação, e variável.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 90,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem