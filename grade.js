const DSdiem = [];

function quyDoiDiem(diem) {
    if (diem >= 8.5)
        return 4;
    else if (diem >= 8)
        return 3.5;
    else if (diem >= 7)
        return 3;
    else if (diem >= 6.5)
        return 2.5;
    else if (diem >= 5.5)
        return 2;
    else if (diem >= 5)
        return 1.5;
    else if (diem >= 4)
        return 1;
    else
        return 0;
};
function quyDoiDH(diem) {
    if (diem >= 3.6) 
        return '<strong>XUẤT SẮC</strong><br>Chúc mừng bạn!<br>Giữ vững phong độ nhé!';
    else if (diem >= 3.2)
        return '<strong>GIỎI</strong><br>Cố chút nữa là được xuất sắc rồi!<br>Cố gắng hơn nhé!';
    else if (diem >= 2.5)
        return '<strong>KHÁ</strong><br>Bạn cần phải lỗ lực nhiều hơn nhé!';
    else if (diem >= 2)
        return '<strong>TRUNG BÌNH</strong><br>Điểm thật đáng báo động!<br>Bạn cần phải lỗ lực rất nhiều đấy nhé!';
    else if (diem >= 1.0)
        return '<strong>YẾU</strong><br>Bạn không tính học nữa à!<br>Nếu không phải xem lại cách học của mình nhé';
    else    
        return '<strong>KÉM</strong><br>Thôi!<br>Hết cứu!';
}
function addDiem() {
    const tenMon = document.querySelector('.ten-mon').value;
    const tinMon = Number(document.querySelector('.tin-mon').value);
    const diemMonHe10 = Number(document.querySelector('.diem-mon').value);
    const diemMonHe4 = quyDoiDiem(diemMonHe10);
    
    DSdiem.push({
        tenMon,
        tinMon,
        diemMonHe10,
        diemMonHe4,
    });
    document.querySelector('.ten-mon').value = '';
    document.querySelector('.tin-mon').value = '';
    document.querySelector('.diem-mon').value = '';
};

function outPut() {
    let outPutHTML = '';
    DSdiem.forEach((item,i) => {
        outPutHTML += `
            <p class="output-ten-mon">${i+1}. ${item.tenMon}</p>
            <p class="output-tin-mon space">${item.tinMon}</p>
            <p class="output-diem-mon space">${item.diemMonHe10}</p>
            <button class="button-xoa" onclick="DSdiem.splice(${i},1); outPut();">Xóa</button>
        `;
    });
    document.querySelector('.output').innerHTML = outPutHTML;
};

function total() {
    let diemHe10, diemHe4, tongSoTin = 0;
    let tongHe10 = 0, tongHe4 = 0;
    DSdiem.forEach((item) => {
        tongSoTin += item.tinMon;
        tongHe10 += item.tinMon * item.diemMonHe10;
        tongHe4 += item.tinMon * item.diemMonHe4;
    })
    console.log(tongSoTin);
    diemHe10 = Math.round((tongHe10/tongSoTin)*100)/100;
    diemHe4 = Math.round((tongHe4/tongSoTin)*100)/100;;
    if (diemHe10 <= 10 && diemHe10 >= 0 && diemHe4 <= 4 && diemHe4 >= 0) {
        document.querySelector('.total-output').innerHTML = `Điểm trung bình học kì hệ 10: <strong>${diemHe10.toFixed(2)}</strong><br>Điểm trung bình học kì hệ  4 : <strong>${diemHe4.toFixed(2)}</strong><br>Xếp loại học lực học kì của bạn là:<br>` + quyDoiDH(diemHe4);
    }
    else {
        document.querySelector('.total-output').innerHTML = 'Đã có lỗi! Bạn hãy xem lại điểm nhập vào và chỉnh sửa cho chính xác';
    }
};

document.querySelector('.refresh').addEventListener('click',() => {
    DSdiem.splice(0,DSdiem.length);
    outPut();
    document.querySelector('.total-output').innerHTML = '';
})