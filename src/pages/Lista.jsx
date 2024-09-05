import { useState, useEffect, useRef } from 'react'
import './style.css'
import Trash from '../assets/red-trash.svg'
import { addRecord, getRecords } from '../services/api-supabase';

function Lista() {

  const [users, setUsers] = useState([])

  const fetchRecords = async () => {
    try {
      const fetchedUsers = await getRecords();
      setUsers(fetchedUsers);
    } catch (error) {
        alert('Erro ao buscar registros: ' + error.message);
    }
};

  useEffect(() => {
    fetchRecords();
  }, []);


  return (
    <div className='container'>
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p><span>Nome:</span> {user.name}</p>
            <p><span>Data de nascimento:</span> {user.birthdate}</p>
            <p><span>Motivo:</span> {user.reason}</p>
            <p><span>Data do cadastro:</span> {user.created_at}</p>
          </div>
          <button>
            <img src={Trash} alt="apagar" />
          </button>
        </div>
      ))};


    </div>

  )
}

export default Lista
