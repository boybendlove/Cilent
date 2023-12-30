import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './hue.css'


function Hue() {
    const train = { textAlign: 'center' }
    const luutru = { padding: '0.8%' }
    const vid = { marginLeft: 'auto', marginRight: 'auto', display: 'block', marginBottom: '3%' }
    const dulichhue = { textAlign: 'center', marginTop: '2%' }

    return (
        <div className="chu">
            <div className="headpic">
                <img src="https://hueplus.vn/uploads/images/tranthang/HuePlus/nh%C3%AC03.jpg" />
            </div>

            <div className="container">
                <div style={dulichhue}>
                    <p id="title">Du Lịch Huế</p>
                </div>
                <p>Nằm trên dải đất miền Trung, Huế là thành phố di sản văn hóa thế giới. Cố đô vốn có lịch sử và truyền thống lâu đời với những giá trị và bản sắc độc đáo.</p>
                <div className="body">
                    <h2>Huế mùa nào đẹp?</h2>
                    <p>Mùa du lịch Huế từ tháng 11 năm trước đến tháng 4 năm sau, đẹp nhất là 3-4 tháng đầu năm, tiết trời mát mẻ. Với những du khách yêu núi, biển, thích ngắm bình minh và hoàng hôn, thời điểm nên đi là tháng 6-8 khi mặt trời đẹp nhất trong năm, nước biển xanh nhất.</p>
                    <p>Huế không hẳn có mùa khô, mà chỉ có mùa mưa và mùa ít mưa. Mùa ít mưa thường kéo dài từ tháng 3 đến tháng 8, trời nóng nực và oi bức. Khoảng tháng 9 đến tháng 1 năm sau là mùa mưa, trời lạnh. Đặc biệt, từ tháng 10 đến tháng 11 cũng chính là mùa bão, mưa to tưởng như không dứt.</p>
                    <p>Mùa xuân kéo dài từ cuối tháng 1 đến tháng 3, thời tiết lúc này rất đẹp, trời có nắng nhẹ, đôi khi se se lạnh. Từ tháng 4 đến tháng 7, mùa hè nắng nóng, Huế cũng là địa điểm du lịch lý tưởng với những du khách yêu thích biển. Cố đô vào hè có sắc vàng của hoa điệp, hồng của muồng hoa đào; sắc tím của bằng lăng... Tháng 8, thành phố vào thu, mùa đẹp nhất trong năm.</p>

                </div>
            </div>
            <div>
                <img id="mist" src="https://i1-dulich.vnecdn.net/2022/04/19/du-lich-Hue-9604-1650366420.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Zx29jTY1DOW5rCkcxVkmAQ" alt="" />
            </div>
            <div className="container">
                <div className="body">
                    <p id="smpic">Mùa hè bên dòng Hương giang. Ảnh: Lê Huy Hoàng Hải</p>
                    <div>
                        <h2>Di chuyển</h2>
                        <p>Máy bay: Vietnam Airlines, Bamboo Airways, Vietjet Air đều khai thác các chặng đến sân bay Phú Bài, Huế. Thời gian bay từ Hà Nội là khoảng 1 tiếng 15 phút, giá vé khứ hồi từ 1.600.000 đồng. Thời gian bay từ TP HCM là khoảng 1 tiếng 30 phút, giá vé khứ hồi từ 1.300.000 đồng.</p>
                        <img id="dhv" src="https://static.vinwonders.com/2022/12/du-lich-hue-1.jpg" alt="" />
                        <p>Tàu hỏa: Từ Hà Nội, TP HCM hoặc các tỉnh thành các, du khách có thể đi tàu hỏa để ngắm cảnh dọc đường. Tàu có loại ghế ngồi cứng, ngồi mềm và giường nằm, có hoặc không có điều hòa. Giá vé khoảng 400.000 - 900.000 đồng một người. Nếu đi xa vào mùa nóng, bạn hãy chọn tàu SE3, SE1 để rút ngắn thời gian di chuyển, mua vé khoang giường nằm có điều hòa cho thoải mái.</p>
                        <p>Xe khách: Từ Hà Nội đến Huế bạn mua vé xe các hãng như Hưng Thành, Camel, Queen, Đức Thịnh... Chặng Hà Nội - Huế và ngược lại có giá 250.000 - 300.000 đồng một chiều. Xe thường chạy từ 18h hôm trước tới 6h sáng hôm sau đến Huế nên bạn chỉ cần đặt chỗ giường nằm và ngủ một giấc sẽ tới nơi.</p>
                        <p>Tại Huế, để tiết kiệm chi phí và tự do dừng nghỉ khi di chuyển bạn nên thuê xe máy tại chỗ ở. Giá thuê xe máy số 80.000 đồng một ngày, xe tay ga 130.000 đồng một ngày, chưa tính tiền xăng.</p>
                    </div>

                    <div>
                        <h2>Khách sạn và resort</h2>
                        <p>Khách sạn ở Huế giá dễ chịu. Bạn nên đặt phòng ở trung tâm, gần các bến tàu, xe để dễ đi lại cũng như tham quan các địa điểm du lịch nội đô và điểm ăn uống. Các homestay, hostel nằm ngay trung tâm như a-mâze house, Sunshine, Tò Vò, Trầm... giá chỉ 100.000 - 200.000 đồng một đêm phù hợp cho người đi một mình hoặc nhóm bạn trẻ. Nếu đi đông, bạn nên đặt trước qua các kênh đặt phòng trực tuyến như Booking, Agoda, Traveloka, Vntrip... để có giá tốt.</p>
                        <p>Huế cũng không thiếu khách sạn 4-5 sao và khu nghỉ dưỡng cao cấp. Những thương hiệu nổi tiếng phải kể đến Banyan Tree Lăng Cô, Laguna Lăng Cô, Làng Hành Hương Pilgrimage Village, Lapochine Beach Resort, khách sạn Silk Path Grand Hue, Indochine Palace, khách sạn Hoàng Cung (Imperial), Azerai La Residence Huế, Vinpearl... Giá phòng khoảng 2.000.000 - 8.000.000 đồng một đêm.</p>
                        <img id="hotel" src="https://i1-dulich.vnecdn.net/2022/04/19/nha-vuon-Hue-7163-1650366420.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=E-85Kw--X3HLgFy6ioL1mg" alt="" />
                        <p id="smpic">Nếu muốn nghỉ dưỡng trong không gian nhà vườn Huế, Ancient Hue Garden Houses là gợi ý đặc biệt cho bạn.</p>
                        <p>Một chuyến du lịch Huế khoảng 3 ngày 2 đêm là vừa đủ để di chuyển, thăm thú mà vẫn tiết kiệm, đảm bảo sức khỏe. Nếu kinh phí dư dả hoặc thoải mái về thời gian hơn, bạn có thể nghỉ lại Huế dài ngày để khám phá hết đất cố đô. Dưới đây là những điểm tham quan, trải nghiệm gợi ý.</p>
                    </div>

                    <div>
                        <h2>Tham quan</h2>
                        <h3>| Chợ Đông Ba</h3>
                        <p>Hình thành từ năm 1899, chợ Đông Ba là một trong những biểu tượng của đất cố đô, vốn quanh năm tấp nập người mua kẻ bán. Chợ kéo dài từ cầu Gia Hội tới cầu Trường Tiền với hàng ngàn gian hàng. Bước vào chợ, bạn sẽ thấy không khí đầy màu sắc của một khu chợ Huế. Du khách tới đây thỏa sức tìm ăn món ngon, hoặc dạo quanh các hàng quần áo, vải, mũ nón, các loại mắm, bánh trái chỉ có ở Huế để mua đem về.</p>
                        <p>Chợ bán từ 7h sáng tới chiều muộn nên du khách có thể ghé lúc nào tùy thích. Tuy nhiên sau 16h có nhiều hàng ăn vặt mở cửa hơn. Khi mua hàng có thể mặc cả.</p>
                    </div>
                </div>
            </div>
            <div>
                <CardGroup className="multipic">
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/19/cho-dong-ba-2659-1650366420.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=0TAcajOJNQQa-u7KfyS7wg" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/19/cho-dong-ba-Hue-4669-1650366420.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=OVQBLyQpXQ0Bt0Soyrhxqw" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/19/cho-dong-ba-Hue-2-8880-1650366420.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Cn1hqLHqcrggKOT3KAcJig" />
                    </Card>
                </CardGroup>
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <h3>| Quốc học Huế</h3>
                        <p>Đây là trường trung học đầu tiên của Huế xây từ thời vua Thành Thái, vào năm 1896. Hiện trường nằm ở số 12 đường Lê Lợi, ngay trung tâm. Trường nổi bật với màu sơn đỏ rực rỡ và những hàng cây cổ thụ xanh mướt quanh năm. Khuôn viên Quốc học Huế rất rộng nên bạn cứ thư thả đi dạo các hành lang, lớp học, sân trường, tham quan những kiến trúc Pháp xưa và chụp hình lưu niệm.</p>
                        <p>Bạn ghé trường vào buổi trưa như 11h30 hoặc sau 17h để tham quan và chụp ảnh lúc vắng học sinh. Trường có nhiều cây lớn rất mát mẻ, nếu đi vào sáng sớm có thể bảo vệ không cho vào vì trong giờ học của học sinh. Phí gửi xe vào trường là 5.000 đồng.</p>
                    </div>

                    <div>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2022/04/15/106720109-1614050858764706-182-8803-6620-1650015258.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=CCxadzqZBKgIivix5A10Hg" alt="" />

                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/15/106097710-1614050438764748-650-8895-8630-1650015259.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=0pQkYz3sarNGvhljCmI6kg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/15/106389033-1614051785431280-578-3900-7817-1650015260.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=rXdqBf74oHVdHKAeGe4-7g" />
                            </Card>
                        </CardGroup>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <h3>| Cầu Trường Tiền</h3>
                        <p>Bắc qua sông Hương, cầu Trường Tiền vốn là hình ảnh mà nhắc tới Huế ai cũng nhớ. Nếu ban ngày chỉ trầm ngâm in bóng xuống dòng Hương thì chiều muộn và tối đến, cầu lại được tô điểm bằng ánh đèn màu lấp lánh rất nổi bật. Tối đến, du khách tham quan cầu Trường Tiền nên kết hợp đi bộ dạo dọc bờ sông Hương, chiều hoặc tối sẽ có thêm các hàng quán ăn vặt thu hút khách.</p>
                    </div>
                </div>
            </div>

            <div>
                <CardGroup className="multipic">
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/19/cau-truong-tien-Hue-VnExpress-3423-1650366421.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=nArmWs7XWQLUjLe5w2MnWA" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/19/cau-truong-tien-Hue-8944-1650366421.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=zTQ4-n45h9V94chMXc_a3w" />
                    </Card>
                </CardGroup>
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <h3>| Sông Hương</h3>
                        <p>Sông Hương uốn lượn quanh co giữa núi rừng, lướt qua các làng mạc từ Kim Long, Vĩ Dạ đến Ðông Ba, Gia Hội, Nam Phổ... quyện theo mùi thơm của các loài hoa xứ Huế. Có dịp bạn hãy du ngoạn trên sông bằng thuyền để được ngắm cảnh Hương giang thơ mộng.</p>
                        <p>Nếu muốn ngắm thành phố lung linh ánh đèn từ dòng Hương, du khách có thể lên thuyền rồng và thưởng thức "đặc sản" ca Huế. Ca Huế là sự giao thoa, tiếp thu văn hóa giữa nhã nhạc cung đình và ca hát dân gian. Một dàn ca Huế chuẩn thường chỉ có một người ca cùng bộ đàn 5 cây. Dàn đàn đệm càng nhiều màu sắc càng tôn cho giọng ca. Giá vé chương trình nghe ca Huế trong khoảng 1 tiếng trên sông Hương dao động từ 100.000 - 150.000 đồng một người.</p>
                    </div>
                </div>
            </div>

            <div>
                <CardGroup className="multipic">
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/19/song-Huong-Hue-2546-1650366421.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=LJT1cxgrtDeFEjVYKKSmQw" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/19/song-Huong-Hue-2-7823-1650366421.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=7-g4eq94gafFfaI3_4J9kg" />
                    </Card>
                </CardGroup>
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <h3>| Đại Nội Huế</h3>
                        <p>Đại Nội Huế có hơn 100 công trình kiến trúc nổi bật như Ngọ Môn, Điện Thái Hòa, Cung Diên Thọ, Cung Trường Sanh, Hưng Miếu, Thế Miếu... Quần thể công trình cổ kính này được bố trí theo nguyên tắc "tả nam hữu nữ", "tả văn hữu võ", tính từ trong ra. Ngay cả các miếu thờ cũng có sự sắp xếp theo thứ tự "tả chiêu hữu mục" (trái trước, phải sau, lần lượt theo thời gian).</p>
                        <p>Vì khuôn viên Đại Nội Huế rất rộng cũng như tiết trời nắng nóng mùa hè, bạn nên đến từ sáng sớm ngay khi mở cửa lúc 7h và mang theo mũ, nón tránh nắng. Bạn cần ít nhất 3 tiếng tham quan khu di tích. Vé vào Đại Nội giá 200.000 đồng một người. Khi ghé thăm các điểm tham quan tại Huế, du khách có thể thuê áo Nhật Bình chụp ảnh để hóa thân thành hậu, phi, công chúa thời xưa.</p>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2022/04/19/Tu-Cam-Thanh-8609-1650366421.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=LBqjdlUdN7ddoqzRCeVUbA" alt="" />
                        <p id="smpic">Đại Nội Huế. Ảnh: Ngô Trần Hải An</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <h3>| Chùa Thiên Mụ</h3>
                        <p>Cách Đại Nội và trung tâm TP Huế khoảng 5 km về phía tây, chùa Thiên Mụ nằm trên đồi Hà Khê, phường Kim Long, hướng mặt ra sông Hương êm đềm. Du khách đến chùa Thiên Mụ có thể tham quan tòa tháp 7 tầng Phước Duyên, điện Đại Hùng, vườn cây, rừng thông và khu trưng bày di vật của hòa thượng Thích Quảng Đức.</p>
                        <img id="mist" src="https://verbalearn.org/wp-content/uploads/2020/11/thuyet-minh-ve-chua-thien-mu.png" alt="" />
                        <p>Nếu còn thời gian, bạn nên cân nhắc tham quan thêm chùa Huyền Không Sơn Thượng. Tham quan các ngôi chùa thường không mất phí, tuy nhiên để giữ không gian thanh tịnh, du khách chú ý ăn mặc lịch sự, không làm ồn.</p>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="body">
                    <div>
                        <h2>Ăn chơi</h2>
                        <h3>| Ăn</h3>
                        <p>Từ lâu ẩm thực Huế nổi tiếng đa dạng, tinh tế bởi người Huế quan niệm đồ ăn không chỉ ngon mà còn phải đẹp. Các món bạn nhất định phải thử khi du lịch Huế là bún bò, cơm hến, bánh canh, các loại bánh bèo, nậm, lọc, bánh ép, bánh ướt thịt nướng, chè... Mỗi món ăn chơi chỉ từ 7.000 - 20.000 đồng một suất, các món ăn no như bún bò, thịt luộc cuốn tôm, bún mắm, cơm niêu... có giá từ 30.000 đồng một suất. Vì đồ ăn Huế rẻ và ngon nên bạn chỉ cần dắt túi 100.000 - 300.000 đồng là có thể ăn no nê trong ngày.</p>
                        <p>Các loại đồ uống, bạn có thể thử tào phớ, nước đậu nành, chè. Bột lọc heo quay là món chè chỉ ăn ở Huế mới ngon. Giá từ 15.000 đồng một cốc, ở nhiều quán vỉa hè, giá thành có thể rẻ hơn. Địa điểm nổi tiếng nhất là chè Mợ Tôn Đích ngay công viên Thương Bạc.</p>
                    </div>

                    <div>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/15/24h-kham-pha-3-5489-1593779694-2528-5276-1650015264.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=uoKsQEViVOCkmfC3tcC0dQ" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/15/24h-kham-pha-18-4859-159377969-6128-5517-1650015265.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=-DMpeUNUJw-gKoRuLbLMGQ" />
                            </Card>
                        </CardGroup>
                    </div>
                    <div>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/15/24h-kham-pha-15-4093-159377969-8197-4753-1650015266.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=LB-_DsgT0fnMvPIaA5-Pcg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/15/24h-kham-pha-16-5532-159377969-1373-6670-1650015267.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=MidQ9mvyI4Bur00DCtYwFw" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/15/106296049-1648085505357633-132-3333-8421-1650015268.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=NPZXvOwVuqtiG6RUdBAtQQ" />
                            </Card>
                        </CardGroup>
                        <p>Để tìm quán ăn chuẩn vị người Huế, bạn hãy thử tìm những nơi nằm trong góc, hẻm với biển hiệu càng cũ, mộc mạc hoặc không đề biển thì càng ngon. Tên quán bắt đầu bằng "Mụ", "Mệ", "O", "Bé" thì hầu hết đầu bếp là người Huế gốc, các món ăn càng chuẩn vị nhất. Đặc biệt, chủ quán càng già bán đồ ăn càng ngon.</p>
                        <p>Địa chỉ ăn uống gợi ý ở Huế:</p>
                        <ul id="eat">
                            <li>Bún bò Huế số 47 Nguyễn Công Trứ, 20 Bạch Đằng, 17 Hùng Vương...</li>
                            <li>Bánh bèo nậm lọc O Lé, kiệt 104/17/9 Kim Long</li>
                            <li>Bánh Huế Lưu Ngọc, số 70 Kim Long</li>
                            <li>Bánh ướt thịt nướng Huyền Anh, 52/11, Kim Long</li>
                            <li>Cơm hến Hoa Đông, số 64 kiệt 7 Ưng Bình</li>
                            <li>Thịt luộc cuốn tôm chua ở dọc bờ sông An Cựu</li>
                            <li>Chợ Đông Ba</li>
                        </ul>
                    </div>


                    <div>
                        <h3>| Chơi</h3>
                        <p>Một trải nghiệm "không buồn" về đêm ở Huế là khám phá phố Tây trên tuyến đường Phạm Ngũ Lão, Chu Văn An và Võ Thị Sáu. Nơi này là địa chỉ quen thuộc của các bạn trẻ và du khách nước ngoài như phố Tạ Hiện (Hà Nội) và Bùi Viện (TP.HCM). Con phố nhộn nhịp nhất từ 21h - 23h, với không gian sôi động, tấp nập của các quán bar, pub, nhà hàng, cà phê nhạc sống, shop quần áo... Cuối tuần, nơi đây trở thành tuyến phố đi bộ từ 18h - 2h sáng hôm sau (thứ sáu và thứ bảy), riêng chủ nhật là từ 18h - 24h. Một số quán gợi ý là Tà Vẹt, 912, Taboo, Gecko...</p>
                        <p>Xem bắn súng thần công ở Kỳ Đài là trải nghiệm không nên bỏ lỡ. Kỳ Đài, hay còn được gọi là Cột Cờ Kinh thành Huế được xây vào năm 1807 dưới thời vua Gia Long. Trước đây, trên mặt đài có hai điếm canh và pháo xưởng để bố trí các khẩu súng. Ngày nay, du khách tham quan có thể đến đây vào 20h tối thứ bảy hàng tuần để xem biểu diễn tái hiện bắn súng thần công.</p>
                        <img id="mist" src="https://laque.vn/wp-content/uploads/2021/08/quan-nhau-quan-bar-o-hue-laquevn-2.jpg" alt="" />
                        <p>Để đổi gió với những trải nghiệm mới mẻ tại Huế, bạn có thể khám phá một số khu vui chơi như Epark - Tam Giang Lagoon, suối khoáng nóng Alba Thanh Tân, Khu du lịch sinh thái Pârle A Lưới, nông trại Green Life Farm, Khu du lịch Suối Voi...</p>
                    </div>
                </div>

            </div>
            <div>
                <img id="endpic" src="https://i1-dulich.vnecdn.net/2022/04/15/Hue-8108-1650021153.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=4WAMYsJBGTH5EfS3s7bB0Q" alt="" />
            </div>
        </div >
    )
}
export default Hue;