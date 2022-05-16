const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test de clase ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers con mission node", () => {
        const explorers = -[{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    })
})