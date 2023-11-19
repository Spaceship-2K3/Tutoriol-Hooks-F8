import { useState, memo } from "react";

// 1. memo() -> Higher Order Component(HOC)
// 2. useCallback

// Trong react có 3 khái niệm hay sử  dụng⁡

function Content({ count }) {
    console.log("re-render");
    return (
        <div style={{ padding: "10px 20px" }}>
            <h1> hello {count}</h1>
        </div>
    );
}

/**
⁡⁢⁣⁣ * Nhận và component và check các prop của  component sau khi thay đổi,
 * nếu có prop nào thay đổi thì nó sẽ re-render , không thì thôi⁡
 */
export default memo(Content);
