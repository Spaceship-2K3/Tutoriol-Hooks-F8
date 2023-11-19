import { memo, useState } from "react";

function Content({ onIncrease }) {
    console.log("re-render");
    return (
        <div>
            <>
                <button onClick={onIncrease}>Click me!</button>
            </>
            <h1>Hi AE</h1>
        </div>
    );
}
export default memo(Content);
