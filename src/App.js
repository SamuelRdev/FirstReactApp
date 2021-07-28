import './App.css';
import Userlist from './components/UserList';
import PostList from './components/PostList';
import Form from './components/Form'
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Form />
      <h1>Learning react</h1> 
      <h2>Construction de l'application</h2>
      <p>Insérer les éléments dans une div global pour retourner la vue. Un seul élément élément global qui stock plusieurs éléments</p>
      < Userlist lesProps='Props' description="les appeler dans la fonction du composant enfant après l'avoir créer dans le composant parent" />
      <strong>Counter: {count}</strong>
      < PostList setCount={setCount} count={count} />
    </div>
  );
}

export default App;
