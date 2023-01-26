import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefas';
import Botao from '../button';
import Relogio from './clock'
import style from './Cronometro.module.scss';

interface Props {
    selecionado: ITarefa | undefined
}
export default function Cronometro({selecionado} : Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado?.tempo))
        }
    }, [selecionado]);
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
    
}