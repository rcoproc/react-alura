import React,{ useState} from 'react';
import Cronometro from '../components/chronometer';
import Formulario from '../components/form';
import Lista from '../components/list';
import { ITarefa } from '../types/tarefas';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
