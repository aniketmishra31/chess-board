import React from "react";
import "./Tile.css";
import blackPawn from "../../assets/images/blackPawn.png";
import whitePawn from "../../assets/images/whitePawn.png";
import blackBishop from "../../assets/images/black-bishop.png";
import whiteBishop from "../../assets/images/white-bishop.png";
import blackKnight from "../../assets/images/black-knight.png";
import whiteKnight from "../../assets/images/white-knight.png";
import blackRook from "../../assets/images/black-rook.png";
import whiteRook from "../../assets/images/white-rook.png";
import blackQueen from "../../assets/images/black-queen.png";
import whiteQueen from "../../assets/images/white-queen.png";
import blackKing from "../../assets/images/black-king.png";
import whiteKing from "../../assets/images/white-king.png";


interface TileProps {
    i: number;
    j: number;
}

const Tile: React.FC<TileProps> = (props) => {
    const x = props.i;
    const y = props.j;
    const num = x + y + 2;
    const getPiece = (x: number, y: number) => {
        if (x + 1 === 7) {
            return blackPawn;
        }
        if (x + 1 === 2) {
            return whitePawn;
        }
        if (x === 0 && (y === 0 || y === 7)) {
            return whiteRook;
        }
        if (x === 7 && (y === 0 || y === 7)) {
            return blackRook;
        }
        if (x === 0 && (y === 1 || y === 6)) {
            return whiteKnight;
        }
        if (x === 7 && (y === 1 || y === 6)) {
            return blackKnight;
        }
        if (x === 0 && (y === 2 || y === 5)) {
            return whiteBishop;
        }
        if (x === 7 && (y === 2 || y === 5)) {
            return blackBishop;
        }
        if (x === 0 && y === 3) {
            return whiteQueen;
        }
        if (x === 7 && y === 3) {
            return blackQueen;
        }
        if (x === 0 && y === 4) {
            return whiteKing;
        }
        if (x === 7 && y === 4) {
            return blackKing;
        }
        return "";
    }
    return (
        <>
            {num % 2 === 0 &&
                <div className="tile light">
                    {getPiece(x, y) && <img src={getPiece(x, y)} />}
                </div>
            }
            {num % 2 !== 0 &&
                <div className="tile dark">
                    {getPiece(x, y) && <img src={getPiece(x, y)} />}
                </div>
            }
        </>
    );
}

export default Tile;