
import { useState } from 'react';
import styles from './index.module.scss';

import Pen from './images/Pen';
import Trash from './images/Trash';
import Checkmark from './images/Checkmark';

interface InputTaskProps {
    id: string
    title: string
    isDone: boolean
    onDone: (id: string) => void
    onEdited: (title: string, id: string) => void
    onRemoved: (id: string) => void
}

const InputTask  = ({ id, title, isDone, onDone, onEdited, onRemoved }: InputTaskProps) => {
    const [newTitle, setNewTitle] = useState(title)
    const [editedFlag, setEditedFlag] = useState(false) // Флаг переключения в режим редактирования задачи

    return ( 
        <div className={styles.inputTask}>
            <label className={styles.inputTaskLabel}>
                <input 
                    className={styles.inputTaskCheckbox}
                    type="checkbox"
                    checked={isDone}
                    onChange={() => onDone(id)}
                />
                <div>
                    {isDone && <Checkmark className={styles.inputTaskCheckmark} />}
                </div>

                {editedFlag 
                    ? (                
                        <input 
                            className={styles.inputTaskTitle}
                            onChange={(event) => setNewTitle(event.target.value)}
                            type="text" 
                            autoFocus
                            value={newTitle}
                            onKeyDown={(event) => {
                                if(event.key === 'Enter') {
                                    onEdited(newTitle, id)
                                    setEditedFlag(false)
                                }
                                if(event.key === 'Escape') {
                                    setNewTitle(title)
                                    setEditedFlag(false)
                                }
                            }}
                        />
                       )
                    : (
                        <p  className={styles.inputTaskTitleParagraph}
                            style={{textDecoration: isDone ? 'line-through' : 'none'}}
                        >
                            {newTitle}
                        </p>
                      )
                }
            </label>

            <div className={styles.inputTaskBtnWrapper}>
                <button
                    className={`${styles.inputTaskBtn} ${styles.inputTaskEditBtn}`}
                    aria-label='Edit'
                    onClick={() => {
                        if (editedFlag) {
                            onEdited(newTitle, id)
                        }
                        setEditedFlag(prev => !prev)
                    }}
                >
                    <Pen className={`${styles.inputTaskIcon} ${editedFlag ? styles.inputTaskIconActive : ''}`} />
                </button>
                <button
                    className={`${styles.inputTaskBtn} ${styles.inputTaskRemoveBtn}`}
                    aria-label='Remove'
                    onClick={() => onRemoved(id)}
                >
                    <Trash className={styles.inputTaskIcon} />
                </button>
            </div>
        </div>
    )
}

export default InputTask