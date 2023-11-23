import { useState, useReducer, useRef } from "react";
import TodoApp from "./Todo";
// todo : them 1 su lua chon de dung useState, bat cu bai toan nao useState
// giai quyet duoc thi useReducer cx giai quyet duoc va nguoc lai
// Trong hau het sd useState cho cac component don gian string number boolean array k long nhieu cap
// Trong  useReducer cho cac component phuc tap array, object

// ! useState
// 1. Init state : 0
// 2. Actions : Up(state + 1), down(state - 1)

// ! useReducer
// 1. Init state : 0
// 2. Actions : Up(state + 1), down(state - 1)
// 3. Reducer
// 4. Dispatch

// todo : Init state
const initState = 0;

// todo : Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// todo : Reducer : hàm , nhưng lần đầu k có gọi
const reducer = (state, action) => {
    console.log("reducer running...");
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error("Invalid action");
    }
};

// todo : Ung dung dem so tang dan giam dan
/*
function App() {
    // count chinh gia initialValue
    // dispatch la 1 ham, 1 hanh dong giup 1 action dc kich hoat
    // ban dau initState chinh la state nen bang 0
    // khi nhan thi dispatch se goi reducer va thuc hien action
    const [count, dispatch] = useReducer(reducer, initState);

    return (
        <div style={{ padding: 40 }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        </div>
    );
}*/

// todo : TODO
function App() {
    return <TodoApp />;
}

export default App;
