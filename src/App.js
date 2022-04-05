import React from 'react';
import { useState } from 'react';
import "./styles.css";

export const App = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const changeInput = (e) => {
        setTodo(e.target.value);
    };
    const createTask = () => {
        setTodos([
            ...todos, 
            {
                id: new Date(),
                text: todo.trim(),
                states: "yet",
            },
        ]);
        setTodo("");
    };
    const clickChange = (e) => {
        const id = Number(e.target.parentElement.firstElementChild.textContent.substr(3));
        const states = e.target.previousElementSibling.value;
        const changeTodo = todos.map((todo, index) => {
            if (index === id) {
                todo.states = states;
            }
            return todo;
        });
       setTodos(changeTodo);
    };
    const clickDelete = (e) => {
        const id = Number(e.target.parentElement.firstElementChild.textContent.substr(3));
        const removeTodo = todos.filter((todo, index) => index !== id);
        setTodos(removeTodo);
    };

    return (
        <>
            <div class="input-area">
                <h1>Todo List</h1>
                <div class="create-area">
                    <p class="input-title">新規タスク</p>
                    <input 
                        name="todo"
                        type="text"
                        placeholder="Create new todo"
                        value={todo}
                        onChange={changeInput}
                    />
                    <button onClick={createTask}>作成</button>
                </div>
                
            </div>
            <div class="yet-area">
                <p class="area-title">未着手</p>
                <ul>
                    {todos.map((todo, index) => {
                        if (todo.states === "yet") {
                            return (
                                <li key={todo.id}>
                                    <p>ID:{index}</p>
                                    <p>{todo.text}</p>
                                    <select>
                                        <option value="yet" selected>未着手</option>
                                        <option value="doing">進行中</option>
                                        <option value="done">完了</option>
                                    </select>
                                    <button class="change-btn" onClick={clickChange}>変更</button>
                                    <button class="delete-btn" onClick={clickDelete}>削除</button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            <div class="doing-area">
                <p class="area-title">進行中</p>
                <ul>
                    {todos.map((todo, index) => {
                        if (todo.states === "doing") {
                            return (
                                <li key={todo.id}>
                                    <p>ID:{index}</p>
                                    <p>{todo.text}</p>
                                    <select>
                                        <option value="yet">未着手</option>
                                        <option value="doing" selected>進行中</option>
                                        <option value="done">完了</option>
                                    </select>
                                    <button class="change-btn" onClick={clickChange}>変更</button>
                                    <button class="delete-btn" onClick={clickDelete}>削除</button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            <div class="done-area">
                <p class="area-title">完了</p>
                <ul>
                    {todos.map((todo, index) => {
                        if (todo.states === "done") {
                            return (
                                <li key={todo.id}>
                                    <p>ID:{index}</p>
                                    <p>{todo.text}</p>
                                    <select>
                                        <option value="yet">未着手</option>
                                        <option value="doing">進行中</option>
                                        <option value="done" selected>完了</option>
                                    </select>
                                    <button class="change-btn" onClick={clickChange}>変更</button>
                                    <button class="delete-btn" onClick={clickDelete}>削除</button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            
        </>
    );
};