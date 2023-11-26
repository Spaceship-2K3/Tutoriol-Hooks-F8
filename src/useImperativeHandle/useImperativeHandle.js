import { useImperativeHandle, useRef } from "react";
import Video from "./Video";

/**
 *  useImperativeHandle: tuy chinh ref cua 1 function component,
 *  do forwardRef dang publish se pha hong tinh chat dong goi
 *  vi vay useImperativeHandle se khac phuc viec do chi cho phep
 *  1 vai method cua component dc su dung
 */

// ! Trinh phat video don gian
function App() {
    const videoRef = useRef(); // videoRef se la 1 obj
    console.log(videoRef);
    const handlePlay = () => {
        videoRef.current.play();
    };
    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>useImperativeHandle</h1>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
}

export default App;
