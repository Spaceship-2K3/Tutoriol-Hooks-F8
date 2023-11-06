import { useState, useEffect } from "react";

// ! TH1 :
/** 
⁡⁣⁣⁢    ⁡⁢⁣⁣1. useEffect(callback)
        - Gọi callback mỗi khi component re-render
        - Gọi callback sau khi component thêm element vào DOM⁡⁡
*/
/*function Content() {
    const [title, setTitle] = useState("");
    useEffect(() => {
        console.log("Mounted");
        console.log("render : ", title);
        document.title = title;
    });

    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            {console.log("render")}
        </div>
    );
}*/
// ! TH2 : callAPI
/**
 * ⁡⁢⁣⁣2. useEffect(callback , [])
 *  - Chỉ gọi callback 1 lần sau khi component mounted⁡
 */
/*function Content() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>;
                })}
            </ul>
        </div>
    );
}*/

// ! TH3 :
/**
 * ⁡⁢⁣⁣ useEffect(callback, [deps]
 *      - deps có thể là biến từ prop truyền vào chứa dữ liệu
 *      - Callback sẽ  được gọi lại mỗi khi deps thay đổi  ⁡
 */
const tabs = ["posts", "comments", "albums"];
/*function Content() {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [type]);

    return (
        <div>
            {tabs.map((tab, index) => {
                return (
                    <button
                        key={index}
                        style={
                            type === tab
                                ? {
                                      color: "#fff",
                                      background: "#222",
                                  }
                                : {}
                        }
                        onClick={() => {
                            setType(tab);
                        }}
                    >
                        {tab}
                    </button>
                );
            })}

            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title || post.name}</li>;
                })}
            </ul>
        </div>
    );
}*/

// ! useEffect with DOM events : scroll
/*function Content() {
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            });
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
            // setShowGoToTop(window.scrollY >= 200)
        };
        // ⁡⁢⁣⁣neu khong co ham cleanup thi van chua bi unmounted, do van listen o pham vi window, chi bien mat khi xoa trang⁡ =>⁡⁢⁣⁢ memory leak⁡
        window.addEventListener("scroll", handleScroll);

        // ! cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            {tabs.map((tab, index) => {
                return (
                    <button
                        key={index}
                        style={
                            type === tab
                                ? {
                                      color: "#fff",
                                      background: "#222",
                                  }
                                : {}
                        }
                        onClick={() => {
                            setType(tab);
                        }}
                    >
                        {tab}
                    </button>
                );
            })}

            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title || post.name}</li>;
                })}
            </ul>
            {showGoToTop && (
                <button
                    style={{
                        position: "fixed",
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go On Top
                </button>
            )}
        </div>
    );
}*/

//  ! useEffect with DOM events : resize
/*function Content() {
    const [width, setWidth] = useState(window.innerWidth);
    useState(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div>
            <h1>{width}</h1>
        </div>
    );
}*/

// ! useEffect() with countdown functions
/*function Content() {
    const [countdown, setCountdown] = useState(180);
    // todo : C1
    useEffect(() => {
        let timer = setInterval(() => {
            setCountdown((prevState) => prevState - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    // todo : C2
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown - 1);
    //     }, 1000);
    // }, [countdown]);
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    );
}*/

// ! Cleanup func => tranh memory leak
// ⁡⁢⁣⁣3. Cleanup function luôn được gọi trước khi callback( trừ lần mounted)⁡
/*function Content() {
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log(`Mounted or Re-render lan : ${count}`);

        return () => {
            console.log(`"cleanup" lan : ${count}`);
        };
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click me!
            </button>
        </div>
    );
}
*/

// ! useEffect() with preview avatar
// todo :  cho phép chọn ảnh đại diện, và khi chọn ảnh xog in luôn lên màn
/*function Content() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        // todo : cleanup
        return () => {
            // revokeObjectURL : xoa url khoi vung nho
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    };

    return (
        <div>
            <input
                type="file"
                // multiple thuoc tinh nay cho phep chon nhieu anh, k co chi chon 1 anh
                onChange={handlePreviewAvatar}
            />
            {avatar && <img src={avatar.preview} alt=" " width="80%" />}
        </div>
    );
}*/
// ! useEffect() with fake Chat App
const lessons = [
    { id: 1, name: "html & css" },
    { id: 2, name: "reactJS & JS" },
    { id: 3, name: "NodeJs & MongoDB" },
];
function Content() {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        };

        window.addEventListener(`lesson-${lessonId}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    }, [lessonId]);
    return (
        <div>
            <ul>
                {lessons.map((lesson) => {
                    return (
                        <li
                            key={lesson.id}
                            style={{
                                color: lessonId === lesson.id ? "red" : "#333",
                            }}
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Content;
