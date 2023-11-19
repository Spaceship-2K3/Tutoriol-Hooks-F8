import { useState, memo } from "react";
import Content from "./Content";
// ! Trường hợp sử dụng khi mỗi khi state mà nó render lại mà k cần những cái state đó
function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };
    const increase2 = () => {
        setCount2(count2 + 1);
    };

    return (
        <div style={{ padding: "10px 20px" }}>
            <Content count={count} />
            {/* state cha mới sử dụng mà không phải ở component con, nhưng componenet con vẫn re-render */}
            <h1>{count}</h1>
            <button onClick={increase}>Click me!</button>
            <h1>{count2}</h1>
            <button onClick={increase2}>Click me2!</button>
        </div>
    );
}
export default App;
