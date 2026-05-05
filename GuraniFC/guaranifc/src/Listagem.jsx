import { useState } from 'react'
import './Listagem.css'

export default function Listagem() {
    return( 
        <>
        <main>
            <h1>Tabela de Cadastro</h1>

            <table border="1">
            <tr>
                <td>Email</td>
                <td>Senha</td>
                <td>ID</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>

            <tr>
                <td>lucas@gmail.com</td>
                <td>lucas123</td>
                <td>001</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>pedro@gmail.com</td>
                <td>pedro123</td>
                <td>002</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>matheus@gmail.com</td>
                <td>matheus123</td>
                <td>003</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>vinicius@gmail.com</td>
                <td>vinicius123</td>
                <td>004</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
            </table>
        </main>
        </>
    )
}
