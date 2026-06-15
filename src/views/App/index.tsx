import { useToDoStore } from '../../data/stores';

import styles from './index.module.scss';
import InputPlus from '../components/InputPlus';
import InputTask from '../components/InputTask';

const App = () => {
    const { tasks, createTask, updateTask, removeTask, isDoneTask } = useToDoStore()
 
    console.log(tasks)
    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do</h1>
            <section className={styles.articleSection}>
                <InputPlus onAdd={(title) => {
                    if(title) createTask(title)
                }} />
            </section>
            <div className={styles.articleLine}></div>
            <section className={styles.articleSection}>
                {!tasks.length && <p className={styles.articleText}>На сегодня задач еще нет.</p>}
                {tasks.map((task) => {
                    return(
                        <InputTask 
                            key={task.id}
                            title={task.title}
                            id={task.id}
                            isDone={task.isDone}
                            onDone={isDoneTask}
                            onEdited={updateTask}
                            onRemoved={removeTask}
                        />
                    )
                })}
            </section>
        </article>
    )
}

export default App