import { useState, useEffect } from "react";
/**
 * ! Cần kiến thức tối thiểu
⁡⁢⁣⁣ *      - Events : Add / remove event listener
 *      - Observer pattern : Subscribe / unsubscribe
 *      - Closure
 *      - Timer : setInterval , setTimeout, clearTimeOut, clearInterval
 *      - Mounted / Unmounted
 *      - ===
 *      - Call API⁡⁡
 */

/**
 * ! Side effects
⁡⁢⁣⁣ *      1. Update DOM : - update F8 blog
 *      2. Call API
 *      3. Listener DOM Event : scroll, resize
 *      4. Cleanup : Remove listener / Unsubscribe, Clear timer⁡
 */

/**
 ⁡⁢⁣⁣* 1. useEffect(callback)
    - Gọi callback mỗi khi component re-render
 * 2. useEffect(callback , [])
 * 3. useEffect(callback, [deps])⁡
 */

// ************************************
// ⁡⁢⁣⁡⁢⁣⁣1. Callback luôn được gọi sau khi component mounted⁡
// ⁡⁢⁣⁣2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback( trừ lần mounted)⁡

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
