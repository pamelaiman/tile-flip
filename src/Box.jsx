import { useState } from "react";

export default function Box(props) {
    const [showWord, setShowWord] = useState(props.on);

    function flipCard() {
        setShowWord(!showWord);
    }

    return (
        <div onClick={flipCard} className="box">
            {showWord ? (
                <div className="Emoji">{props.emoji}</div>
            ) : (
                <div className="SpanishWord">{props.spanishword}</div>
            )}
        </div>
    );
}
