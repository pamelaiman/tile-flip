import Boxes from "./Boxes";
import Box from "./Box";
import { useState } from "react";
import "./style.css";

export default function App() {
    const [squares, setSquares] = useState(Boxes);

    const squareElements = squares.map((square) => (
        <Box key={square.id} on={square.on} />
    ));

    return <main>{squareElements}</main>;
}
