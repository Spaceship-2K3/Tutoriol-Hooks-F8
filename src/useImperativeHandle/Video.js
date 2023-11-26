import video from "./Video/video.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";
function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));
    return (
        <video
            src={video}
            ref={videoRef}
            width={280}
            // controls
        />
    );
}

/**
 * forward tu ben tren qua HOC di xuong
 * De nhan 1 component tu ben ngoai
 */

export default forwardRef(Video);
