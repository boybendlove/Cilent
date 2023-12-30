import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './hcm.css'


function Hcm() {
    const train = { textAlign: 'center' }
    const luutru = { padding: '0.8%' }
    const vid = { marginLeft: 'auto', marginRight: 'auto', display: 'block', marginBottom: '3%' }
    const dulichhue = { textAlign: 'center', marginTop: '2%' }

    return (
        <div className="chu">
            <div className="headpic">
                <img src="https://i1-dulich.vnecdn.net/2023/05/25/hinh11-1685001964-6102-1685002176.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=EeiGoRzn7tmt_GKyEAPYrQ" />
            </div>

            <div className="container">
                <div className="body">
                    <div style={dulichhue}>
                        <p id="title">Du Lịch TP HCM</p>
                    </div>
                    <p>TP HCM là nơi hội tụ nhiều nền văn hóa, với các sản phẩm du lịch đa dạng, là "thành phố không ngủ" với những hoạt động vui chơi, giải trí sôi động cả ngày lẫn đêm.</p>
                    <img id="mist" src="https://i1-dulich.vnecdn.net/2023/05/25/15B9B08268B7EF13E573BCBFA1970A-8504-6550-1685002174.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=DTcgA28ilu6u1ZMwaMT_gQ" />

                    <div>
                        <h2>TP HCM mùa nào đẹp?</h2>
                        <p>TP HCM nằm trong vùng nhiệt đới gió mùa cận xích đạo. Đặc điểm chung của thời tiết ở đây là nhiệt độ cao đều trong năm, có hai mùa mưa và khô rõ rệt. Mùa mưa từ tháng 5 đến tháng 11, mùa khô từ tháng 12 đến tháng 4. Nhiệt độ trung bình khoảng 27 độ C, cao nhất lên hơn 40 độ C nhưng đa phần nắng không gay gắt, độ ẩm thấp, dịu mát về chiều tối.</p>
                        <p>Nắng nóng không khắc nghiệt như thời tiết miền Bắc, nên du khách có thể ghé thăm thành phố bất kể thời điểm nào trong năm. Nếu đến vào mùa mưa, nên chuẩn bị ô để tránh những cơn mưa rào bất chợt.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="body">

                    <div>
                        <h2>Di chuyển đến TP HCM</h2>
                        <p>Là thành phố lớn nên việc di chuyển đến TP HCM thuận tiện, với đầy đủ phương tiện giao thông gồm máy bay, tàu hỏa, tàu biển, ôtô...</p>
                        <p>Các hãng hàng không nội địa đều khai thác chuyến bay thẳng đến sân bay Tân Sơn Nhất từ nhiều địa phương mỗi ngày. TP HCM là nơi có các chuyến đi và đến có tần suất lớn nhất cả nước. Giá vé khứ hồi từ đến TP HCM dao động từ 2 đến 4 triệu đồng, tùy nơi xuất phát và thời điểm mua vé.</p>
                        <p>Sân bay Tân Sơn Nhất nằm ở quận Tân Bình, cách trung tâm (quận 1) khoảng 8 km, cách quận 3 và quận Phú Nhuận khoảng 5 km. Hiện giá taxi truyền thống từ sân bay Tân Sơn Nhất vào trung tâm khoảng 250.000 đồng. Du khách có thể đặt xe công nghệ với mức giá bằng một nửa (không phải giờ cao điểm). Một trong những kinh nghiệm là đi bộ đến ga quốc tế đặt xe sẽ nhanh hơn so với chờ ở ga quốc nội.</p>
                        <p>Với tàu hỏa, tàu Thống Nhất nhanh nhất nối Hà Nội và TP HCM hiện là 30 tiếng, dừng ở các ga lớn như Vinh - Đồng Hới - Huế - Đà Nẵng. Du khách nên đặt vé tại đại lý uy tín hoặc trực tiếp qua trang dsvn.vn, chọn ga đi và ga đến, loại ghế ngồi hoặc giường nằm theo nhu cầu. Giá vé tàu khác nhau tùy theo khoang, loại ghế.</p>
                        <p>Đường bộ nối miền Nam và miền Bắc có hai tuyến chính: quốc lộ 1A và đường mòn Hồ Chí Minh. Tùy theo nhu cầu, các điểm đến trên hành trình mà du khách lựa chọn tuyến đường phù hợp.</p>
                    </div>
                    <div>
                        <h2>Di chuyển trong TP HCM</h2>
                        <p>Việc đi lại trong thành phố thuận tiện, có nhiều phương tiện giao thông. Thuê xe máy là một trong những lựa chọn phổ biến nhất. Hầu hết điểm lưu trú đều hỗ trợ cho thuê xe, hoặc tìm thuê theo địa chỉ trên mạng, phổ biến ở khu vực trung tâm. Giá thuê một ngày tùy loại xe, dao động 100.000-200.000 đồng. Một số nơi sẽ yêu cầu khách đặt cọc 1 đến 4 triệu đồng, có nơi chỉ cần lưu lại giấy tờ tùy thân.</p>
                        <p>Ngoài ra, di chuyển bằng xe công nghệ (ôtô hoặc xe máy) ở TP HCM cũng là lựa chọn thuận tiện. Tuy nhiên, nếu di chuyển liên tục, sẽ tốn kém.</p>
                        <p>Phương tiện công cộng là lựa chọn hợp lý khi muốn tiết kiệm chi phí. Du khách có thể chọn xe buýt hoặc xe đạp công cộng (với khu trung tâm). Xe đạp công cộng khai trương tháng 12/2021. Các điểm đặt xe được bố trí trên vỉa hè nhiều tuyến đường tại quận 1, gần các trạm dừng, nhà chờ xe buýt, công viên, điểm du lịch... với giá 5.000 đồng cho 30 phút và 10.000 đồng cho 60 phút.</p>
                    </div>
                    <div>
                        <h2>Lưu trú</h2>
                        <p>Phương tiện công cộng là lựa chọn hợp lý khi muốn tiết kiệm chi phí. Du khách có thể chọn xe buýt hoặc xe đạp công cộng (với khu trung tâm). Xe đạp công cộng khai trương tháng 12/2021. Các điểm đặt xe được bố trí trên vỉa hè nhiều tuyến đường tại quận 1, gần các trạm dừng, nhà chờ xe buýt, công viên, điểm du lịch... với giá 5.000 đồng cho 30 phút và 10.000 đồng cho 60 phút.</p>
                        <p>Có nhiều khách sạn 5 sao mức giá khoảng 3-7 triệu đồng như Park Hyatt Sài Gòn, Hotel Majestic Saigon, Hotel des Arts Saigon, Pullman Saigon Centre, Hotel Nikko Saigon, Norfolk Mansion, La Vela Saigon.</p>
                        <p>Ở phân khúc tầm trung 1-2 triệu đồng, du khách có thể tham khảo các khách sạn như Wink Hotel Saigon Centre, La Memoria Hotel, The Hammock Hotel Ben Thanh, Millennium Boutique Hotel, The Odys Boutique Hotel.</p>
                        <p>Homestay có mức giá chưa đến 1 triệu đồng mỗi phòng. Một số địa chỉ homestay ở trung tâm có thể kể đến Nấp Saigon, Home, Hostie Saigon Wanderlust Home, Cactusland Homestay, Zooz Studio.</p>
                        <p>Ngoài ra, còn có nhiều nhà nghỉ bình dân khác. Du khách có thể tham khảo đặt phòng tại Agoda hay Booking.</p>
                    </div>

                    <div>
                        <h2>Hoạt động du lịch và giải trí</h2>
                        <p>Du lịch TP HCM định hướng mỗi quận, huyện có một sản phẩm du lịch. Thành phố hội tụ đa dạng hoạt động giải trí, khu vui chơi, tham quan, mua sắm phù hợp nhiều đối tượng khách.</p>
                        <h3>Đi buýt đường sông</h3>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2023/05/23/buytsong-9116-1684835970.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=iARSGV8PlJ25mJgk6FBi5Q" alt="" />
                        <p id="smpic">Tuyến buýt sông ở TP HCM. Ảnh: Sở DL TP HCM</p>
                        <p>Các trải nghiệm trên sông là một đặc trưng của du lịch TP HCM. Du khách được ngắm thành phố từ một góc nhìn khác, qua nhiều địa danh nổi tiếng như bến Nhà Rồng, cảng Bến Nghé, cầu Phú Mỹ, mũi Đèn Đỏ, bến phà Bình Khánh.</p>
                        <p>Buýt sông khởi hành hàng ngày từ 8h30 tại bến Bạch Đằng, Bình An, Linh Đông, Thanh Đa, Hiệp Bình Chánh. Tuyến buýt đêm xuất phát muộn nhất lúc 22h. Vé có thể đặt online hoặc mua trực tiếp tại bến với giá 15.000 đồng một lượt.</p>
                    </div>

                    <div>
                        <h3>Ăn tối trên du thuyền</h3>
                        <p>Buýt sông khởi hành hàng ngày từ 8h30 tại bến Bạch Đằng, Bình An, Linh Đông, Thanh Đa, Hiệp Bình Chánh. Tuyến buýt đêm xuất phát muộn nhất lúc 22h. Vé có thể đặt online hoặc mua trực tiếp tại bến với giá 15.000 đồng một lượt.</p>
                        <p>Ngoài ra, du khách có thể bao trọn du thuyền loại nhỏ, với sức chứa khoảng 20 người, giá từ 10 triệu đến 25 triệu đồng.</p>
                    </div>
                    <div>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/A1-1660-1685002174.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Q_Z5OnEsjbGCCx-BSzsytg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/A2-6034-1685002174.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=sYFNjou_VBg3VdUqLou8qQ" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/A3-6683-1685002174.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=f0RDKcDISUTMs67Z-gMtwA" />
                            </Card>
                        </CardGroup>
                    </div>

                    <div>
                        <h3>Ngắm cảnh từ xe buýt hai tầng</h3>
                        <p>Trung tâm thành phố có xe buýt 2 tầng mui trần. Xe có hệ thống thuyết minh đa ngôn ngữ tự động hướng dẫn về các địa điểm trên đường, bản đồ du lịch, wifi miễn phí, hướng dẫn viên. Mỗi chuyến dài khoảng 60 phút, qua những địa điểm nổi tiếng như Thảo Cầm Viên, bảo tàng Chứng tích chiến tranh, phố đi bộ Bùi Viện, chợ Bến Thành, phố đi bộ Nguyễn Huệ, nhà hát thành phố và kết thúc bằng trải nghiệm ngắm thành phố từ trên cao tại Saigon Skydeck tầng 49 toà tháp Bitexco Financial Tower</p>
                        <p>Xe hoạt động từ 9h đến 22h30 hằng ngày, mỗi 30 phút sẽ có một chuyến. Buổi tối, xe cung cấp thêm gói dịch vụ ăn tối trên du thuyền cao cấp dọc sông Sài Gòn. Có thể mua vé trực tiếp tại quầy ở điểm xuất phát 92-96 Nguyễn Huệ, quận 1 hoặc đặt online.</p>
                    </div>

                    <div>
                        <h3>Dạo bộ trong công viên</h3>
                        <p>Thảo Cầm Viên tồn tại hơn 150 năm, là vườn thú có tuổi thọ hàng thứ 8 trên thế giới. Ban đầu nơi đây là vườn bách thảo, phục vụ các hoạt động bảo tồn động thực vật cho người dân thành phố, là nơi nghiên cứu của các nhà khoa học. Hiện Thảo Cầm Viên có hơn 1.000 cá thể động vật, hơn 2.000 cây gỗ thuộc 260 loài, 23 loài lan nội địa, 33 loài xương rồng trên diện tích 17 ha. Khuôn viên nơi đây trong lành, thích hợp cho các buổi thư giãn.</p>
                        <p>Ngoài ra, TP HCM còn nhiều công viên và không gian xanh đẹp như Tao Đàn, Hoàng Văn Thụ, Lê Văn Tám, Gia Định.</p>
                    </div>

                    <div>
                        <h3>Trải nghiệm phố Tây</h3>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/BV1-6522-1684985935.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=CLXxU8gt5dFiEa_j_amMiw" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/BV2-2110-1684985936.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=R1ZX9TbVf3tpy8_ceuyf0Q" />
                            </Card>
                        </CardGroup>
                        <p>Người địa phương và du khách quen gọi khu vực Bùi Viện - Đề Thám - Phạm Ngũ Lão, quận 1 là phố Tây, hoạt động từ chiều tối đến rạng sáng hôm sau. Tuyến phố bao gồm những tiện ích công cộng miễn phí như nhà vệ sinh, kết nối wifi và trạm cung cấp thông tin du lịch. Khu phố phù hợp với giới trẻ, khách du lịch, đặc biệt là khách Tây. Hàng trăm quán cà phê, bar, pub và hàng ăn uống dọc hai bên phố, luôn tạo không khí sôi động. Phố còn nhiều điểm bán tour du lịch.</p>
                    </div>

                    <div>
                        <h3>Khám phá cuộc sống và ẩm thực phố người Hoa</h3>
                        <p>Khu phố người Hoa bao gồm các quận 5, 6 và 11, nhưng sầm uất và được nhiều người biết đến nhất là quận 5. Dọc các con đường Trần Hưng Đạo, Châu Văn Liêm, Lương Nhữ Học... du khách sẽ được ngắm những dãy nhà cổ đậm nét kiến trúc Hoa có tuổi đời khoảng 100 năm. Tại đây cũng có nhiều ngôi chùa cổ, hội quán, các nhà hàng tiêu biểu của người Hoa. Các món ăn không thể bỏ qua có vịt quay, phá lấu, cá viên cà ri, mì kéo, gà tiềm, dimsum...</p>
                        <p>Phố đèn lồng Lương Nhữ Học là một trong những điểm hấp dẫn vào dịp Trung thu, đặc biệt vào buổi tối khi đèn lồng đủ sắc màu và kiểu dáng tạo cho con phố vẻ đẹp lung linh. Phố Đông y cũng là địa điểm làm nên hình ảnh đặc trưng tại đây. Từ lâu, các thương gia người Hoa đã vận chuyển dược liệu sang buôn bán và dần hình thành khu phố bán dược liệu sầm uất như hiện nay.</p>
                    </div>

                    <div>
                        <h2>Di tích lịch sử</h2>
                        <p>Không chỉ là thành phố trẻ năng động, TP HCM còn là nơi lưu giữ nhiều giá trị văn hóa, lịch sử. Có nhiều di tích, bảo tàng trong thành phố được khách trong và ngoài nước biết đến.</p>
                        <h3>Dinh Độc Lập</h3>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2023/05/25/Dinh-Doc-Lap-Henry-Duong-7190-1684985936.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=ucCY7dMMZbZUyZguhZnHvA" alt="" />
                        <p>Dinh Độc Lập hay Dinh Thống Nhất là một trong những địa điểm tham quan không thể bỏ qua khi ghé thăm TP HCM. Tọa lạc tại trung tâm quận 1, Dinh Độc Lập vừa cổ kính, vừa hiện đại, từ lâu đã trở thành một trong những biểu tượng của thành phố. Vào các ngày cuối tuần hoặc dịp lễ lớn như 30/4, Dinh Độc Lập thường kín khách tham quan.</p>
                        <p>Vé tham quan Tòa nhà chính và Nhà trưng bày "Từ Dinh Norodom đến Dinh Độc Lập 1868 - 1966" có giá từ 15.000 đồng đến 65.000 đồng. Nếu chỉ tham quan tòa nhà chính, giá vé là 10.000 đến 40.000 đồng.</p>

                    </div>

                    <div>
                        <h3>Bảo tàng Biệt động Sài Gòn</h3>
                        <p>Bảo tàng biệt động Sài Gòn nằm ở tầng hai của một căn nhà xây dựng năm 1963 trên đường Trần Quang Khải, quận 1. Ngôi nhà ban đầu là cơ sở hoạt động bí mật của lực lượng biệt động Sài Gòn dưới sự quản lý của ông Trần Văn Lai (tức Năm Lai). Bảo tàng hoạt động từ ngày 24/12/2019, diện tích hơn 100 m2, trưng bày hơn 100 hiện vật của những người lính biệt động. Các đồ vật trong nhà vẫn còn nguyên và được bài trí gần giống trước kia. Khách tham quan được xem những bộ phim ngắn về lực lượng biệt động Sài Gòn.</p>
                        <p>Giờ tham quan: từ 7h đến 22h các ngày trong tuần, miễn vé vào cửa.</p>
                    </div>

                    <div>
                        <h3>Bảo tàng mỹ thuật TP HCM</h3>
                        <p>Bảo tàng nằm tại số 97A Phó Đức Chính, quận 1, trước đây vốn là căn nhà thuộc gia đình ông Hứa Bổn Hòa (dân gian hay gọi là Chú Hỏa), một trong tứ đại gia Sài Gòn cuối thế kỷ 19. Đây được xem là điểm hấp dẫn du khách yêu hội họa, cũng là nơi hút du khách trẻ thích chụp hình.</p>
                        <p>Bảo tàng là toà nhà được xây dựng theo phong cách kiến trúc Pháp cuối thế kỷ 19 đầu thế kỷ 20, kết hợp hài hòa của kiến trúc phương Đông trong trang trí mái ngói, cột ốp gốm và hoạ tiết bằng gốm trên mái nhà...</p>
                        <p>Giờ tham quan: từ 8h đến 17h các ngày trong tuần.</p>
                    </div>

                    <div>
                        <h2>Các khu chợ</h2>
                        <h3>Chợ Bến Thành</h3>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2023/05/25/BT1-4566-1685002175.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=3eCl1IBEu9npbWXeVdUKJA" alt="" />
                        <p id="smpic">Chợ Bến Thành. Ảnh: Quỳnh Trần</p>
                        <p>Hoạt động từ năm 1914 nằm ngay trung tâm thành phố, không chỉ là nơi mua bán sầm uất mà còn là chứng nhân lịch sử chứng kiến bao đổi thay, thăng trầm của thành phố và là điểm giao hòa giữa Sài Gòn xưa và nay. Nơi đây tập trung nhiều mặt hàng, từ quần áo, dày dép, vải vóc, đồ thủ công mỹ nghệ, hàng thổ cẩm, trang sức đến các món ăn đặc sản.</p>
                    </div>

                    <div>
                        <h3>Chợ Tân Định</h3>
                        <p>Xây dựng vào năm 1926, cổng chính của chợ có thiết kế độc đáo. Đây cũng là địa điểm kinh doanh của nhiều mặt hàng, trong đó nổi tiếng là vải vóc và ẩm thực. Quầy ẩm thực ở khu chợ này luôn được thực khách đánh giá cao bởi món ăn đa dạng, ngon và hấp dẫn như bún mắm, súp cua, bánh canh cua, trái cây dĩa và đặc biệt là món xôi gà luôn được nhiều người biết đến.</p>
                        <h3>Chợ Bình Tây (Chợ Lớn)</h3>
                        <p>Chợ nằm ở cửa ngõ phía tây thành phố, trong khu phố Tàu, luôn là một trong các điểm đến được đánh dấu trên bản đồ du lịch của nhiều du khách. Hoạt động từ năm 1930, chợ được xây dựng với kiến trúc đậm phong cách Á Đông. Các góc mái uốn lượn theo kiểu đình chùa, lợp ngói âm dương vừa cổ kính, vừa thông thoáng. Chợ Bình Tây còn là trung tâm đầu mối với nhiều mặt hàng.</p>
                        <img id="mist" src="https://image.vietgoing.com/destination/vietgoing_kuv2106048052.webp" alt="" />
                    </div>

                    <div>
                        <h2>Ẩm thực</h2>
                        <p>TP HCM là nơi hội tụ của ẩm thực nhiều vùng miền và nhiều quốc gia. Du khách có thể tìm thấy món ăn dọc ba miền, còn có món Hoa đặc trưng, ẩm thực Ấn Độ, Nhật Bản, Hàn Quốc, Thái Lan... hay đồ chay tại vô số các nhà hàng lớn nhỏ trong thành phố. Các món ăn đặc trưng du khách nên thử gồm: cơm tấm, hủ tíu, bánh mì, cá lóc nướng trui, bánh xèo, cơm cháy kho quẹt.</p>
                        <CardGroup id="food">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/an1-5779-1685002175.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=JTT61kZK51ruyrKswKGN1g" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/an2-8639-1685002175.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=KcjceCkMG0JC786LFbHzNg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/an3-9730-1685002175.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=RRP6QCTglnIhOFqznWU0ow" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/an4-7438-1685002175.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=lWNtJe2gC7S-0qdhNCKP5w" />
                            </Card>
                        </CardGroup>
                        <p>Các phố ẩm thực dưới đây là gợi ý cho những người lần đầu đến TP HCM.</p>
                    </div>

                    <div>
                        <h3>Đường Phan Xích Long</h3>
                        <p>Đường Phan Xích Long, quận Phú Nhuận là nơi tập trung của nhiều nhà hàng, quán ăn, thương hiệu ẩm thực có tiếng. Tại đây, du khách có thể tìm được lẩu, đồ nướng, nhà hàng kiểu Âu, nhà hàng Nhật, Thái, Hàn, quán ăn kiểu Việt. 13 con đường mang tên các loại hoa bao quanh đường lớn Phan Xích Long như Hoa Phượng, Hoa Lan, Hoa Huệ, Hoa Mai cũng tập trung nhiều quán cà phê, quán bar tầng thượng, mở cửa đến nửa đêm.</p>
                    </div>

                    <div>
                        <h3>Phố ốc Vĩnh Khánh</h3>
                        <CardGroup id="food">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/oc2-5575-1685002176.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=auffKmlVju68nQc0-iD6Lg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/oc5-9400-1685002176.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=6G2DiQW77Oh3kwyyNsTM9g" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2023/05/25/oc6-1138-1685002176.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=qfxD5yQWo7u4qtQeRCOZJA" />
                            </Card>
                        </CardGroup>
                        <br />
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2023/05/25/oc1-1356-1685002176.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=husODPzvnWAyL8yKqiBrpg" />
                        <p id="smpic">Các món ốc trên phố ốc Vĩnh Khánh. Ảnh: Huỳnh Nhi</p>
                        <p>Các món ốc là đặc sản của TP HCM. Bất kỳ ở đâu trong thành phố đều có thể bắt gặp các hàng ốc, trong đó dọc con phố Vĩnh Khánh, quận 4, tập trung nhiều hàng ốc, hải sản nổi tiếng nhất thành phố. Các cửa tiệm thường mở đến nửa đêm, tấp nập khách. Các món ốc có giá từ 80.000 đến 150.000 đồng một phần tùy loại ốc. Khác với ốc Hà Nội thường có kiểu chế biến đặc trưng là hấp sả, chấm nước mắm ớt, ốc ở TP HCM chế biến đa dạng từ sốt trứng muối, đến xào me, nướng muối ớt, xào sa tế.</p>
                    </div>

                    <div>
                        <h3>Phố ẩm thực Hồ Thị Kỷ</h3>
                        <p>Phố ẩm thực trên đường Hồ Thị Kỷ, quận 10 là một trong những điểm đến hút cả du khách lẫn dân địa phương. Mở cửa từ 15h mỗi ngày, hơn 100 hàng quán bán đủ món Âu-Á và nhiều vùng miền khác ở Việt Nam. Khu phố thu hút thực khách nhờ những món xiên nướng, các loại hải sản chế biến như tôm hùm nướng phô mai, răng mực nướng muối ớt. Các món có mức giá dao động từ 7.000 đến 100.000 đồng.</p>
                    </div>

                    <div>
                        <h3>Phố ẩm thực Nguyễn Thượng Hiền</h3>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2023/05/25/NTH-3806-1685002176.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=SZ3ctLOCTLR2Y-efnFBAlQ" alt="" />
                        <p>Phố ẩm thực Nguyễn Thượng Hiền (từ đường Điện Biên Phủ đến Nguyễn Đình Chiểu, quận 3) hoạt động từ 19h đến 23h mỗi ngày. Trên tuyến có hơn 90 điểm kinh doanh ăn uống cùng hơn 50 cửa hàng buôn bán quần áo, giày dép, làm đẹp. Con phố nổi tiếng với những món ăn như bánh tráng trộn, tré trộn, nước ép bưởi. Một số cửa tiệm cũng phục vụ món ăn kiểu Campuchia.</p>
                    </div>

                    <div>
                        <h2>Lưu ý</h2>
                        <p>Chủ động bảo quản tư trang cá nhân khi đến nơi đông người và khi đi lại trên đường.</p>
                        <p>Du khách nên tránh ra đường vào giờ cao điểm, buổi sáng 8h-9h30, buổi chiều 17h30-19h bởi dễ bị tắc đường.</p>
                        <p>Nên kiểm tra đường đi theo bản đồ để tránh các đường một chiều và làn ôtô nếu di chuyển bằng xe máy, đặc biệt ở khu trung tâm.</p>
                        <p>TP HCM có nhiều hẻm nhỏ thông nhau, du khách không nên đi vào các hẻm nếu không thạo đường.</p>
                    </div>
                </div>
            </div>
            <div>
                <img id="endpic" src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-Sai-Gon-1.jpg" alt="" />
            </div>
        </div >
    )
}
export default Hcm;