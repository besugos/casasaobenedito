import { useState, useEffect, useRef } from 'react'
import './style.css'
import Trash from '../assets/red-trash.svg'
import { addRecord, getRecords } from '../services/api-supabase';

function Corrente() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputBirthdate = useRef()
  const inputReason = useRef()

  async function createUsers() {
    try {
      await addRecord(inputName.current.value, inputBirthdate.current.value, inputReason.current.value);
      alert('Registro adicionado com sucesso!');
    } catch (error) {
      alert('Erro: ' + error.message);
    }
  }

  return (
    <div>
      <div>
        <h1>Corrente da Saúde</h1>
      </div>
      <div className='container'>
        <form action="">
          <h1>Cadastro de Usuários</h1>
          <input type="text" name='nome' placeholder='Nome' ref={inputName} />
          <input type="date" name='nascimento' placeholder='Data de Nascimento' ref={inputBirthdate} />
          <input type="text" name='motivo' placeholder='Motivo do pedido (doença, sintomas, etc.)' ref={inputReason} />
          <button type='button' onClick={createUsers}>Cadastrar</button>
        </form>
      </div>
    </div>


  )
}

export default Corrente
