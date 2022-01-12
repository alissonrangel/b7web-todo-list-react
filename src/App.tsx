import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
function App() {

  const [loading, setLoading] = useState(false);

  const [list, setList] = useState<Item[]>([
    // { id: 1, name: 'Comprar o pão na padaria', done: false },
    // { id: 2, name: 'Comprar um bolo na padaria', done: true }
  ]);

  const getTodos = async () => {

    setList([]);
    setLoading(true);

    //Requisicao com fetch
    let url = 'http://localhost:3000/todos';
    
    const todos = await fetch(url)
                  .then( response => response.json() )
                  .then( data => {
                    console.log(data);
                    return data;                    
                  })

        
    setList(todos);
    setLoading(false);              
  }

  const handleAddTodo = async(item: string) => {
    let url = `http://localhost:3000/todos`;
    let retorno = 0;

    let result = await fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: item,
        done: false           
      })
    });

    retorno = await result.json();

    //retorno = parseInt(retorno);

    setList([...list, {id: retorno, task: item, done: false}])
    console.log(retorno);    
    alert('Adcionado com sucesso!!!');
  }

  const handleToggleStatusItem = async (done: boolean, id: number) => {
    let lista = [...list];
    let i = 0;
    let json = {};
    for (const item of lista) {
      if (item.id === id){
        item.done = done;

        let url = `http://localhost:3000/todos/${id}`;
        
        let result = await fetch(url, {
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            task: item.task,
            done: item.done            
          })
        });
        json = await result.json();
      }
    }
    setList(lista);
  }

  useEffect(()=>{
    getTodos();
  }, [])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTodo}/>
        {list.map((item, index)=>(
          <ListItem key={index} item={item} onCheck={handleToggleStatusItem} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
