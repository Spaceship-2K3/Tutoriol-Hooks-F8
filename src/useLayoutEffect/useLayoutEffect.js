import { useLayoutEffect, useState } from "react";

// ! useEffect
/**
⁡⁢⁣⁣ * 1. Cập nhật lại state
 * 2. Cập nhật DOM(mutated)
 * 3. Re-render lại UI
 * 4. Gọi cleanup nếu deps thay đổi
 * 5. Gọi useEffect callback⁡
 */

// ! useLayoutEffect
/**
⁡⁢⁣⁣ * 1. Cập nhật lại state
 * 2. Cập nhật DOM(mutated)
 * 3. Gọi cleanup nếu deps thay đổi(sync)
 * 4. Gọi useLayoutEffect callback(sync)
 * 5. Render lại UI⁡
 */
import Content from "./Content";
function App() {
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding: 20 }}>
            {show && <Content />}
            <button onClick={() => setShow(!show)}>
                {show === true ? "Hidden" : "Show"} !
            </button>
        </div>
    );
}
export default App;
