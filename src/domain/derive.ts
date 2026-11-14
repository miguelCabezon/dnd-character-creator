export function abilityModifier(score: number): number {
    return Math.floor((score - 10) / 2);
};

export function deriveSheet(draft: CompletedCharacter): CharacterSheet {
    return {
        modifiers: mapValues(draft.abilityScores, abilityModifier),
        hitPointsAtFirstLevel: hitDiceMax(draft.classId) + abilityModifier(draft.abilityScores.constitution),
        // proficiencies, salvacion, iniciativa, velocidad
    }
};

export function 