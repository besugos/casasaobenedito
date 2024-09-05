import { useState, useEffect, useRef } from 'react'
import './style.css'
import Trash from '../../assets/red-trash.svg'
import { addRecord, getRecords } from '../../services/api-supabase';
import caidas from '../../services/caidas-odu'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputBirthdate = useRef()
  const inputReason = useRef()

  async function createUsers() {
    try {
      await addRecord(inputName.current.value, inputBirthdate.current.value, inputReason.current.value);
      alert('Registro adicionado com sucesso!');
      fetchRecords(); 
  } catch (error) {
      alert('Erro: ' + error.message);
  }
  }

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
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name='nome' placeholder='Nome' ref={inputName} />
        <input type="date" name='nascimento' placeholder='Data de Nascimento' ref={inputBirthdate} />
        <input type="text" name='motivo' placeholder='Motivo do pedido (doença, sintomas, etc.)' ref={inputReason} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>
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

export default Home
