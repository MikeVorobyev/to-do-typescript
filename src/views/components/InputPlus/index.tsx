import { useCallback, useState } from 'react';
import styles from './index.module.scss';

interface InputPlusProps {
    onAdd: (title: string) => void
}

const InputPlus  = ({ onAdd }: InputPlusProps) => {
    const [ inputValue, setInputValue] = useState('')
    const addTask = useCallback(() => {
        onAdd(inputValue)
        setInputValue('')
    }, [inputValue])

    return ( 
        <div className={styles.inputPlus}>
            <input
                className={styles.inputPlusValue} 
                type="text"
                placeholder='Задача на сегодня...'
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => { 
                    if(event.key === 'Enter') {
                        addTask();
                        (event.target as HTMLInputElement).blur() 
                    }
                }}

            />
            <button 
                className={styles.inputPlusButton}
                aria-label='Add'
                onClick={addTask}
            >+</button>
        </div>
    )
}

export default InputPlus