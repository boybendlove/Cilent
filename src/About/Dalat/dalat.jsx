import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './dalat.css'


function Dalat() {
    const train = { textAlign: 'center' }
    const luutru = { padding: '0.8%' }
    const vid = { marginLeft: 'auto', marginRight: 'auto', display: 'block', marginBottom: '3%' }
    const dulichhue = { textAlign: 'center', marginTop: '2%' }

    return (
        <div className="chu">
            <div className="headpic">
                <img src="https://i1-dulich.vnecdn.net/2022/04/25/11BuoisangbinhyenDoicohonghoDa-8476-1276-1650882782.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=YyuV89dDmXb9-Q6R9CdG0w" />
            </div>

            <div className="container">
                <div style={dulichhue}>
                    <p id="title">Du Lịch Đà Lạt</p>
                </div>
                <p>Đà Lạt là thủ phủ tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên ở độ cao 1.500 m so với mực nước biển. Cách TP HCM khoảng 300 km và có khí hậu mát mẻ năm nên Đà Lạt là điểm nghỉ dưỡng lý tưởng, giúp du khách thoát khỏi nóng nực của vùng Nam Bộ.</p>
                <div className="body">
                    <h2>Đà Lạt mùa nào đẹp?</h2>
                    <p>Khí hậu Đà Lạt mát mẻ quanh năm nhờ vị trí địa lý thuộc vùng cao của Tây Nguyên. Tháng 1-4 là mùa xuân nên phố núi rực rỡ sắc màu của rất nhiều loài hoa như mai anh đào, ban trắng, phượng tím...</p>
                    <p>Tháng 10-12 Đà Lạt vào mùa khô và lạnh. Du khách đi dịp này sẽ có cơ hội ngắm hoa dã quỳ nở rực vàng, những đồi cỏ hồng lung linh trong sương sớm hoặc cảnh tượng mây phủ kín núi đồi ở ngoại ô.</p>

                </div>
            </div>
            <div className="container">
                <div className="body">
                    <div>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/26/1-6354-1650966119.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=vnxk0WlKEtZlkQG4LaqkVg" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/26/12-Thong-dong-Doi-co-hong-ho-D-4621-9791-1650966119.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=tKm9Xa62Cese4iwJlmYHcA" />
                            </Card>
                        </CardGroup>
                    </div>


                    <div>
                        <h2>Di chuyển</h2>
                        <p>Máy bay: Vietnam Airlines, Bamboo Airways, Vietjet Air đều khai thác các chặng đến sân bay Phú Bài, Huế. Thời gian bay từ Hà Nội là khoảng 1 tiếng 15 phút, giá vé khứ hồi từ 1.600.000 đồng. Thời gian bay từ TP HCM là khoảng 1 tiếng 30 phút, giá vé khứ hồi từ 1.300.000 đồng.</p>
                        <img id="dhv" src="https://static.vinwonders.com/2022/12/du-lich-hue-1.jpg" alt="" />
                        <p>Phần lớn du khách các tỉnh miền Bắc và Bắc Trung Bộ chọn máy bay để tới thẳng Đà Lạt. Khu vực phía Nam và Nam Trung Bộ có thể đi máy bay hoặc ôtô.</p>
                        <p>Vé Hà Nội - Đà Lạt từ 900.000 đồng/chiều.</p>
                        <p>Vé Đà Nẵng - Đà Lạt từ 1 triệu đồng/chiều.</p>
                        <p>Vé TP HCM - Đà Lạt từ 500.000 đồng/chiều.</p>
                        <p>Vé Cần Thơ - Đà Lạt từ 1,1 triệu đồng/chiều.</p>
                        <p>Từ TP HCM cách di chuyển tiết kiệm nhất là xe khách giường nằm chạy đêm sẽ tới Đà Lạt vào sáng sớm. Giá vé xe giường nằm cho một người từ 270.000 đồng/chiều.</p>
                        <p>Tại Đà Lạt, du khách thuê xe máy, ôtô, taxi hoặc sử dụng các ứng dụng gọi xe công nghệ để di chuyển giữa các điểm tham quan. Giá thuê xe máy từ 120.000 đồng/ngày. Giá thuê ôtô tự lái từ 700.000 đồng/ngày.</p>

                    </div>

                    <div>
                        <h2>Lưu trú</h2>
                        <p>Tùy theo túi tiền và sở thích, du khách có thể lựa chọn từ dạng nhà nghỉ, homestay cho đến khách sạn, khu nghỉ dưỡng, biệt thự cao cấp. Khách thích mua sắm ăn uống ở thành phố nên chọn ở gần trung tâm, nhưng với người yêu thiên nhiên tránh sự xô bồ hãy đặt phòng ở khu vực ngoại ô.</p>
                        <p>Cắm trại sang chảnh (glamping) cũng là một xu hướng lưu trú mới của du khách hiện nay khi đến Đà Lạt. Hình thức này thích hợp với giới trẻ, các gia đình nhỏ đi vào dịp cuối tuần, kỳ nghỉ lễ để vừa muốn gần gũi thiên nhiên vừa có những tiện nghi cơ bản. Một số điểm phải kể tới như Twin Beans Farm, CampArt #Mợ Jen, Dalat Camp...</p>
                    </div>

                    <div>
                        <h2>Điểm tham quan</h2>
                        <h3>Điểm đến lịch sử, kiến trúc, tôn giáo</h3>
                        <p>Đà Lạt được hình thành từ năm 1893, thời điểm bác sĩ Pháp Alexandre Yersin lần đầu đặt chân đến cao nguyên Lâm Viên. Từ giữa thập niên 1910 người Pháp đến Đà Lạt và xây dựng nơi này không chỉ thành một thiên đường nghỉ dưỡng mà còn là thành phố xinh đẹp với những biên thự, công sở, trường học, khách sạn...</p>
                        <p>Nhiều công trình thời đó hiện trở thành điểm tham quan hấp dẫn du khách như Ga Đà Lạt với tuyến tàu du lịch Đà Lạt - Trại Mát, Viện sinh học Tây Nguyên (Bảo tàng sinh học Tây Nguyên), Bảo tàng Trà ở Cầu Đất, Trường cao đẳng sư phạm Đà Lạt, Nhà thờ chính tòa Đà Lạt, Nhà thờ Domaine de Marie...</p>
                        <p>Hệ thống Dinh I, II, II thời vua Bảo Đại, Dinh Tỉnh Trưởng, Biệt điện Trần Lệ Xuân, Dinh Nguyễn Hữu Hào... cũng là điểm đến hấp dẫn với người yêu lịch sử và kiến trúc cổ. Ngoài ra, du khách có thể tham quan thêm các kiến trúc độc đáo như Biệt thự Hằng Nga, chùa "ve chai" Linh Phước, chùa Linh Quy Pháp Ấn, hoặc Vườn ánh sáng Lumiere.</p>
                        <iframe style={vid} width="100%" height="630px" src="https://www.youtube.com/embed/oD59FMwJitE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/26/gadalat-vnexpress3-1539613410-4423-1650966119.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=p19Yf8muJYz25Ue7oNW9uw" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/26/4-1619515847-9834-1650966120.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=LeYYp4zL9SQ6W6HsCozOFg" />
                            </Card>
                        </CardGroup>
                    </div>

                    <div>
                        <h3>Điểm đến thiên nhiên</h3>
                        <p>Đà Lạt có rất nhiều điểm đến thiên nhiên để khám phá trong ngày hoặc 1-2 ngày như vườn quốc gia Bidoup - Núi Bà, hồ Tuyền Lâm, thác Datanla, Prenn, Voi, Pongour, hồ Suối Vàng...</p>
                        <p>Đối với những người mê săn mây, sương, hoàng hôn và cắm trại qua đêm trên núi thì đồi Đa Phú, Thiên Phúc Đức, Trọc, đồi chè Cầu Đất, đỉnh Hòn Bồ... là thích hợp nhất.</p>
                        <p>Ngoài ra, vườn hoa thành phố, vườn cẩm tú cầu ở Trại Mát, vườn oải hương hồ Tuyền Lâm, làng hoa Vạn Thành... cũng là điểm check-in không thể bỏ qua ở Đà Lạt.</p>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2022/04/26/huongchi-1602641889-3253-1650966120.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=ZMiBMabYhTeTf8rjb_gp_A" alt="" />
                        <p className="smpic">Săn mây ở đồi Đa Phú. Ảnh: Hương Chi</p>
                    </div>

                    <div>
                        <h2>Ăn uống</h2>
                        <p><b>Bánh ướt lòng gà</b> là món ăn có vị chua do ăn kèm với gỏi gà, không giống với bánh ướt ăn với chả thường thấy. Khi ăn thực khách sẽ cảm nhận được bánh ướt dẻo thơm, thịt gà, lòng gà quyện trong vị nước mắm chua ngọt vừa phải kèm vị nồng từ rau thơm.</p>
                        <p><b>Bánh mì xíu mại</b> là món thích hợp cho bữa sáng du khách nhất định phải thử. Món gồm bánh mì nóng ăn với những viên xíu mại tròn và chén nước dùng thêm chút mỡ, hành xanh cùng sa tế cay.</p>
                        <p> <b>Bánh căn</b> du nhập vào Đà Lạt từ các vùng miền khác, chế biến không quá cầu kỳ. Bánh được đổ khuôn bằng bột gạo, nhưng lại trở nên đặc biệt và để lại ấn tượng với thực khách khi nhân bánh biến tấu với nhiều vị đa dạng.</p>
                        <p><b>Bánh tráng nướng</b> làm từ bánh tráng đập thêm trứng gà, phô mai, pate gan, bò khô, mayonaise lên trên. Bánh nướng bếp than hồng thơm phức và nóng hổi. Chỉ vài phút là có một đĩa bánh đã cắt miếng ăn kèm tương ớt.</p>
                        <p>Lẩu gà lá é cũng là món du nhập nhưng làm du khách nào tới cũng khó lòng bỏ qua. Thịt gà ngon mềm, nấm ngọt, măng giòn và vị the nhẹ của lá é khiến thực khách khó quên, đặc biệt khi thưởng thức giữa tiết trời lành lạnh.</p>
                    </div>

                    <div>
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/26/Dalat-VnExpress10-9042-1547564-5372-5866-1650966120.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1mw_pKVw-f9xmh4KZOIDmQ" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/26/Dalat-VnExpress11-5366-1547564-1245-1597-1650966120.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=JZSaK1-PWcnvyuwDBBkD8A" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/04/26/Dalat-VnExpress19-3428-1547564-1356-6582-1650966120.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=P48uT5i_U70pjUMgr9pJOQ" />
                            </Card>
                        </CardGroup>

                    </div>

                    <div>
                        <p>Ngoài những món ăn đặc trưng trên, đến Đà Lạt du khách dạo chợ và những khu phố trung tâm sẽ tìm thấy từ món ăn vặt như súp cua, xôi, kem bơ, sữa đậu cho tới các loại bún riêu, bò, thịt nướng ống tre, ốc bươu nhồi thịt, nem nướng...</p>
                        <p>Người mê cà phê sẽ nhận ra Đà Lạt cũng là thiên đường của đồ uống này. Không chỉ pha chế cà phê ngon, những hàng quán ở đây còn được không gian hấp dẫn với rất nhiều phong cách riêng. Du khách có thể thưởng thức cà phê ẩn trong rừng, phong cách Nhật Bản, check-in với gương...</p>
                    </div>
                </div>
            </div>
            <div>
                <img id="endpic" src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/tong-hop-hinh-anh-da-lat-dep-mong-mo-lang-man-nhat.jpg" alt="" />
            </div>
        </div >
    )
}
export default Dalat;