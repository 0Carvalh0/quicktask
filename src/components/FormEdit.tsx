import { FaPenToSquare , FaXmark } from "react-icons/fa6";

function FormEdit() {
    return (
        <form className="todoapp__form todoapp__form--edit" id="edit-form">
            <div className="todoapp__input-container">
                <input
                    type="text"
                    name="itask"
                    placeholder="Edite a sua tarefa:"
                    className="todoapp__input todoapp__input--edit"
                    id="todoapp-editTask"
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
            >
                <FaXmark />Cancelar
            </button>
        </form>
    );
}

export default FormEdit;
