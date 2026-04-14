import { useState } from 'react'
import './App.css'

export default function App() {


  return (
  <>
    <main>
      <section className='foto'></section>
      <section className='formulario'>
        <h1>GUARANI FUTEBOL CLUBE</h1>
        <h2>Sócio Campeão</h2>
        <h2 className='login'>Fazer login</h2>
        <h3>E-mail:</h3>
        <input type="E-mail" placeholder='Digite seu Email...'/>
        <h3>Senha:</h3>
        <input type="Senha" placeholder='Digite sua Senha...'/>
        <button>Logar</button>
        <a href="">Esqueci minha senha</a>
      </section>
    </main>
  </>
  )
}