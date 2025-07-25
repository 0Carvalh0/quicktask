import { FaCheck, FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

interface Props {
    task: {
        taskTitle: string;
        isChecked: boolean;
    };
    index: number;
    onCheck: () => void;
    onDelete: () => void;
    onEdit: () => void;
}

function Task({ task, onCheck, onDelete, onEdit }: Props) {
    return (
        <li className="todoapp__task">
            <div className="task-LeftSide" onClick={onCheck}>
                {task.isChecked ? (
                    <span className="todoapp__task-check">
                        <FaCheck />
                    </span>
                ) : (
                    <span className="todoapp__task-check"></span>
                )}
                <p
                    className={`todoapp__task-name ${
                        task.isChecked ? "done" : ""
                    }`}
                >
                    {task.taskTitle}
                </p>
            </div>
            <div className="task-RightSide">
                <button
                    type="button"
                    className="todoapp__button todoapp__button--editTask"
                    onClick={onEdit}
                >
                    <FaPenToSquare />
                </button>
                <button
                    type="button"
                    className="todoapp__button todoapp__button--removeTask"
                    onClick={onDelete}
                >
                    <FaTrash />
                </button>
            </div>
        </li>
    );
}

export default Task;
