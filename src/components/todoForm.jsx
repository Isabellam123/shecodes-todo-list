import React from "react";

function TodoForm(props) {
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <input type="Text" placeholder="Enter a Todo" />
        </form>
    );
}

export default TodoForm;

