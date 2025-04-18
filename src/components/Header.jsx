import { useState } from 'react'
import './Header.css'
import Foto from '../assets/perfil.jpg'

function Header (){
    return(
       <>
        <div className="card-container">
         <h1>Heloisa Martinho</h1>
         <img id="pefil" style={{ borderRadius: '50%' }} src={Foto} width="250px"  alt="" /> 
         <h1 className="name">Dançarina</h1>
      <p className="title">Modalidades Exercidas:</p>
      <p className="modalidade">Ballet classico , Jazz e contemporaneo</p>
      <p className="contact">heloisaolivmartinho3221@gmail.com</p>
      <p className="num">(19)98810-5527</p>
         </div>
       </>

    )
}

export default Header;