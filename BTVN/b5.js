const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 25",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 4 - 3",
    "Alisson - Goalkeeper - 0 - 1"
];

const reportTopPerformers = (minPerformance,list) => {
    const topPlayer = list.map(scores =>{
        const item = scores.split(" - ");
        const total = Number(item[2]) + Number(item[3]);
        return {name: item[0],total};
    })
    .filter(scores => scores.total >= minPerformance);

    topPlayer.forEach(scores =>{
        console.log(`${scores.name} : ${scores.total}`);
        
    });
    const totalGoals = topPlayer.reduce((sum,scores) => sum + scores.total,0);

    console.log("Tổng hiệu suất:",totalGoals);
    return totalGoals;
};
