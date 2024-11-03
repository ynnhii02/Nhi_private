// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('./asset/img/may1.jpg',
'SuperVit Baby – Công thức đột phá với 21 Vitamin, khoáng chất',
'DESIGNED',
' 295000',
`
SuperVit Baby là sản phẩm bổ sung đa vitamin, đa khoáng chất hoàn chỉnh được thiết kế dành riêng cho trẻ từ 6 tháng tuổi trở lên, giúp bổ sung năng lượng phát triển thể chất; hỗ trợ phát triển xương – răng; tăng cường hệ miễn dịch và hỗ trợ phát triển trí não cho bé`,
'Đặt ngay !')

BestSeller.add('./asset/img/may2.jpg',
'Omega Vit Plus – Tăng cường đề kháng – mắt sáng thông minh',
'DESIGNED',
'245000',
`
Omega Vit Plus là công thức toàn diện chứa Omega 3, EPA, DHA, ALA kết hợp thêm Beta Glucan, Kẽm, vitamin và khoáng chất thiết yếu, hỗ trợ phát triển toàn diện về thể chất và trí tuệ cho trẻ. Sản phẩm dùng được cho trẻ từ 6 tháng tuổi.`,
'Đặt ngay !');


BestSeller.add('./asset/img/may3.jpg',
    'Xịt mũi trẻ em Otosan Nasal Spray Baby',
    'DESIGNED',
    '295000',
    `
    Xịt mũi xoang Otosan baby là xịt thông mũi thảo dược với thành phần tự nhiên từ muối biển 1,1%, CM-Glucan, Đồng Gluconat, chiết xuất nha đam, tinh dầu cam hữu cơ giúp thông mũi, giảm tắc nghẹt, ngứa mũi, viêm mũi nhanh chóng. An toàn cho trẻ nhỏ từ 06 tháng tuổi, phụ nữ có thai & cho con bú.`,
    'Đặt ngay !');
    
BestSeller.add('./asset/img/may4.jpg',
    'Ocean Multi Iron – Sắt và 14 vi chất cho bé từ 3 tháng tuổi',
    'DESIGNED',
    '295000',
    `
    Multi iron chứa sắt Lipofer (sắt dạng bao vi nang giúp tăng khả năng hấp thu lên tới 5 lần so với sắt thông thường), Acid folic thế hệ thứ 4, Lysin, Kẽm cùng 11 vitamin khoáng chất quan trọng khác. Với sự đa dạng hóa thành phần, Ocean Multi Iron giúp tạo ra “tác dụng kép” vừa bổ sung sắt, folate vừa giúp trẻ ăn ngon miệng, gia tăng chuyển hóa, hấp thu tối đa dinh dưỡng.`,
    'Đặt ngay !');
    
BestSeller.add('./asset/img/may5.jpg',
    'Ocean Plus – Omega 3 tinh khiết đậm đặc, tiêu chuẩn IFOS 5 sao',
    'DESIGNED',
    '360000',
    `
Ocean Plus bổ sung Omega 3 tinh khiết, đậm đặc cho đa đối tượng từ 11 tuổi trở lên, cho đôi mắt sáng, khỏe, phát triển trí não, tăng cường sức khỏe tim mạch, xương khớp; hỗ trợ phát triển hệ thần kinh, trí não, thị giác của thai nhi, giảm nguy cơ sinh non, trầm cảm cho bà mẹ sau sinh`,
    'Đặt ngay !');
    
BestSeller.add('./asset/img/may6.jpg',
    'Viên uống tan mỡ bụng Genie Demar87 Cell hàn quốc',
    'DESIGNED',
    '690000',
    `
    ✓ Công thức độc đáo từ thảo dược tự nhiên
✓ Đánh tan mỡ bụng hiệu quả
✓ Tăng cường chuyển hóa
✓ Hỗ trợ giảm cân toàn thân
✓ Không gây tác dụng phụ
✓ Chất lượng đảm bảo, xuất xứ rõ ràng`,
    'Đặt ngay !');
    
BestSeller.add('./asset/img/may7.jpg',
    'Viên uống giảm cân Oz Slim 40 viên chính hãng của Mỹ',
    'DESIGNED',
    '1450000',
    `
✓ Công thức độc quyền từ thảo dược tự nhiên
✓ Tăng cường trao đổi chất, đốt cháy mỡ thừa
✓ Kiểm soát cảm giác thèm ăn hiệu quả
✓ An toàn, không chứa chất kích thích
✓ Hiệu quả rõ rệt sau 4-8 tuần sử dụng
✓ Sản phẩm chính hãng, đạt chuẩn GMP`,
    'Đặt ngay !');

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}
FeatureProduct.add('./asset/img/may4.jpg',
    'Ocean Multi Iron – Sắt và 14 vi chất cho bé từ 3 tháng tuổi',
    'TRADITIONAL',
    '295000',
    `
    Multi iron chứa sắt Lipofer (sắt dạng bao vi nang giúp tăng khả năng hấp thu lên tới 5 lần so với sắt thông thường), Acid folic thế hệ thứ 4, Lysin, Kẽm cùng 11 vitamin khoáng chất quan trọng khác. Với sự đa dạng hóa thành phần, Ocean Multi Iron giúp tạo ra “tác dụng kép” vừa bổ sung sắt, folate vừa giúp trẻ ăn ngon miệng, gia tăng chuyển hóa, hấp thu tối đa dinh dưỡng.`,
    'Đặt ngay !');
    
FeatureProduct.add('./asset/img/may5.jpg',
    'Ocean Plus – Omega 3 tinh khiết đậm đặc, tiêu chuẩn IFOS 5 sao',
    'TRADITIONAL',
    '360000',
    `
Ocean Plus bổ sung Omega 3 tinh khiết, đậm đặc cho đa đối tượng từ 11 tuổi trở lên, cho đôi mắt sáng, khỏe, phát triển trí não, tăng cường sức khỏe tim mạch, xương khớp; hỗ trợ phát triển hệ thần kinh, trí não, thị giác của thai nhi, giảm nguy cơ sinh non, trầm cảm cho bà mẹ sau sinh`,
    'Đặt ngay !');
    
FeatureProduct.add('./asset/img/may6.jpg',
    'Viên uống tan mỡ bụng Genie Demar87 Cell hàn quốc',
    'TRADITIONAL',
    '690000',
    `
    ✓ Công thức độc đáo từ thảo dược tự nhiên
✓ Đánh tan mỡ bụng hiệu quả
✓ Tăng cường chuyển hóa
✓ Hỗ trợ giảm cân toàn thân
✓ Không gây tác dụng phụ
✓ Chất lượng đảm bảo, xuất xứ rõ ràng`,
    'Đặt ngay !');

    FeatureProduct.add('./asset/img/may1.jpg',
        'SuperVit Baby – Công thức đột phá với 21 Vitamin, khoáng chất',
        'TRADITIONAL',
        ' 295000',
        `
        SuperVit Baby là sản phẩm bổ sung đa vitamin, đa khoáng chất hoàn chỉnh được thiết kế dành riêng cho trẻ từ 6 tháng tuổi trở lên, giúp bổ sung năng lượng phát triển thể chất; hỗ trợ phát triển xương – răng; tăng cường hệ miễn dịch và hỗ trợ phát triển trí não cho bé`,
        'Đặt ngay !')
        

localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));