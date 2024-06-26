import { useState } from "react";

export default function Box(props) {
    const [showWord, setShowWord] = useState(props.on);

    function flipCard() {
        setShowWord(!showWord);
    }

    return (
        <div onClick={flipCard} className="box">
            {showWord ? (
                <div className="Word">{props.word}</div>
            ) : (
                <div className="Emoji">{props.emoji}</div>
            )}
        </div>
    );
}
