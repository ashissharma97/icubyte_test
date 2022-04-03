import React, { useEffect } from "react";
import { request } from './request';
import { VscEdit, VscDiffAdded, VscChromeClose } from 'react-icons/vsc';

function App() {
  const [words, setWords] = React.useState([]);
  const [word, setWord] = React.useState('');
  const [id, setId] = React.useState('');

  useEffect( () => {
    async function fetchData() {
      const response = await request('/read', 'GET');
      setWords(response);
    }
    fetchData();
  } ,[])

  const handleChange = (event) => {
    setWord(event.target.value);
  }

  const updateItem = (w, i) => {
    setWord(w);
    setId(i)
  }
  async function deleteItem(id) {
    const response = await request('/delete', 'DELETE', {id});
    const allWords = await request('/read', 'GET');
    setWords(allWords)
    setWord('');
    setId('')
    return response;
  }

  async function addItem() {
    if (!!id){
      const response = await request('/update', 'PUT', {word, id});
      const allWords = await request('/read', 'GET');
      setWords(allWords)
      setWord('');
      setId('')
      return response;
    }
    else {
      const response = await request('/create', 'POST', {word});
      const allWords = await request('/read', 'GET');
      setWords(allWords)
      setWord('');
      setId('')
      return response;
    }
  }

  return (
    <div className="App">
      <h1> Words Page </h1>
      <input type="text" onChange={handleChange} value={word} />
      <button onClick={ () => addItem() }> <VscDiffAdded/> </button>
      {words.map(w => (
        <div className="word" key={w.id}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3> {w.word} </h3>
            <button onClick={ () => updateItem(w.word, w.id) }> <VscEdit/> </button>
            <button onClick={ () => deleteItem(w.id) }> <VscChromeClose/> </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
