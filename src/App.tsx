import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
function App() {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true }
  ]);

  const handleAddTodo = (item: string) => {
    setList([...list, {id: (list.length + 1), name: item, done: false}])
    alert('Adcionado com sucesso!!!');
  }

  const handleToggleStatusItem = (done: boolean, id: number) => {
    let lista = [...list];
    let i = 0;
    for (const item of lista) {
      if (item.id === id){
        item.done = done;
      }
    }
    setList(lista);
  }

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
