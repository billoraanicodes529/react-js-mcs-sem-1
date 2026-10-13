import { useEffect } from "react";

function MountMessageLog () {
    useEffect(() => {
        console.log("Component Mounted!");
    }, []);

    return (
        <div>
            <h1>Check The Console For A Message When This Component Mounts.</h1>
        </div>
    )
}

export default MountMessageLog;