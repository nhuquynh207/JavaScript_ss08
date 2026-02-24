const players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfielder - 8",
    "Kante - Midfielder - 2",
    "Van Dijk - Defender - 4",
    "Alisson - Goalkeeper - 0"
];

const getReversedNames = (list) =>{
    const onlyName=list.map(player => {
        return player.split(" - ")[0];
    });

    return onlyName.reverse();
};

let newArray=getReversedNames(players);
console.log(newArray);
