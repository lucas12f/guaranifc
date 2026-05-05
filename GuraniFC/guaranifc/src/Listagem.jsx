import { useState } from 'react'
import './Listagem.css'

export default function Listagem() {
    return( 
        <>
        <main>
            <h1>Tabela de Carros</h1>

            <table border="1">
            <tr>
                <td>Modelo</td>
                <td>Marca</td>
                <td>Ano</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>

            <tr>
                <td>Evija</td>
                <td>Lotus</td>
                <td>2026</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Uno</td>
                <td>Fiat</td>
                <td>2000</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Veneno</td>
                <td>Lamborgini</td>
                <td>2010</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Italia</td>
                <td>Ferrari</td>
                <td>2020</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
            </table>
        </main>
        </>
    )
}
