import { useEffect, useState } from "react";
import { FaPenToSquare, FaXmark } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

function FormEdit() {
    const location = useLocation();
    const navigate = useNavigate();
    const [editInput, setEditInput] = useState("");

    // Recuperar dados da tarefa via state
    const taskData = location.state?.task;
    const taskIndex = location.state?.index;

    useEffect(() => {
        if (!taskData) {
            navigate("/");
            return;
        }
        setEditInput(taskData.taskTitle);
    }, [taskData, navigate]);

    function handleEditSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (typeof taskIndex !== "number" || !taskData) {
            return;
        }

        const stored = localStorage.getItem("arrayTasks");
        if (!stored) return;

        const parsed = JSON.parse(stored);
        parsed[taskIndex] = {
            ...parsed[taskIndex],
            taskTitle: editInput,
        };

        localStorage.setItem("arrayTasks", JSON.stringify(parsed));
        navigate("/");
    }

    return (
        <form
            className="todoapp__form todoapp__form--edit"
            id="edit-form"
            onSubmit={handleEditSubmit}
        >
            <div className="todoapp__input-container">
                <input
                    type="text"
                    name="itask"
                    placeholder="Edite a sua tarefa:"
                    className="todoapp__input todoapp__input--edit"
                    id="todoapp-editTask"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="todoapp__button todoapp__button--edit"
                    id="button-Edit"
                >
                    <FaPenToSquare />
                </button>
            </div>
            <button
                type="button"
                className="todoapp__button todoapp__button--cancel"
                id="button-Cancel"
                onClick={() => navigate("/")}
            >
                <FaXmark /> Cancelar
            </button>
        </form>
    );
}

export default FormEdit;
