
// array estandar 15, 14, 13, 12, 10, 8
// point buy 27 puntos desde 8
// tirada de dados 4d6, descartar el menor, repetir 6 veces y asignar a las habilidades
// manual, el usuario asigna los valores que quiera a las habilidades


type AssignmentMethod = 
    { type: "standard-array" } |
    { type: "point-buy" } |
    { type: "manual"; inputs: number[] } |
    { type: "roll"; rolls: RollResult[] };

type RollResult = {
    dice: [number, number, number, number];
    kept: number
};

// genera puntuaciones a partir de un metodo
function generateScores(method: AssignmentMethod): AbilityScores | null;

// verifica si las puntuaciones son validas en funcion del metodo
function validateScores(method: AssignmentMethod, scores: AbilityScores): boolean;

// calcula el coste de una puntuacion en el point-buy
function pointBuyCost(score: number): number;
