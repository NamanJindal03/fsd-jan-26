import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomCounterValue = createAsyncThunk(
    "counter/fetchRandomCounterValue",
    async() => {
        const randomTodo = Math.ceil(Math.random() * 100);

        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomTodo}`)

        const data = await response.json();
        return data.id;
    }
)