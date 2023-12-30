import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './hoian.css'

function Hoian() {
    const vid = { marginLeft: 'auto', marginRight: 'auto', display: 'block', marginBottom: '3%' }
    const luutru = { margin: '1%' }
    return (
        <div className="chu">
            <div className="headpic">
                <img src="https://i1-dulich.vnecdn.net/2022/04/14/HoiAn2-1649913055-1163-1649913061.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=17mImAUV2r5rtYvGR9p5lg" />
                <p>Du Lịch Hội An</p>
            </div>
            <div className="container">
                <p>Nằm bên bờ bắc hạ lưu sông Thu Bồn, Hội An là một đô thị cổ tại Quảng Nam, cách thành phố Đà Nẵng hơn 30 km, cách Huế 122 km. Nhắc tới Hội An là phải kể tới các dãy nhà cổ màu vàng nghệ, dòng sông lung linh hoa đăng khi đêm xuống, hay những món ăn ngon giá bình dân.</p>
                <div className="body">
                    <h2>Hội An mùa nào đẹp?</h2>
                    <p>Khí hậu Hội An đan xen khí hậu giữa miền Nam và miền Bắc, rõ rệt mùa mưa và mùa khô. Mỗi mùa phố cổ lại có những nét đẹp riêng.</p>
                    <p>Ba tháng đầu năm là thời gian lý tưởng nhất để rong chơi tại Hội An khi nắng không quá gắt, trời mát mẻ, thi thoảng có mưa nhỏ.</p>
                    <p>Từ tháng 4 đến tháng 6 là giai đoạn gay gắt của mùa khô, nhưng thời tiết Hội An khá dễ chịu, do nằm ở phía nam dãy Trường Sơn. Đây cũng là mùa cao điểm du lịch.</p>

                    <div className="row">
                        <div class="column">
                            <p>Tháng 7 vẫn đang là mùa khô. Sang tháng 8 và 9 là thời điểm giao mùa. Trời vẫn nắng nhẹ, bắt đầu có mưa lác đác và se lạnh về đêm.</p>
                            <br />
                            <p>Ba tháng cuối năm là mùa mưa ở Hội An, trời ít khi nắng, mưa nặng hạt và đôi khi có lũ lụt. Những du khách từ miền Nam đến Hội An mùa lạnh nên chuẩn bị trang phục phù hợp, tránh để sức khỏe bị ảnh hưởng.</p>
                        </div>

                        <div class="column">
                            <img src="https://i1-dulich.vnecdn.net/2022/06/01/Hoi-An-3-8647-1648804825-3089-1241-4455-1654057242.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=ohuonxHjmqOCRYcPu_F03g" />
                            <p id="smpic">Mùa mưa, không ít khách du lịch vẫn tìm đến Hội An để có những trải nghiệm khác lạ. Ảnh: Đỗ Anh Vũ</p>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h2>Di chuyển</h2>
                        <p>Các hãng hàng không Vietnam Airlines, Vietjet Air, Bamboo Airlines... đều khai thác đường bay tới Đà Nẵng. Giá vé khứ hồi cho một người từ Hà Nội hoặc TP HCM đến Đà Nẵng trung bình khoảng 1,5 triệu đồng. Bạn nên mua vé sớm để có giá tốt và giờ khởi hành thuận tiện.</p>
                        <p>Đến sân bay Đà Nẵng, bạn có thể chọn đi xe khách trung chuyển từ sân bay, hoặc đi bus, taxi, ôtô riêng để tới trung tâm Hội An. Những người thích tự do đi lại có thể thuê xe máy từ TP Đà Nẵng để vui chơi ở Hội An, với giá khoảng 150.000 đồng một ngày.</p>
                        <p>Nếu đi xe bus bạn bắt tuyến số 01 Đà Nẵng - Hội An chạy từ 5h30 đến 17h50 hàng ngày với giá vé 20.000 đồng mỗi người. Nếu đi ba người trở lên và muốn di chuyển nhanh gọn từ sân bay thẳng tới Hội An, bạn nên gọi taxi, xe khách trung chuyển với giá từ 250.000 đồng một chuyến.</p>
                        <p>Để di chuyển ở Hội An bạn có thể sử dụng xe đạp, xe máy thuê từ chính các khách sạn, homestay mình ở. Xe đạp giá thuê khoảng 30.000 đồng một ngày, xe máy là 120.000 đồng.</p>
                        <iframe style={vid} width="100%" height="630px" src="https://www.youtube.com/embed/yUi0dX2U8DQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <h2>Khách sạn, homestay</h2>
                        <p>Hội An mỗi mùa có một vẻ đẹp riêng, nhưng thu hút đông khách nhất vẫn là dịp hè. Do đó nếu đi mùa này bạn nên tìm hiểu nơi ở để đặt phòng càng sớm càng có giá tốt, đặc biệt là những ngày cuối tuần.</p>
                        <p>Homestay ở Hội An cũng mọc lên nhanh chóng những năm gần đây, có thể phục vụ mọi đối tượng từ khách đi một mình, theo nhóm hay gia đình. Không chỉ là một nơi sạch sẽ để ngủ, các homestay đều được chăm chút với kiến trúc, nội thất độc đáo, vườn cây xinh xắn, phòng rộng và thoáng. Giá các homestay Hội An rất rẻ, không dao động nhiều dù vào mùa cao điểm, từ 200.000 đồng một đêm cho một người.</p>
                        <p>Một số homestay đẹp được các bạn trẻ truyền tai nhau là Maison de Tau, Under The Coconut Tree, An Bàng Beach Hideaway, Heron House, Le Bleu...</p>
                        <img id="homestay" src="https://i1-dulich.vnecdn.net/2022/06/01/Hoi-An-6212-1649912858-6189-1654057242.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=KXO4XiZJDEnfGUvsYzspOw" />
                        <p id="ks">Hoa sử quân tử màu đỏ hay hoa giấy màu hồng, cam, trắng nở khắp các ngõ phố ở Hội An vào hè. Ảnh: Hương Chi</p>
                    </div>
                    <div>
                        <h2>Chơi đâu?</h2>
                        <h3>| Quán cà phê</h3>
                        <p>Đối với đồ uống ngoài món nước thảo mộc, trà và cà phê ở Hội An cũng ngon không kém. Hơn nữa mỗi quán trà, cà phê ở khu phố cổ lại mang một nét hấp dẫn riêng.</p>
                        <p>Nhiều quán nằm sâu trong những căn nhà có tuổi thọ hàng trăm năm, quán lại nằm trên tầng thượng nên khách có thể vừa ngắm phố vừa nhâm nhi đồ uống, hoặc quán có nhân viên phục vụ đều là người khiếm thính...</p>
                        <p>Người thích ngắm Hội An từ trên cao có thể tới Faifo Café nằm trên tầng 3 một ngôi nhà ở đường Trần Phú. Nếu muốn không gian tĩnh lặng có thể tới quán trà Reaching Out, hoặc thưởng thức kem với cà phê thơm ngon ở Hoi An Roastery...</p>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/01/du-lich-Hoi-An-0113-8197-16488-1260-6061-1654057243.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=3emiWd9zFmQgTwuXj0QBJQ" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/01/du-lich-Hoi-An-22-9229-1648804-6704-9093-1654057243.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=qjhPMXdzZuZhoj_8uBAVpw" />
                            </Card>
                        </CardGroup>
                        <br />
                        <p>Ngoài ra nếu chịu khó tìm kiếm trong các ngõ ngách phố cổ bạn còn phát hiện ra nhiều quán trà, cà phê vừa đậm chất phố Hội, vừa mang hơi thở hiện đại bởi thu hút không ít du khách nước ngoài.</p>
                        <p>Rời trung tâm phố Hội 4-7 km, du khách có thể khám phá các quán cà phê giữa đồng lúa như Roving Chillhouse, Cà phê Xóm Chiêu, Cà phê Lò Gạch Cũ... để tận hưởng không khí trong lành.</p>
                    </div>

                    <div>
                        <h3>| Phố cổ</h3>
                        <p>Chỉ riêng khu phố cổ Hội An cũng là một nơi đi mỏi chân cũng không hết điểm check-in cho các bạn trẻ. Mỗi con đường, góc phố cổ kính, dãy nhà quét ve vàng nghệ lại là một điểm dừng chân chụp ảnh thú vị, tìm hiểu văn hóa địa phương...</p>
                        <p>Với vé tham quan giá 80.000 đồng cho một người giá trị trong 24h bạn có cơ hội tham quan ba trong số những điểm di tích nổi bật nhất ở phố cổ. Đó là Chùa Cầu, các hội quán Phúc Kiến, Quảng Triệu, Hải Nam, Triều Châu, các nhà cổ Quân Thắng, Đức An, Phùng Hưng, Tấn Ký... Ngoài ra vé tham quan cũng bao gồm các hoạt động nghệ thuật đường phố, trò chơi dân gian, chợ đêm... diễn ra sau 7 giờ tối.</p>
                        <img id="phoco" src="https://i1-dulich.vnecdn.net/2022/06/01/Hoi-An-VnExpress-5851-16488048-4863-2250-1654057244.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Z2ea_f0O7kgGZllKmJF92g" />
                        <p>Các hoạt động trên sông Hoài thường nhộn nhịp nhất từ 18h đến 22h. Để đi thuyền, bạn thuê 200.000 đồng một thuyền và mua hoa đăng thả với giá 10.000 đồng một chiếc.</p>
                        <p>Về đêm ở phố cổ, bạn có thể dạo các cây cầu ngắm phố lên đèn, nghe nhạc sống trong các quán bar, cà phê, xem các vở diễn nổi tiếng như Sương Sớm, À Ố Show, Teh Dar hay Ký ức Hội An.</p>
                    </div>

                    <div>
                        <h3>| Bãi biển</h3>
                        <p>Bãi biển An Bàng thuộc phường Cẩm An, cách trung tâm thành phố Hội An 3 km. Biển trong xanh, sạch, không quá xô bồ, không gian vừa đủ để bạn cảm nhận sự thư thái. Năm 2011, bãi biển An Bàng được CNN bình chọn là một trong 50 bãi biển đẹp nhất thế giới.</p>
                        <p>Bãi biển Hà My năm 2017 được báo Anh Telegraph chọn là một trong 10 bãi biển đẹp nhất châu Á. Nằm cách An Bàng 3,5 km, cách danh thắng Ngũ Hành Sơn 6 km, và cách trung tâm Hội An gần 7 km, bãi biển Hà My không quá nổi bật nhưng vẫn mang vẻ thanh bình và nét cuốn hút riêng. Tuy cách khá xa trung tâm, Hà My không thiếu homestay hay khách sạn, resort cho du khách lựa chọn.</p>
                        <p>Bãi biển Cửa Đại là một điểm đến quen thuộc của Hội An, năm 2013 đã được Tripadvisor bình chọn vào top 25 bãi biển đẹp nhất châu Á. Cửa Đại nằm cách trung tâm Hội An 5 km, là bãi tắm rộng khoảng vài chục ha với bãi cát trắng mịn, nước trong xanh, sóng nhỏ. Du khách có thể nằm hàng giờ trên cát để tắm nắng, nghe sóng vỗ rì rào, hoặc đi câu cá gần bờ, thuê thuyền đi lênh đênh cùng dân chài, hay tham gia các môn thể thao dưới nước...</p>
                        <img id="bien" src="https://i1-dulich.vnecdn.net/2022/06/01/bai-bien-Hoi-An-1528-164880482-2490-3208-1654057245.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=lgMTAFciz_tjnRyoKPahww" />
                        <p id="beach">Gần Hội An nhất là biển Cửa Đại, bãi biển An Bàng nằm xa hơn nhưng có sức hút hơn bởi cát trắng mịn và yên tĩnh, tránh xa các dịch vụ du lịch ồ ạt. Ảnh: Driendl Group</p>
                    </div>

                    <div>
                        <h3>|Cù Lao Chàm</h3>
                        <p>Nếu bạn xuất phát từ Hội An có 2 phương tiện để ra Cù Lao Chàm là cano và tàu gỗ. Cano thường xuất bến ở Cửa Đại và chỉ khoảng 20 phút sau là bạn có mặt tại Cù Lao Chàm, giá vé là 150.000 - 200.000 đồng mỗi người. Còn đi tàu gỗ xuất phát từ bến Bạch Đằng thì mất gần 2 tiếng nhưng giá rẻ hơn, khoảng 50.000 - 80.000 đồng mỗi người, nếu mang theo xe máy thì thêm 30.000 đồng mỗi chiếc.</p>
                        <p>Ở Cù Lao Chàm dịch vụ lưu trú chủ yếu là homestay, nhà nghỉ hoặc cho thuê lều trung bình 100.000 - 150.000 đồng mỗi phòng cho 1-2 người lưu trú. Giá thuê lều chừng 100.000 đồng một đêm.</p>
                        <p>Không chỉ cung cấp dịch vụ ăn, ngủ, nghỉ, những nhà nghỉ và homestay ở đây còn cung cấp các dịch vụ du lịch biển Cù Lao Chàm như: ăn uống, cho thuê xe, tàu thuyền tham quan đảo, lặn biển ngắm san hô, câu cá, đi bộ dưới đáy biển...</p>
                        <p>Những điểm tham quan là Nhà bảo tàng biển Cù Lao Chàm, Chùa Hải Tạng, Giếng cổ Chăm, Chợ Tân Hiệp, đảo Yến, miếu tổ nghề Yến, bãi Đá Chồng...</p>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/01/Cu-Lao-Cham-Hoi-An-6026-164880-7182-4744-1654057245.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=FhVOrlt2BrZHfRVpcIEKBg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/01/Cu-Lao-Cham-Hoi-An-2-5815-1648-1301-9374-1654057246.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=B73ErDN3ZnyqXYDWDGg8tw" />
                            </Card>
                        </CardGroup>
                    </div>

                    <div>
                        <h3>|Lịch trình tham khảo</h3>
                        <p>
                            <ul>
                                <li>Ngày 1: Di chuyển đến Hội An, khám phá ẩm thực, hội quán, nhà cổ...</li>
                                <li>Ngày 2: Thăm làng nghề, ngắm hoàng hôn, ăn hải sản ở biển An Bàng</li>
                                <li>Ngày 3: Khám phá đời sống trên Cù lao Chàm</li>
                                <li>Ngày 4: Thăm rừng dừa Bảy Mẫu, di chuyển về Hà Nội hoặc TP HCM</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <h2>Đặc sản</h2>
                        <img id="food" src="https://i1-dulich.vnecdn.net/2022/06/01/dac-san-Hoi-An-2745-1648800163-6415-4954-1654057250.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=ntlScvCF711_ASWEQKTknA" />
                        <p>Tới Hội An du khách không bao giờ sợ đói và thiếu lựa chọn đồ ăn. Từ sáng sớm tới tối khuya phố Hội luôn đầy ắp hàng quán mở đón khách ăn uống tấp nập. Giá cả còn rất "dễ chịu" với các món chè bán vỉa hè chỉ 5.000 - 10.000 đồng một cốc, bánh mì giá 15.000 - 25.000 đồng một ổ hay tô cao lầu, mì Quảng chỉ 25.000 đồng.</p>
                        <p>Những địa chỉ ăn uống nổi tiếng mà du khách Việt hay nước ngoài không thể bỏ qua là: cơm gà Bà Buội, bánh mì Phượng, bánh mì Madam Khánh, bánh xèo Giếng Bá Lễ, cơm chay chợ Hội An, nước thảo mộc Mót Hội An, cao lầu Thanh...</p>
                        <p>Đồ ăn vặt bán vỉa hè của Hội An, đặc biệt các món ngọt cũng không thể đếm xuể. Thực khách hảo ngọt nên thử qua kem ống, các loại chè xoa xoa, chè hạt sen, chè đậu ván, tào phớ, bánh xoài, bánh da heo...</p>
                    </div>
                </div>
            </div>
            <div>
                <img id="endpic" src="https://i1-dulich.vnecdn.net/2022/06/01/Hoi-An-293201-7836-1648804826-9879-5316-1654057251.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=U5vQZ49H1C5DOMTEhDVXfQ" alt="" />
            </div>

        </div>
    )
}

export default Hoian;