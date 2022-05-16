class ExplorerService{
    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission === mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const ExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return ExplorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const ExplorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return ExplorersByMission.map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;