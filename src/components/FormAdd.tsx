import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaPlus } from "react-icons/fa";

import TaskElement from "./Task";

interface Task {
    isChecked: boolean;
    taskTitle: string;
}

function FormAdd() {
    const [formInput, setFormInput] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem("arrayTasks");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setTasks(parsed);
                }
            } catch (error) {
                console.error("Erro ao fazer parse do localStorage", error);
            }
        }
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("arrayTasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!formInput.trim()) return;

        const newTask: Task = {
            isChecked: false,
            taskTitle: formInput.trim(),
        };

        if (editIndex !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = {
                ...updatedTasks[editIndex],
                taskTitle: formInput.trim(),
            };
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            setTasks((prev) => [...prev, newTask]);
        }

        setFormInput("");
    }

    function toggleCheck(index: number) {
        const updated = [...tasks];
        updated[index].isChecked = !updated[index].isChecked;
        setTasks(updated);
    }

    function removeTask(index: number) {
        const updated = [...tasks];
        updated.splice(index, 1);
        setTasks(updated);
    }

    function startEdit(task: Task, index: number) {
        navigate("/edit", {
            state: {
                task,
                index,
            },
        });
    }

    return (
        <form
            className="todoapp__form todoapp__form--add"
            id="add-form"
            onSubmit={handleSubmit}
        >
            <h1 className="todoapp__title">
                Quick<strong>Task</strong>
            </h1>
            <div className="todoapp__input-container">
                <input
                    type="text"
                    placeholder="Adicionar nova tarefa"
                    name="itask"
                    className="todoapp__input todoapp__input--add"
                    id="todoapp-addTask"
                    value={formInput}
                    onChange={(e) => setFormInput(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="todoapp__button todoapp__button--add"
                    id="button-Add"
                >
                    <FaPlus />
                </button>
            </div>
            <ul className="todoapp__tasks-list">
                {tasks.map((task, index) => (
                    <TaskElement
                        key={index}
                        task={task}
                        index={index}
                        onCheck={() => toggleCheck(index)}
                        onDelete={() => removeTask(index)}
                        onEdit={() => startEdit(task, index)}
                    />
                ))}
            </ul>
        </form>
    );
}

export default FormAdd;
