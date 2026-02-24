const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 25 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 4 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37"
];

const reportByPosition = (list) =>{
    const topPlayer=list.map(item =>{
        const parts= item.split(" - ");
        return{
            name: parts[0],
            position: parts[1],
            goals:    Number(parts[2]),
            assists:  Number(parts[3]),
            match:    Number(parts[4]),
        };
    });



    console.log(position);
    console.log("Cầu thủ:", group.length);
    console.log("Bàn thắng:", totalGoals);
    console.log("Kiến tạo:", totalAssists);
    console.log("Trận:", totalMatches);
    console.log("TB/trận:", avg);
    console.log("-----------");
    
}
