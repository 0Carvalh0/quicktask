import { FaPlus } from "react-icons/fa";

function FormAdd() {
    return (
        <form className="todoapp__form todoapp__form--add" id="add-form">
            <h1 className="todoapp__title">
                Quick<strong>Task</strong>
            </h1>
            <div className="todoapp__input-container">
                <input
                    type="text"
                    name="itask"
                    placeholder="Adicionar nova tarefa"
                    className="todoapp__input todoapp__input--add"
                    id="todoapp-addTask"
                />
                <button
                    type="submit"
                    className="todoapp__button todoapp__button--add"
                    id="button-Add"
                ><FaPlus /></button>
            </div>
            <ul className="todoapp__tasks-list"></ul>
        </form>
    );
}

export default FormAdd;
