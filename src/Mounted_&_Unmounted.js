// ! Mounted / Unmounted

/**
 *   ⁡⁢⁣⁣Khi gắn vào gọi là ⁡⁢⁣⁣mounted, từ cái thời điểm đưa vào sử dụn⁡⁢⁣⁣g hoặc thậm chí hàm App đã sử dụng⁡
 *  ⁡⁢⁣⁣ Khi đang nằm trong DOM thao ra gọi là unmounted⁡⁢⁣⁣, khi gỡ ra khỏi reactElement⁡
 */
import Content from "./Content";
import { useState } from "react";
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
