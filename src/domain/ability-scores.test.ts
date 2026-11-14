import assert from "node:assert/strict";
import fc from "fast-check";
import test from "node:test";

// arbitrary e un generador de casos: puntuaciones entre 3 y 18
const scoresArb = fc.record({
    strength: fc.integer({ min: 3, max: 18 }),
    dexterity: fc.integer({ min: 3, max: 18 }),
    constitution: fc.integer({ min: 3, max: 18 }),
    intelligence: fc.integer({ min: 3, max: 18 }),
    wisdom: fc.integer({ min: 3, max: 18 }),
    charisma: fc.integer({ min: 3, max: 18 }),
});

test("PROPERTY: point buy nunca debe aceptar un coste superior a 27", () => {
    fc.assert(
        fc.property(scoresArb, (scores) => {
            const total = Object.values(scores).reduce((sum, value) => sum + pointBuyCost(value), 0);
            if (total > 27) {
                assert.equal(validateScores({ type: "point-buy" }, scores), false);
            }
        })
    );
});