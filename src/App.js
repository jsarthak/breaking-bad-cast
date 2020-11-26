import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/header'
import CharacterGrid from './components/characters/characterGrid'
import Search from './components/ui/search';
const App = () => {


  const [items, setItems]= useState([])
  const [isLoading, setIsLoading]= useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems = async()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>{setQuery(q)}}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
