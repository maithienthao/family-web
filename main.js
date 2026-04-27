const source = document.getElementById('template').innerHTML
const template = Handlebars.compile(source)
const context = {
    title: 'Nơi lưu giữ những khoảnh khắc của gia đình',
    body: 'Dù ở nơi đâu, vẫn có một nơi để kết nối các thành viên với nhau, cùng chia sẽ những khoảnh khắc trong cuộc sống thường ngày. Hãy cùng nhìn lại những kỷ niệm cùng nhau.',
    image: 'images/background-home.jpg',
    vietnam: [
        {
            image: '../images/vietnam/tet-2026.WebP',
            name: 'Tết 2026',
            description: 'Tuy không đông đủ nhưng cả nhà vẫn vui vẻ với mùa Xuân mới',
        },
        {
            image: '../images/vietnam/tet-2025.WebP',
            name: 'Tết 2025',
            description: 'Tết đoàn viên, cả nhà cùng nhau tham dự lễ Giao thừa và Năm mới',
        },
        {
            image: '../images/vietnam/xua-va-nay.WebP',
            name: 'Xưa và Nay',
            description: 'Mỗi năm tuy thành viên lúc đủ lúc không, nhưng vẫn nhớ về nhau',
        },
        {
            image: '../images/vietnam/lagi-hoa.WebP',
            name: 'Mùa hoa nở',
            description: 'Rực rỡ vàng, đỏ, tím mùa Phục sinh, mai vàng ngày Tết và trái cây quanh năm',
        },
        {
            image: '../images/vietnam/dog.WebP',
            name: '',
            description: 'Và yêu thương dành cho những thành viên nhí',
        },
        {
            image: '../images/vietnam/govap.WebP',
            name: 'Nhà Gò Vấp',
            description: 'Cũng không quên mái nhà Gò Vấp - Hà Đông',
        },
    ],
    nz: [
        {
            image: '../images/nz/nz.Webp',
            name: 'Xưa và Nay',
            description: 'Bốn mùa tại New Zealand',
        },
        {
            image: '../images/nz/cat.WebP',
            name: 'Ginny',
            description: 'Thành viên \'rắc rối\', nhưng đem đến niềm vui cho gia đình'
        },
    ],
    hongkong: [
        {
            name: 'Khám phá Hong Kong',
            description: 'Cùng nhau khám phá những món ăn, địa điểm tại vùng đất mới với vô vàn niềm vui',
        },
        {
            description: 'Và rèn luyện sức khỏe với những chuyến đi leo núi thư giãn cuối tuần',
        },
    ],
}

const compileHtml = template(context)
document.getElementById('information').innerHTML = compileHtml