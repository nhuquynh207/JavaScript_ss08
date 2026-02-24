const squad = [

    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];

do {
    let choice = +prompt(`
    --- QUẢN LÝ ĐỘI BÓNG ---

    1. Xem danh sách
    2. Tìm kiếm (Find)
    3. Lọc vị trí (Filter)
    4. Tổng bàn thắng (Reduce)
    5. Kiểm tra hiệu suất (Some/Every)
    0. Thoát

    Nhập lựa chọn của bạn:
        `);
    switch (choice) {
        case 1:
            const displayPlayer = (listPlayer) => {
                listPlayer.forEach(player => {
                    console.log(`${player[0]} (${player[2]}): ${player[1]} bàn thắng`);
                    
                });
            }
            displayPlayer(squad);
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 0:
            
            break;
    
        default:
            break;
    }

} while (choice!==0);


