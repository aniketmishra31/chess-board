import Tile from "../Tile/Tile";
import "./Chessboard.css";
const Chessboard: React.FC = () => {
    const rows = [1, 2, 3, 4, 5, 6, 7, 8];
    const coloumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let board = [];
    for (let i = rows.length - 1; i >= 0; i--) {
        for (let j = 0; j < coloumns.length; j++) {
            board.push(<Tile key={`${j},${i}`} i={i} j={j} />)
        }
    }
    return (
        <>
            <div className="board">{board} </div>
        </>
    );
}

export default Chessboard;