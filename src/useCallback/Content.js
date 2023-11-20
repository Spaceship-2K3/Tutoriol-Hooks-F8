import { Fragment, memo, useState } from "react";

function Content({ onIncrease }) {
    console.log("re-render");
    return (
        <div>
            <Fragment>
                <button onClick={onIncrease}>Click me!</button>
            </Fragment>
            <h1>Hi AE</h1>
        </div>
    );
}
export default memo(Content);
