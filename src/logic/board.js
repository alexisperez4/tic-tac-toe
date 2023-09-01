import { WINNER_COMBOS } from "../constans";

export const chekWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
    // si no hay ganador retorna null
    return null
}
