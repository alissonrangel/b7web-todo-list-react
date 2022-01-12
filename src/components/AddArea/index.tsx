import * as C from './styles';
import { useState, KeyboardEvent } from 'react';

type Props = {
  onEnter: (item: string) => void;
}

export const AddArea = ({onEnter}: Props) => {

  const [item, setItem] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && item !== '') {
      onEnter(item);
      setItem('');
    }
}

return (
    <C.Container>
        <div className="image">➕</div>
        <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={item}
            onChange={e=>setItem(e.target.value)}
            onKeyUp={handleKeyUp}
        />
    </C.Container>
);
}