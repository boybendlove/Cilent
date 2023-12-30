import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './hanoi.css'

function Hanoi() {
    const phonganh = { width: '100%', height: '50%' }
    const dulichhanoi = { textAlign: 'center', marginTop: '2%' }
    const luutru = { marginLeft: '2%' }
    const haha = { marginTop: '5px' }
    return (

        <div>
            <div className="headpic">
                <img src="https://i1-dulich.vnecdn.net/2022/05/12/Hanoi2-1652338755-3632-1652338809.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NxMN93PTvOTnHNryMx3xJw" alt="" />
            </div>
            {/* header */}
            <div className="container">
                <div style={dulichhanoi}>
                    <p id="hntitle" >Du Lịch Hà Nội</p>
                </div>
                {/* body */}
                <div className="anh">
                    <p>Những công trình từ thời Pháp thuộc, hàng quán vỉa hè bày bán đặc sản địa phương, xe máy luồn lách trên đường đông đúc... là những ấn tượng đầu tiên của du khách về Hà Nội. Với nhiều người, Hà Nội có tất cả những thứ thú vị để khám phá nơi đây theo cách riêng của mình.</p>
                    <h2 style={dulichhanoi}>Hà Nội mùa nào đẹp</h2>
                    <p>Thời gian lý tưởng nhất để du lịch Hà Nội là vào mùa thu từ tháng 8 đến tháng 11 và mùa xuân từ tháng 3 đến tháng 4. Không ít người cho rằng mùa thu là lúc tiết trời đẹp nhất trong năm ở Hà Nội, với bầu trời xanh trong, gió heo may se se lạnh, lá vàng rơi, mùi hoa sữa thoảng... Mùa xuân về tiết trời ấm áp, đường phố như thay áo mới khi cây cối đâm chồi nảy lộc, muôn hoa đua nở...</p>
                    <img id="tree" src="https://i1-dulich.vnecdn.net/2022/05/11/ho-hoan-kiem-3319-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=kicaGv990ST9pJ70bI1VJw" alt="" />
                    <div>
                        <h2 style={dulichhanoi}>Di chuyển</h2>
                        <p>Hà Nội được ví như trái tim của Việt Nam, do đó du khách có thể di chuyển thuận lợi đến thủ đô bằng máy bay, tàu hỏa, xe khách, ôtô riêng hay xe máy từ các tỉnh thành khác.</p>
                        <p>Để di chuyển trong thành phố, bạn có thể đi ôtô, xe máy hay xe đạp. Nhưng trải nghiệm sẽ thi vị hơn nếu bạn ngồi xích lô ngắm 36 phố phường, đi tour môtô ba bánh hay vespa cổ. Một gợi ý đáng cân nhắc khác là xe buýt hai tầng, giá vé từ 130.000 - 599.000 đồng.</p>
                        <Image src="https://vcdn1-dulich.vnecdn.net/2014/08/22/Anh-1-1408682530.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=M-MZ4kvXyjXWUh7wvtgCgA" fluid style={phonganh} />
                    </div>
                    <br />
                    <div>
                        <h2 style={dulichhanoi}>Lưu trú</h2>
                        <p>Hà Nội có nhiều lựa chọn lưu trú cho du khách như nhà nghỉ bình dân, homestay, khách sạn, resort... phù hợp với túi tiền và sở thích. Nếu đi dạo trong phố cổ, bạn có thể thuê từ giường kiểu "Tây balo" với những phòng dorm tập thể khoảng 100.000 đồng một đêm, cho đến khách sạn cao cấp giá 3.000.000 - 5.000.000 đồng một đêm.</p>
                        <p>Một số khách sạn đặc biệt phải kể đến như Sofitel Legend Metropole Hà Nội mang nét kiến trúc thời thuộc địa Pháp, chỉ cách Nhà hát Lớn vài bước chân là Hilton Hanoi Opera, Apricot Hotel ngay bên bờ hồ Hoàn Kiếm, khách sạn nổi tiếng với view ngắm hồ Tây là Sheraton Hà Nội và InterContinental Hanoi Westlake, Lotte Hotel Hanoi trên tầng cao của tòa Lotte Center 65 tầng...</p>
                        <CardGroup>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/05/11/HotelMetropoleHanoi-1-2144-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=o27GZxSHELJa188GdNVNpg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/05/11/intercon-west-lake-3545-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bQk1RjPUpcPJGmhvOTVXrw" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/05/11/Room-J05-1500-2016-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=QRb2k0M7jvWkrG4ngXtuUw" />
                            </Card>
                        </CardGroup>
                    </div>
                    <br />
                    <div className="explore">
                        <h2 style={dulichhanoi}>Khám phá</h2>
                        <h3 id="visit">| Tham quan</h3>
                        <h3>Hoàng thành Thăng Long</h3>
                        <p>Hoàng thành Thăng Long là di sản văn hóa thế giới nằm giữa lòng Hà Nội và đã có bề dày lịch sử hơn 1300 năm. Nơi đây chứa đựng những di tích, di vật độc đáo, minh chứng cho lịch sử của Thăng Long – Hà Nội và lịch sử dân tộc Việt Nam trải qua nhiều thời đại. Địa chỉ: 19C Hoàng Diệu, Điện Bàn, Ba Đình.</p>
                        <Image src="https://i1-dulich.vnecdn.net/2022/05/11/hoang-thanh-Thang-Long-7703-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=MvKVbqW95D_mViOKa5zKbg" fluid style={phonganh} />
                        <br />
                        <br />
                        <h3>| Hồ Hoàn Kiếm</h3>
                        <p>Hoàn Kiếm là hồ nước ngọt tự nhiên của thành phố Hà Nộ, kết nối các phố Hàng Ngang, Hàng Đào, Cầu Gỗ, Lương Văn Can, Lò Sũ... với khu phố Tây do người Pháp quy hoạch cách đây hơn một thế kỷ là Bảo Khánh, Nhà Thờ, Tràng Thi, Hàng Bài, Đinh Tiên Hoàng, Tràng Tiền... Dạo quanh hồ, ngoài tận hưởng thiên nhiên trong lành giữa phố thị, bạn có thể ghé thăm đền Ngọc Sơn, phố cổ...</p>
                        <Image src="https://i1-dulich.vnecdn.net/2022/05/11/hoan-kiem-lake-7673-1613972680-1508-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=2wB1cBTUcNKuk68nrG6LMQ" fluid style={phonganh} />
                        <br />
                        <br />
                        <h3>| Lăng Chủ tịch Hồ Chí Minh</h3>
                        <p>Đối với người Việt, đây là một trong những điểm tham quan quan trọng nhất trong nước. Du khách tới để bày tỏ lòng thành kính với Chủ tịch Hồ Chí Minh. Khách tham quan cần giữ im lặng, mặc quần áo phù hợp và không chụp ảnh tại những khu vực cấm.</p>
                        <p>Dự lễ thượng cờ vào buổi sáng là trải nghiệm đặc biệt tại lăng Chủ tịch Hồ Chí Minh. Nếu bỏ lỡ, du khách có thể yên tâm dạo chơi một vòng quanh thành phố và quay lại đây tham gia lễ hạ cờ lúc 9h tối hàng ngày. Không khí trang nghiêm bao trùm khắp quảng trường Ba Đình khi tiếng loa phát thanh vang lên báo lễ hạ cờ sắp diễn ra. Người người xếp hàng ngay ngắn, dõi theo đoàn cảnh vệ trang trọng hạ lá cờ Tổ Quốc trong tiếng nhạc bài hát "Bác vẫn cùng chúng cháu hành quân".</p>
                        <Image src="https://i1-dulich.vnecdn.net/2022/05/11/lang-chu-tich-ho-chi-minh-4551-1652253985.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=nyrwUYPw4jO-OSsJYiZWnA" fluid style={phonganh} />
                        <br />
                        <br />
                        <h2>Chơi đâu</h2>
                        <p><b>Chèo SUP trên hồ Tây: </b> Thức dậy khi trời sắp bình minh, bạn có thể chạy xe ra Hồ Tây và trải nghiệm những trò chơi dưới nước như chèo SUP và kayak. Thời điểm thích hợp thường là 5h-7h, hoặc chiều mát. Bạn có thể tìm thuê thuyền, ván ở các cửa hàng trên phố Lạc Long Quân, Âu Cơ, Trích Sài... với giá từ 250.000 đồng một ngày.</p>
                        <p><b>Ngắm toàn cảnh Hà Nội từ trên cao:</b>Đến Hà Nội, bạn không thể bỏ qua Đài quan sát Lotte nằm trên đường Liễu Giai, bởi đây là nơi có thể phóng tầm mắt nhìn ngắm toàn cảnh Thủ đô từ tầng 65. Đài quan sát làm từ kính trong suốt nên bạn có thể chụp ảnh check-in sáng tạo ở bất cứ góc nào. Đài quan sát mở cửa từ 9h đến hết ngày.</p>
                        <Image src="https://i1-dulich.vnecdn.net/2022/05/11/lotte-3190-1652253986.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=v63qnN-s0xf56l01l9Y5mg" fluid style={phonganh} />
                        <br /><br />
                        <p><b>Phố đi bộ:</b>Hàng tuần, phố đi bộ Hồ Gươm mở từ 18h thứ Sáu đến hết Chủ nhật, thu hút đông đảo cả người dân lẫn du khách nước ngoài. Không gian này có rất nhiều hoạt động vui chơi, giải trí, cho đến biểu diễn nghệ thuật đường phố. Đừng quên trải nghiệm "food tour" quanh phố đi bộ.</p>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/05/11/pho-di-bo-1-2921-1652253986.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=PxBHZ-qUjDPHATxn9RpQuw" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/05/11/pho-di-bo-6447-1652253986.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=iE4IsZEnKPilsOAgIwMEog" />
                            </Card>
                        </CardGroup>
                    </div>
                    <br />
                    <div>
                        <h2 style={dulichhanoi}>Quán xá</h2>
                        <p>Ẩm thực Hà Thành kết hợp hoàn hảo những hương vị chua, cay, mặn, ngọt và thể hiện chính hình ảnh của thành phố ngàn năm văn hiến: sôi động, trầm mặc, cuốn hút và hấp dẫn. Bạn có thể dễ dàng thưởng thức đặc sản Hà Nội tại các quán vỉa hè bên đường như phở bò, bún chả, bánh mì...</p>
                        <h3>Ăn gì</h3>
                        <p><b>Phở:</b> Đến Hà Nội không thể bỏ qua phở, đặc biệt là phở bò, thường có hai loại chính: chín và tái. Bò chín là những miếng thịt bò được luộc chín trong nước dùng, còn bò tái là những miếng thịt được thái mỏng, chần nhanh qua nước sôi. Sau đó, người bán sẽ xếp những lát thịt đó lên bánh phở, chan nước dùng và phục vụ thực khách. Một số địa chỉ tham khảo là phở Thìn, Bát Đàn, Tư Lùn, Phở Lâm phố Hàng Vải, Phở Trâm phố Yên Ninh.</p>
                        <CardGroup>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/05/11/pho-4533-1652253986.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=pgTM4Dl0F1RGqiY_qypPSg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/05/11/pho-bo-9657-1652253986.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=tm97CZLJEcdVze6p5Bg3aA" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/05/11/pho-tron-6163-1652253986.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=mn3y6K8iw9Mtz_3bTUfgZQ" />
                            </Card>
                        </CardGroup>
                        <br /><br />
                        <p><b>Bún:</b> Người Hà Nội có rất nhiều món bún. Đặc sắc nhất là bún chả, bún thang, bún ốc, bún mọc, bún dọc mùng...</p>
                        <p>Nói đến đặc sản chính gốc lâu đời ở Hà Nội không thể không nhắc đến bún thang. Người Hà thành đã khéo léo chế biến những thực phẩm thừa sau dịp Tết thành một món bún cầu kỳ, tinh tế. Một tô bún thang có giá 30.000 - 50.000 đồng. Hiện nay, ở Hà Nội chỉ còn ít nơi bán bún thang, như quán Bà Đức (Cầu Gỗ), quán Ngọc Tuyền (Đào Tấn), quán Thuận Lý (Hàng Hòm)...</p>
                        <p>Bún chả - món thường được ăn vào bữa trưa. Giống món bún thịt nướng ở miền Nam và miền Trung, nhưng chả ăn bún của người Hà Nội tẩm ướp cầu kỳ hơn. Ai thích hương vị xưa thì có thể đến quán bún chả ở Hàng Mã và Hàng Đồng. Người thích bún chả kẹp tre thì tìm lên chợ Bưởi, chợ Đồng Xuân. Hay ghé sang hàng bún ở Ngọc Khánh, Giảng Võ, Lê Văn Hưu, Hàng Mành cũng đều là những quán nổi tiếng ở Hà Nội.</p>
                        <Image src="https://i1-dulich.vnecdn.net/2022/05/11/7-4548-1652253987.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=VnraH61nyqBwryOjWqxu2A" fluid style={phonganh} />
                        <p>Bún mọc ở Hà Nội có giá 20.000 - 40.000 đồng. Món bún này thường được bán ở các hàng bún sườn, bún dọc mùng, bún bung... Một số địa chỉ ngon nổi tiếng ở Hà Nội phải kể đến quán chị Loan (đầu phố Điện Biên Phủ), Hàng Lược, Hàng Trống, Cầu Gỗ, ngõ 18 Hàm Long...</p>
                        <p>Tìm bún ốc ở Hà Nội không khó, thực khách có thể đến hàng bún ở Hai Bà Trưng, Đặng Dung, Hòe Nhai để ăn bún nóng. Một bát bún ốc có khoảng 6-7 miếng ốc, chan nước dùng riêu cua, topping bắp bò, giò tai, đôi khi cả trứng vịt lộn.</p>

                        <p><b>Chả cá Lã Vọng:</b> Chả cá Lã Vọng ra đời từ năm 1871, do gia tộc họ Đoàn sáng chế. Từ món ăn dân dã, chả cá dần trở thành tinh hoa ẩm thực Hà Thành đến ngày nay. "Chả cá" được chế biến từ những loại cá ngon nhất, đặc biệt là cá lăng. "Lã Vọng" là hình tượng vị tướng thời xưa, người tài giỏi có ý chí đợi thời cơ lớn.</p>
                        <Image src="https://i1-dulich.vnecdn.net/2022/05/11/cha-ca-9834-1652253987.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=AgtRozJgMFxQ0FMeW-ryWw" fluid style={phonganh} />
                        <p>Thịt cá được lọc kỹ xương, ngọt dịu, vàng thơm và thấm gia vị. Rau thì là, hành hoa cắt khúc đảo lẫn trong chảo cá nóng. Khi ăn kết hợp với bánh đa nướng, bún và mắm tôm - thứ không thể thiếu giúp tạo hương vị đậm đà. Một số địa chỉ gợi ý: Chả cá Lã Vọng số 14 phố Chả Cá; Chả cá Thăng Long số 21 Đường Thành; Chả cá Lão Ngư số 171 Thái Hà...</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="">
                <img id="endpic" src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-ha-Noi-dep-cho-may-tinh.jpg" />
            </div>
        </div >
    )
}
export default Hanoi;