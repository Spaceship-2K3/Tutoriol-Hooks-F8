import { useState } from "react";
const orders = [100, 200, 300];

function App() {
    // const [counter, setCounter] = useState(1); // todo : initial với giá trị cụ thể

    /* const [counter, setCounter] = useState(() => {
        // todo : đưa giá trị vào làm giá trị khỏi tạo
        let total = orders.reduce((total, curr) => total + curr);
        return total; // todo : lấy giá trị return làm initial state
    });
    const handleIncrease = () => {
        // setCounter(counter + 1); // todo : --> Giá trị cụ thể counter sẽ chỉ tăng thêm 1, dù có gọi bn lần

        // ! Callback
        setCounter((prevState) => prevState + 1);
    };*/

    const [info, setInfo] = useState({
        name: "Nguyen Van A",
        age: 20,
        address: "Ha Noi, VN",
    });

    // ! : khi update sẽ thay giá trị cũ bằng giá trị mới
    const handleUpdate = () => {
        setInfo({
            // todo : Khắc phục bằng spread
            ...info,
            bio: "Hello react",
        });
    };

    return (
        <div className="App" style={{ padding: 20 }}>
            {/* <h1>{counter}</h1>
            <h2>Dong ho </h2>
            <button onClick={handleIncrease}>Increase</button> */}

            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default App;
