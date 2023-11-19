import { useRef, useState, useEffect } from "react";

// ⁡⁣⁣⁢Lưu các giá trị qua một tham chiếu bên ngoài⁡
// ⁡⁣⁣⁢function component
/*
function App() {
    const [count, setCount] = useState(60);
    // Luon tra ve obj
    let timerID = useRef(); // ! sử dụng useRef <=> bê ra bên ngoài hàm App

    // !Luôn trả về obj
    //   const ref = useRef(99);
    // console.log(ref.current);
    // ref.current = 20; 

    const handleStart = () => {
        // todo : do mỗi hàm khi chạy sẽ tạo ra 1 phạm vi của riêng nó
        timerID.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
        console.log("Start ->", timerID.current);
    };

    const handleStop = () => {
        clearInterval(timerID.current);
        console.log("Stop ->", timerID.current);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}*/

// ! Biết giá trị trước đó của State và giá trị hiện tại của State
function App() {
    const [count, setCount] = useState(60);
    // ! Có thể sử dụng để lưu dom element
    const timerID = useRef(); // ! sử dụng useRef <=> bê ra bên ngoài hàm App
    const prevCount = useRef();

    const handleStart = () => {
        // todo : do mỗi hàm khi chạy sẽ tạo ra 1 phạm vi của riêng nó
        timerID.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);
        console.log("Start ->", timerID.current);
    };

    const handleStop = () => {
        clearInterval(timerID.current);
        console.log("Stop ->", timerID.current);
    };

    console.log(count, prevCount.current);

    // todo : lấy h1 element
    const h1Ref = useRef();
    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    useEffect(() => {
        // console.log(h1Ref.current);
        // todo : ung dung lay ra cac toa do
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}
export default App;
