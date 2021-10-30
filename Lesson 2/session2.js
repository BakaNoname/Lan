var luong_ve = true;
var nhan_vien_ngan_hang = false;
var ly_do_cong_ty = true;
if (luong_ve === true) {
    if (nhan_vien_ngan_hang === true) {
        console.log("Lương chưa về - đéo vui được");
    } else {
        console.log("Lương đã về - vui vãi");
    }
} else {
    if (ly_do_cong_ty === true) {
        console.log("Vẫn vui - lương sắp về");
    } else {
        console.log("Lương chưa về");
    }
}