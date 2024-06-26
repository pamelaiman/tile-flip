import { useState } from "react";

export default function Box(props) {
    const [isFilled, setIsFilled] = useState(props.on);

    function flip() {
        setIsFilled(!isFilled);
    }
    const styles = {
        backgroundColor: isFilled ? "#222222" : "transparent",
    };

    return <div onClick={flip} style={styles} className="box"></div>;
}
