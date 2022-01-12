import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
  item: Item;
  onCheck:(done: boolean, id: number)=>void;
}

export const ListItem = ({item, onCheck}: Props) => {

  const [isChecked, setIsChecked] = useState(item.done);

  const toggleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onCheck(e.target.checked, item.id);
  }
  return (
    <C.Container done={isChecked}>
      <input 
        type='checkbox' 
        checked={isChecked}
        onChange={toggleCheck}
      />
      <label>{item.name} -- {item.done.toString()}</label>
    </C.Container>
  )
}