import { useState } from 'react';
import caidas from '../services/caidas-odu'



function Buzios() {

    const [showResultado, setShowResultado] = useState(false);
    const [resultado, setResultado] = useState([])

    function jogar() {
        const caida = Math.floor(Math.random() * 17);
        const resultado = caidas.getResult(caida);
        setShowResultado(true);
        setResultado(resultado);
    }

    return (
        <div className='inner-container'>
            <h1>Jogo de Búzios</h1>
            <br />
            <h4>* Este jogo <strong>NÃO SUBSTITUI</strong> um jogo feito por um sacerdote *</h4><br />
            <p>O intuito desta página é apenas prover um meio para que os Orixás possam, através da sincronicidade universal, responder a dúvidas e perguntas em momentos de necessidade, em que não haja a possibilidade de consultar um sacerdote</p>
            <br />

            <h4>Instruções</h4>
            <br />
            <ul>
                <li>Mentalize sua pergunta com fé, rogando aos Orixás que direcionem sua resposta</li>
                <li>Leia a resposta com atenção, buscando entender todo o significado que possa estar sendo passado</li>
                <li>Não repita a pergunta. Uma vez dada a resposta, entende-se que aquele é o recado a ser passado</li>
                <li>Quando estiver preparado, clique no botão "Jogar"</li>
            </ul>
            <br />
            <button id="btn-jogar" className="btn" onClick={jogar}>Jogar</button>
            <br />
            {showResultado && (
                <div className="resultado-buzios">
                    <br/>
                    <h1>ODU: {resultado.odu}</h1>
                    <h3>Caída: {resultado.caida}</h3>
                    <h4>Respondem os orixás: {resultado.orixas}</h4>
                    <h4>Resposta: {resultado.resposta_curta}</h4>
                    <p>{resultado.resposta_longa}</p>
                </div>
            )}
        </div>
    )
}

export default Buzios