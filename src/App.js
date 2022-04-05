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
                    <li>
                        <p>id:1</p>
                        <p>未着手1</p>
                        <select>
                            <option value="yet" selected>未着手</option>
                            <option value="doing">進行中</option>
                            <option value="done">完了</option>
                        </select>
                        <button class="change-btn">変更</button>
                        <button class="delete-btn">削除</button>
                    </li>
                    <li>
                        <p>id:2</p>
                        <p>未着手2</p>
                        <select>
                            <option value="yet" selected>未着手</option>
                            <option value="doing">進行中</option>
                            <option value="done">完了</option>
                        </select>
                        <button class="change-btn">変更</button>
                        <button class="delete-btn">削除</button>
                    </li>
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
                                    <button class="change-btn">変更</button>
                                    <button class="delete-btn">削除</button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
            <div class="doing-area">
                <p class="area-title">進行中</p>
                <ul>
                    <li>
                        <p>id:3</p>
                        <p>進行中1</p>
                        <select>
                            <option value="yet">未着手</option>
                            <option value="doing" selected>進行中</option>
                            <option value="done">完了</option>
                        </select>
                        <button class="change-btn">変更</button>
                        <button class="delete-btn">削除</button>
                    </li>
                    <li>
                        <p>id:4</p>
                        <p>進行中2</p>
                        <select>
                            <option value="yet">未着手</option>
                            <option value="doing" selected>進行中</option>
                            <option value="done">完了</option>
                        </select>
                        <button class="change-btn">変更</button>
                        <button class="delete-btn">削除</button>
                    </li>
                </ul>
            </div>
            <div class="done-area">
                <p class="area-title">完了</p>
                <ul>
                    <li>
                        <p>id:5</p>
                        <p>完了1</p>
                        <select>
                            <option value="yet">未着手</option>
                            <option value="doing">進行中</option>
                            <option value="done" selected>完了</option>
                        </select>
                        <button class="change-btn">変更</button>
                        <button class="delete-btn">削除</button>
                    </li>
                    <li>
                        <p>id:6</p>
                        <p>完了2</p>
                        <select>
                            <option value="yet">未着手</option>
                            <option value="doing">進行中</option>
                            <option value="done" selected>完了</option>
                        </select>
                        <button class="change-btn">変更</button>
                        <button class="delete-btn">削除</button>
                    </li>
                </ul>
            </div>
            
        </>
    );
};