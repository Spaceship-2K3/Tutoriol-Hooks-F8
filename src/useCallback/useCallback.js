import Content from "./Content";
import { useCallback, useState } from "react";
/**
 * 1. memo() -> Higher Order Component (HOC)
 * 2. useCallback()
 *      - Reference types
 *      - React memo()
 */
// todo : useCallback tránh tạo ra các hàm mới mà k cần thiết khi re-render, chỉ nên dùng khi có memo, nếu mà k memo giường như vô nghĩa

function App() {
    const [count, setCount] = useState(0);

    /**
     * ! Quy ước :
     *  - Những hàm trưc tiếp xử lý -> handle
     *  - Những prop chờ hành động đó xảy ra -> On
     */

    /**
     * - Khi chạy hàm handleIncrease đc lưu vào bộ nhớ và trả ra tham chiếu
     * cho handleIncrease.
     * - Khi truyền tham chiếu handleIncrease vào prop onIncrease lần 1
     * - Lần thứ 2 trở đi setCount dẫn đến việc re-render lại App , tức là gọi lại
     * App, mà App lại k liên quan gì đến phạm vi trước đó nữa vậy nên nó sẽ thực
     * thi lại code ở trong handleIncrease, do nó lại tạo ra 1 tham chiếu mới
     *
     * - mà memo so sánh === nên những lần tham chiếu khác nhau prop khác nhau
     * nên memo tưởng nhầm sẽ re-render lại
     */

    const handleIncrease = useCallback(() => {
        setCount((preCount) => preCount + 1);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <Content onIncrease={handleIncrease} />
            <h1>{count}</h1>
        </div>
    );
}

export default App;
