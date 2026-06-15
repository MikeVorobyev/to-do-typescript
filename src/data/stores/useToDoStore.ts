import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { generateId } from '../helper'

interface Task {
    id: string
    title: string
    isDone: boolean
    createdAt: number // Время создания задачи
}

interface ToDoStore {
    tasks: Task[]
    createTask: (title: string) => void
    updateTask: (title: string, id: string) => void
    removeTask: (id: string) => void
    isDoneTask: (id: string) => void
}

const useToDoStore = create<ToDoStore>()(persist(set => ({
    tasks: [],
    createTask: (title) => {
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now(),
            isDone: false
        }

        set((state) => ({
            tasks: [newTask, ...state.tasks]
        }))
    },
    updateTask: (title, id) => {
        set((state) => ({
            tasks: state.tasks.map((task) => ({
                ...task, 
                title: id === task.id ? title : task.title 
            }))
        }))
    },
    removeTask: (id) => {
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
        }))
    },
    isDoneTask: (id) => {
        set((state) => ({
            tasks: state.tasks.map((task) => ({
                ...task,
                isDone: id === task.id ? !task.isDone : task.isDone
            }))
        }))
    }
}), 
{           
            name: 'todo-storage',
            storage: createJSONStorage(() => localStorage)
        }
))

export default useToDoStore