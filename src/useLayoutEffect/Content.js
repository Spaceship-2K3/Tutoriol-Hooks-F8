import { useState, useEffect, useLayoutEffect } from "react";
// ! useEffect
/**
⁡⁢⁣⁣ * 1. Cập nhật lại state
 * 2. Cập nhật DOM(mutated)
 * 3. Re-render lại UI
 * 4. Gọi cleanup nếu deps thay đổi
 * 5. Gọi useEffect callback⁡
 */

// ! useLayoutEffect -> hi hữu
/**
⁡⁢⁣⁣ * 1. Cập nhật lại state
 * 2. Cập nhật DOM(mutated)
 * 3. Gọi cleanup nếu deps thay đổi(sync)
 * 4. Gọi useLayoutEffect callback(sync)
 * 5. Render lại UI⁡
 */

// todo : tạo 1 cái nút khi đến 1 số cố định sẽ lăp lại trạng thái ban đầu
function Content() {
    const [count, setCount] = useState(0);

    // todo : C1 sẽ bị chớp chớp, do khi re-render lại rồi ms cập nhật DOM
    /* useEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count]);*/

    // todo : C2 : useLayoutEffect
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count]);

    const handleRun = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run </button>
        </div>
    );
}

export default Content;
