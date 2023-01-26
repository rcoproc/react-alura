import Item from './item'
import style from './List.module.scss';
import { ITarefa } from '../../types/tarefas';

function Lista({ tarefas}: { tarefas: ITarefa[] }) {

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
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