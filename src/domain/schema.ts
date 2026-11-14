import { z } from "zod";

export const abilityScoresSchema = z.object({
    strength: z.number().int().min(1).max(20),
    dexterity: z.number().int().min(1).max(20),
    constitution: z.number().int().min(1).max(20),
    intelligence: z.number().int().min(1).max(20),
    wisdom: z.number().int().min(1).max(20),
    charisma: z.number().int().min(1).max(20),
});

export const characterDraftSchema = z.object({
    id: z.string().uuid(),
    name: z.string().min(1).max(60),
    speciesId: z.string().nullable(), // aún no elejida
    classId: z.string().nullable(), // aún no elejida
    backgroundId: z.string().nullable(), // aún no elejida
    abilityScores: abilityScoresSchema.nullable(), // aún no elejida
    methods: z.enum(["standard-array", "point-buy", "manual", "roll"]),
    skills: z.array(z.string()), // ids de skills entrenadas
    equipment: z.array(z.string()), // ids de items equipados
    languages: z.array(z.string()), // ids de idiomas conocidos
    feats: z.array(z.string()), // ids de feats conocidos
    spells: z.array(z.string()), // ids de spells conocidos

});

export const completedCharacterSchema = characterDraftSchema.extend({
    speciesId: z.string(),
    classId: z.string(),
    backgroundId: z.string(),
    abilityScores: abilityScoresSchema,
});
