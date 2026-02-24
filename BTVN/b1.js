const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];
const displayPlayer = (listPlayer) => {
                listPlayer.forEach(player => {
                    console.log(player);
                });
            }
displayPlayer(players);