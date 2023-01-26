import React from 'react';
import Cronometro from '../components/chronometer';
import Formulario from '../components/form';
import Lista from '../components/list';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
      <Cronometro/>
    </div>
  );
}

export default App;
