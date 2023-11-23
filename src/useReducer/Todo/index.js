import { useState, useReducer, useRef } from "react";
import reducer2 from "./reducer";
import { initState2 } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";
/*
// todo : Todo
// ⁡⁢⁣⁣1.⁡ ⁡⁢⁣⁣init state : input ng dung nhap vao, danh sach cac viec⁡
const initState2 = {
    job: "",
    jobs: [],
};

//⁡⁢⁣⁣ 2. Actions ⁡
const SET_JOB = "set_job"; // set khi nhan vao input
const ADD_JOB = "add_job"; // nhan nut add them vao state ben duoi
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};
const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};
const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

// ⁡⁢⁣⁣3. Reducer⁡
const reducer2 = (state, action) => {
    console.log("Action : ", action);
    console.log("Prev state :", state);
    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload,
            };
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);
            newState = {
                ...state,
                jobs: newJobs,
            };
            break;
        default:
            throw new Error("Invalid Action");
    }
    console.log("New state : ", newState);
    return newState;
};
// ⁡⁢⁣⁣4. Dispatch⁡
function App() {
    const [state, dispatch] = useReducer(reducer2, initState2);
    const { job, jobs } = state;
    const inputRef = useRef();
    const handleSubmid = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };
    return (
        <div style={{ padding: 40 }}>
            <h1>TODO</h1>
            <input
                type="text "
                ref={inputRef}
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                placeholder="Enter todo..."
            />
            <button onClick={handleSubmid}>ADD</button>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>
                            {job}
                            <button
                                style={{ marginLeft: 18 }}
                                onClick={() => dispatch(deleteJob(index))}
                            >
                                {" "}
                                x
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

*/

function TodoApp() {
    const [state, dispatch] = useReducer(logger(reducer2), initState2);
    const { job, jobs } = state;
    const inputRef = useRef();
    const handleSubmid = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };
    return (
        <div style={{ padding: 40 }}>
            <h1>TODO</h1>
            <input
                type="text "
                ref={inputRef}
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                placeholder="Enter todo..."
            />
            <button onClick={handleSubmid}>ADD</button>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>
                            {job}
                            <button
                                style={{ marginLeft: 18 }}
                                onClick={() => dispatch(deleteJob(index))}
                            >
                                {" "}
                                x
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoApp;
