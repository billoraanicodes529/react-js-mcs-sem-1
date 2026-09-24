import { useState } from "react";
import { useEffect } from "react";

function Loading () {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {loading ? ( <h2>Loading...</h2> ) : ( <h2>Welcome! Content Loaded Successfully!</h2> )}
        </div>
    );
}

export default Loading;