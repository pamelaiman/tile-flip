import Boxes from "./Boxes";
import Box from "./Box";
import { useState } from "react";
import "./style.css";

export default function App() {
    const [squares, setSquares] = useState(Boxes);

    const squareElements = squares.map((square) => (
        <Box
            key={square.id}
            on={square.on}
            emoji={square.emoji}
            spanishword={square.spanishword}
        />
    ));

    return (
        <main>
            <h1>Flip the card!</h1>
            {squareElements}
        </main>
    );
}
