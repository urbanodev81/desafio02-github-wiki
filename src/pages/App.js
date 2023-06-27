import { useState } from 'react';
import gitLogo from '../assets/logo-thumbnail.png'
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import api from '../services/api'

import {Container} from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async() => {
    const {data} = await api.get(`repos/${currentRepo}`)
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id);
      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      } else {
        alert('Já existe esse Repositorio na lista');

      }
    } else {
      alert('Repositorio nao encontrado');
    }
  }
  
  const handleRemoveRepo = (id) => {
    console.log('remove registro', id);
    const updatedRepos = repos.filter(repo => repo.id !== id);
    setRepos(updatedRepos);
  } 
  return (
      <Container>
        <img src={gitLogo} width={72} height={72} />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
      </Container>
    );
  }
  
  export default App;
  