const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test de la clase FizzbuzzService", () => {
    test("Requerimiento 1: Score diferente de múltiplos de 3 y 5", () => {
        const explorer = {name: "Explorer1", score: 1};
        const UpdatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(UpdatedExplorer.trick).toBe(explorer.score);
    });

    test("Requerimiento 2: Score múltiplo de 3, pero no de 5", () => {
        const explorer = {name: "Explorer2", score: 33};
        const UpdatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(UpdatedExplorer.trick).toBe("FIZZ");
    });

    test("Requerimiento 3: Score múltiplo de 5, pero no de 3", () => {
        const explorer = {name: "Explorer3", score: 25};
        const UpdatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(UpdatedExplorer.trick).toBe("BUZZ");
    });

    test("Requerimiento 4: Score múltible de 5 y 3", () => {
        const explorer = {name: "Explorer4", score: 45};
        const UpdatedExplorer = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(UpdatedExplorer.trick).toBe("FIZZBUZZ");
    });
});