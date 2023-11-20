import { useState, memo, useMemo, useRef } from "react";

/**
⁡⁢⁣⁣ * -    memo : + Higher order component, ôm react component
 *             + Tránh re-render các thành phần không cần thiết 
 * -    useMemo : + hooks, viết trong phần thân của 1 component
 *                + Tránh thực hiện lại 1 logic nào đó không cần thiết  ⁡
 */
function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([
            ...products,
            {
                name,
                price: parseInt(price),
            },
        ]);
        // todo : khi add xog xoa dua lieu hien thi tren input
        setName("");
        setPrice("");
        nameRef.current.focus();
    };

    /**
     * Khi input nhap vao thi no lai tinh lai total , khong can thiet
     */
    const total = useMemo(() => {
        const result = products.reduce((tol, prod) => {
            return tol + prod.price;
        }, 0);

        return result;
    }, []);

    return (
        <div style={{ padding: "20px 32px" }}>
            <input
                type="email"
                ref={nameRef}
                value={name}
                placeholder="Enter name ..."
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="text"
                value={price}
                placeholder="Enter price ..."
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total : {total}
            <ul>
                {products.map((product, index) => {
                    return (
                        <li key={index}>
                            {product.name} - {product.price}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
