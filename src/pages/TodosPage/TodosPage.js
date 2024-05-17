import React, {useState} from 'react';
import Todo from '../../components/Todo/Todo';

const TodosPage = () => {

    const [todos, setTodos] = useState ( ["todo 1", "todo 2", "todo 3"] )
    return (
        <div>
            {todos.map(todo => <Todo todo={todo}/>)}
        </div>
    );
};

export default TodosPage;