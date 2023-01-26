import React from 'react';
import Item from './item'
import style from './List.module.scss';

function Lista() {
    const tarefas = [
                     {tarefa: "React", tempo: "02:00:00"},    
                     {tarefa: "Javascript", tempo: "01:30:00"},
                     {tarefa: "Elixir", tempo: "01:10:00"}
                    ]

    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                     key={index} 
                     {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;