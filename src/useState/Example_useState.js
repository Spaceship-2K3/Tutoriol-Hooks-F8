import { useState } from "react";
// Response from API
const courses = [
    {
        id: 1,
        name: "HTML, CSS",
    },
    {
        id: 2,
        name: "JS, ReactJS",
    },
    {
        id: 3,
        name: "NodeJS, PHP",
    },
];

// ! Bài 1 : Random gift
/*const gifts = ["CPU i9", "RAM 32GB RGB", "RTX 3090Ti"];
function App() {
    const [gift, setGift] = useState("Chưa có phần thưởng");
    const randomGift = () => {
        const index = gifts[Math.floor(Math.random() * gifts.length)];
        setGift(index);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>{gift}</h1>
            <button onClick={randomGift}>Lấy thưởng </button>
        </div>
    );
}*/

// ! Bài 2 : Two-way binding
// ⁡⁢⁢⁢ReactJS ---> One-Way binding⁡
// ⁡⁢⁢⁢VueJS ---> Two-Way binding⁡
/*function App() {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const handleSubmit = () => {
        // todo : ⁡⁢⁣⁣CALL API⁡
        console.log({
            name,
            email,
        });
    };

    return (
        <div style={{ padding: 20 }}>
            
            <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}*/

// ! handler Radio
/*function App() {
    const [checked, setChecked] = useState(1); // todo : chọn check mặc định là số 1

    const handleRadio = () => {
        // Todo : call api
        console.log({ id: checked });
    };
    return (
        <div style={{ padding: 20 }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checked === course.id}
                        style={{ marginRight: 20 }}
                        onChange={() => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleRadio}>Submit</button>
        </div>
    );
}*/

// ! handler Checkbox
/*function App() {
    const [checked, setChecked] = useState([]);
    const handleCheckbox = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                // todo : Uncheck
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    const handleSubmit = () => {
        console.log({ id: checked });
    };

    return (
        <div style={{ padding: 20 }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        style={{ marginRight: 20 }}
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheckbox(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}*/

// ! Bài 3 : Todo List
function App() {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs")) ?? [];
        return storageJobs;
    });
    const handleSubmit = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];

            // todo : save to local storage
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonJobs);
            return newJobs;
        });
        setJob("");
    };

    const removeJob = (job) => {
        setJobs(() => {
            const newJobs = jobs.filter((item) => {
                return item !== job;
            });
            localStorage.setItem("jobs", JSON.stringify(newJobs));
            return newJobs;
        });
    };

    return (
        <div style={{ padding: 20 }}>
            <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button style={{ marginLeft: 10 }} onClick={handleSubmit}>
                Add{" "}
            </button>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>
                            {job}
                            <button
                                onClick={() => {
                                    removeJob(job);
                                }}
                                style={{ marginLeft: 10 }}
                            >
                                Remove
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
