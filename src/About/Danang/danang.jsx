import React from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './danang.css'

const train = { textAlign: 'center' }
const luutru = { margin: '1%' }
const vid = { marginLeft: 'auto', marginRight: 'auto', display: 'block', marginBottom: '3%' }


function Danang() {
    return (
        <div className="chu">
            <div className="headpic">
                <img src="https://i1-dulich.vnecdn.net/2022/06/01/CauVangDaNang-1654082224-7229-1654082320.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=MeVMb72UZA27ivcyB3s7Kg" />

            </div>

            <div className="container">
                <p id="title">Du Lịch Đà Nẵng</p>
                <p>Thành phố Đà Nẵng nằm ở miền Trung, chia đều khoảng cách giữa thủ đô Hà Nội và TP HCM. Đà Nẵng còn là trung tâm của 3 di sản văn hóa thế giới là Cố đô Huế, phố cổ Hội An và thánh địa Mỹ Sơn. Phía bắc Đà Nẵng giáp tỉnh Thừa Thiên - Huế, phía tây và nam giáp tỉnh Quảng Nam, phía đông giáp biển Đông.</p>
                <div className="body">
                    <h2>Đà Nẵng mùa nào đẹp?</h2>
                    <p>Đà Nẵng là nơi chuyển tiếp đan xen giữa khí hậu miền Bắc và miền Nam, với tính trội là khí hậu nhiệt đới ở phía Nam. Mỗi năm có hai mùa rõ rệt: mùa khô từ tháng 1 đến tháng 7 và mùa mưa từ tháng 8 đến tháng 12, đôi khi có những đợt rét mùa đông nhưng không kéo dài và trời không rét đậm.</p>
                    <p><b>Cuối tháng 12 đến cuối tháng 3:</b> Tiết trời mát mẻ và dễ chịu, lý tưởng nhất cho các chuyến du xuân. Giá cả dịch vụ khách sạn, ăn uống vào thời gian này được cho là bình ổn nhất trong năm. Lưu ý, du khách nên mang thêm áo khoác mỏng vì trời có thể se lạnh vào buổi tối, thi thoảng có mưa xuân.</p>
                    <p><b>Đầu tháng 4 đến giữa tháng 9:</b> Đây là thời gian đẹp nhất để du lịch Đà Nẵng, song cũng là mùa cao điểm du lịch hè, khá đông đúc và đắt đỏ. Tháng 4 là mùa cây rừng thay lá vàng, lá đỏ trên bán đảo Sơn Trà.</p>
                    <p><b>Giữa tháng 9 đến cuối tháng 12:</b>Trời không còn nắng nóng, bắt đầu lác đác mưa rào nhưng không kéo dài. Mùa cao điểm đã qua, nên vé máy bay, dịch vụ lưu trú, ăn uống có giá cả hợp lý.</p>
                </div>
            </div>
            <div>
                <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/da-nang-1-4913-1654169672.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=mNEpnicM3GKbMoBJ2htqUQ" alt="" />
            </div>
            <div className="container">
                <div className="body">
                    <p id="smpic">Đà Nẵng trong sương. Ảnh: Nguyễn Sanh Quốc Huy</p>
                    <p>Nếu đang lên kế hoạch đến Đà Nẵng năm 2022, bạn có thể tham khảo một số sự kiện sắp tới: Lễ hội "Tuyệt vời Đà Nẵng 2022" kéo dài suốt tháng 7; Lễ Hội Giao lưu Văn hóa Việt Nam – Nhật Bản 15/7; Lễ hội giao lưu văn hóa Việt Nam - Hàn Quốc từ 1 đến 4/9; Lễ hội Du lịch Golf Đà Nẵng 1/9; Lễ Hội "Đà Nẵng Chào Năm Mới 2023" vào 1/12...</p>
                    <div>
                        <h2>Di chuyển</h2>
                        <p>Du khách từ Hà Nội và TP HCM thường di chuyển <b>bằng máy bay</b>, với giá vé khoảng 1.300.000 - 3.000.000 đồng khứ hồi, tùy thời điểm đặt. Thời gian bay khoảng 1 tiếng.</p>
                        <p>Dư dả thời gian hơn, du khách có thể <b>đi tàu hỏa</b> để trải nghiệm ngắm cảnh dọc đường, đặc biệt là đoạn qua đèo Hải Vân nếu bạn đi từ phía bắc vào. Vé tàu từ Hà Nội hoặc TP HCM đến Đà Nẵng có giá từ khoảng 600.000 đồng đến 1.100.000 đồng một chiều, tương ứng với ghế ngồi mềm có điều hòa và giường nằm khoang bốn điều hòa. Thời gian di chuyển khoảng 17 đến 18 tiếng.</p>
                        <img id="dhv" src="https://i1-dulich.vnecdn.net/2022/06/01/tau-hoa-6702-1654080409.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Z2dWHXtZM65SsPgFiyiHEQ" alt="" />
                        <p id="smpic" style={train}>Đoàn tàu chạy qua cung đường sắt Hải Vân. Ảnh: Hà Thành</p>
                        <p>Nếu có kế hoạch tự lái ôtô, bạn cần dành ít nhất một tuần cho chuyến du lịch Đà Nẵng và nên có hai tài xế thay phiên cầm lái. Từ Hà Nội, lý tưởng nhất là xuất phát từ trưa hoặc đầu giờ chiều, nghỉ một đêm ở Nghệ An. Nếu đi muộn hơn, ngủ tại Thanh Hóa, sáng hôm sau xuất phát vào Đà Nẵng. Chiều về bạn có thể dừng ở Quảng Bình để vừa nghỉ ngơi, vừa khám phá thêm.</p>
                        <p>Tại Đà Nẵng, khách nên thuê xe máy hoặc ôtô để di chuyển linh hoạt. Việc thuê xe khá thuận tiện, có thể giao nhận tại sân bay hoặc khách sạn với giá trung bình 100.000 đồng cho xe máy và khoảng 1.000.000 đồng cho xe ôtô trong một ngày.</p>
                    </div>

                    <div>
                        <h2>Khách sạn và resort</h2>
                        <p>Du lịch tại Đà Nẵng phát triển nhanh chóng. Dọc con đường ven biển, du khách dễ dàng tìm thấy các khách sạn với nhiều mức giá khác nhau. Bên cạnh đó, Đà Nẵng còn có rất nhiều hình thức lưu trú khác như homestay, căn hộ, phòng tập thể nằm trong trung tâm. Tùy theo túi tiền và nhu cầu mà du khách có thể lựa chọn phù hợp, nhưng nên đặt trước để tránh tình trạng cháy phòng vào cuối tuần, mùa cao điểm.</p>
                        <p>Vì đầu năm thời tiết miền Trung khá lạnh về đêm, du khách nên chọn các phòng lưu trú khép kín, đầy đủ tiện nghi như nhà tắm riêng, thiết bị đun nước nóng, máy sấy tóc, bàn ủi và dịch vụ giặt sấy quần áo... Giá phòng ở các khách sạn 4 sao từ khoảng 500.000 đồng một đêm.</p>
                        <img id="hotel" src="https://i1-dulich.vnecdn.net/2022/06/02/khach-san-da-nang-3958-1654169672.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=gWLwbzJjDb16IVMiuEMFgg" alt="" />
                        <p id="smpic">Khách sạn A La Carte có bể bơi vô cực với tầm nhìn về biển. Ảnh: ALC</p>
                        <p>Những resort, khách sạn 5 sao nổi tiếng ở Đà Nẵng bạn có thể tham khảo gồm InterContinental Đà Nẵng Sun Peninsula Resort, Hyatt Regency Danang Resort and Spa, Pullman, Furama Resort Danang, Four Points by Sheraton Danang, Novotel, Hilton, Fusion Suites, Danang Golden Bay Hotel... Giá phòng dao động từ 1.200.000 đến 10.000.000 đồng một đêm.</p>
                    </div>

                    <div>
                        <h2>Chơi đâu</h2>
                        <h3>| Ngoại thành</h3>
                        <p>Địa điểm đẹp ngoài thành phố Đà Nẵng có bán đảo Sơn Trà, núi Ngũ Hành Sơn, rạn Nam Ô, đèo Hải Vân.</p>
                        <p><b>Bán đảo Sơn Trà</b></p>
                        <p>Được ví như viên ngọc quý của Đà Nẵng, bán đảo Sơn Trà đây sở hữu cánh rừng nguyên sinh rộng lớn và nhiều bãi tắm đẹp như Tiên Sa, Đá Đen, bãi Bụt... Con đường trên bán đảo uốn lượn đi qua các vị trí có thể ngắm toàn cảnh thành phố từ trên cao như đỉnh Bàn Cờ, chùa Linh Ứng, nhà Vọng Cảnh, hải đăng Sơn Trà, trạm radar "mắt thần Đông Dương".</p>
                        <p>Đến đây, du khách có thể tham gia nhiều hoạt động hấp dẫn như lặn biển ngắm san hô, câu cá cùng ngư dân, chiêm ngưỡng thành phố từ trực thăng, trên đỉnh Bàn Cờ... Đặc biệt, ngôi chùa Linh Ứng nằm trên đỉnh đồi cũng là điểm bạn không nên bỏ qua. Nơi đây đặt bức tượng Phật Quan Thế Âm cao nhất Việt Nam, hướng mặt ra biển. Trong lòng tượng gồm 17 tầng, mỗi tầng có bệ thờ 21 tượng Phật với hình dáng, tư thế và vẻ mặt khác nhau.</p>
                    </div>
                </div>
            </div>
            <div>
                <CardGroup className="multipic">
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/Ban-dao-Son-Tra-Pham-Phung-2-J-5005-7025-1654151743.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=y95l5kLEhcDgAfloeu9Sdw" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/Ban-dao-Son-Tra-Pham-Phung-6-1-4537-5585-1654151744.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=JuufYA5NHfKyifsOQTERqQ" />
                    </Card>
                </CardGroup>
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <p>Trên bán đảo có các nhánh đường phụ xuống nhiều bãi biển đẹp như Bãi Bụt, Bãi Nam, Bãi Đá Đen, Bãi Đa, Mũi Nghê... Ngoài ra, ở khu vực này còn có cây đa Sơn Trà và cây đa "con nai" nghìn năm tuổi với hình thù độc đáo thích hợp chụp ảnh.</p>
                        <p>Bán đảo cũng là nơi sinh sống của hàng trăm loài động vật. Trong đó, voọc chà vá chân nâu được mệnh danh là "nữ hoàng linh trưởng" trên bán đảo Sơn Trà, với quần thể khoảng 300 - 400 con, được bảo tồn nghiêm ngặt. Để phát hiện ra những đàn voọc này, ngoài việc quan sát màu sắc phát ra từ bộ lông, du khách cần chú ý lắng nghe khi chúng kêu hoặc nhảy từ cành này sang cành khác.</p>
                        <p>Lưu ý, du khách cần giữ gìn cảnh quan thiên nhiên, không cho động vật hoang dã ăn. Các tuyến đường bị cấm sử dụng xe tay ga gồm: đoạn từ đường Hoàng Sa đi cây đa nghìn năm; nút giao đường Yết Kiêu đi đỉnh Bàn Cờ - Bãi Bắc; nút giao đường Yết Kiêu đi Suối Ôm và ngược lại. Đây là ba tuyến chính người dân và du khách thường xuyên lên tham quan bán đảo Sơn Trà. Xe máy loại tay côn và số được đi lại bình thường.</p>
                    </div>
                </div>
            </div>

            <div>
                <CardGroup className="multipic">
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/Ban-dao-Son-Tra-Pham-Phung-8-J-9663-1318-1654151744.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=uwBPJvNw7a0wbPQkYA4NxQ" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/vooc-son-tra-jpeg-7822-1654151744.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=8meE8SUvfvAD1gB94uEWlA" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/cay-da-son-tra-da-nang-jpeg-7594-1654151744.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=-TyqQGwvYZ1QqMKOy1OAog" />
                    </Card>
                </CardGroup>
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <p>Ngoài ra, bán đảo Sơn Trà còn hấp dẫn ở những bãi biển hoang sơ. Nằm ẩn mình trong một eo biển rất đẹp, Bãi Bụt (Vịnh Bụt) là nơi giao hòa giữa biển cả với núi rừng. Ngoài ra còn có Bãi Bắc là điểm đến mới phát triển của du lịch Đà Nẵng, nằm trong vịnh biển phía bắc Sơn Trà. Vùng biển quanh bán đảo có nhiều rạn san hô đẹp, nhưng tình trạng xả rác và hành vi thiếu ý thức của một số người lặn ngắm san hô như dẫm, đạp, bẻ... gây hư hại nghiêm trọng.</p>
                    </div>
                </div>
            </div>

            <div>
                <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/Son-Tra-2238-1654169672.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=FScJfxXuNeEPtYatWhzlZg" alt="" />
            </div>
            <div className="container">
                <div className="body">
                    <div>
                        <p id="smpic">Tượng Phật Bà Quan thế âm Bồ Tát tại chùa Linh Ứng - Bãi Bụt, hướng nhìn về bán đảo, cách trung tâm Đà Nẵng khoảng 10 km. Ảnh: Võ Văn Việt</p>
                    </div>

                    <div>
                        <p><b>Suối Tiên</b></p>
                        <p>Suối Tiên là một trong những con suối lớn bắt nguồn từ đỉnh Sơn Trà - một trong những điểm đến đẹp như tiên cảnh với thác nước trắng xóa, các khối đá nhiều hình thù độc đáo, các loài hoa rừng bung nở khoe sắc cùng hương thơm ngào ngạt. Đến với suối Tiên, bạn sẽ được hòa mình và thiên nhiên tuyệt đẹp đầy sắc màu.</p>

                        <p><b>Bà Nà Hills</b></p>
                        <p>Điểm du lịch này cách Đà Nẵng khoảng 40 km. Du khách có thể trải nghiệm không khí se lạnh và thời tiết 4 mùa trong ngày khi ghé thăm các điểm tham quan nổi bật như chùa Linh Ứng, Hầm rượu Debay, vườn hoa Le Jardin D'Amour, Cầu Vàng... Ngủ đêm trên làng Pháp cũng là một trải nghiệm thú vị cho khách đến Bà Nà.</p>
                    </div>
                </div>
            </div>
            <div>
                <CardGroup className="multipic">
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/03/cau-vang-jpeg-9366-1654247848.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=lsuryIIgmI4xtUp5BVdw3g" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/03/Da-Nang-jpeg-8849-1654238180.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=flCKeJA0A-VUXjazvIOUdg" />
                    </Card>
                </CardGroup>
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <p><b>Ngũ Hành Sơn</b></p>
                        <p>Cách trung tâm Đà Nẵng 8 km, Ngũ Hành Sơn là nơi có nhiều ngôi chùa linh thiêng cùng hệ thống các hang động tự nhiên. Theo con đường ven biển trải dài hút mắt về phía Hội An, mở ra trước mắt du khách là "hòn non bộ" khổng lồ mang tên Ngũ Hành Sơn. Với các tên gọi được đặt theo thuyết ngũ hành gồm Kim Sơn, Mộc Sơn, Thủy Sơn, Hỏa Sơn và Thổ Sơn, mỗi ngọn núi ở đây lại mang trong mình những câu chuyện truyền thuyết cùng vẻ đẹp huyền bí khác nhau.</p>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/ngu-hanh-son-jpeg-8049-1654151745.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=2Kg9WS8lbP6h_6On9xKfUA" alt="" />
                        <p>Để đi hết từ động Quan Âm (Kim Sơn), Huyền Vi (Hỏa Sơn) đến động Âm Phủ, Hoa Nghiêm, Linh Nha, Huyền Không, Vân Thông, Thiên Long, Thiên Phước Địa (Thủy Sơn)..., bạn có thể sẽ mất vài ngày. Tất cả tuy không đồ sộ, hoành tráng nhưng lại mang đến nhiều cung bậc cảm xúc khác nhau nhờ vẻ đẹp linh thiêng, huyền ảo.</p>
                        <p>Lần theo những con đường xuyên núi ở Ngũ Hành, du khách sẽ bất ngờ rẽ quặt vào một hang động hay ngôi chùa nào đó. Tại Kim Sơn có chùa và động Quan Âm; Hỏa Sơn có chùa Linh Sơn và động Huyền Vi, chùa và hang Phổ Đà Sơn; Thổ Sơn có chùa Long Hoa, Huệ Quang; Thủy Sơn có chùa Tam Thai, Linh Ứng, Tam Tôn, Từ Tâm...</p>
                        <p>Các ngôi chùa ở đây hầu hết đều có thế tựa lưng vào núi, tuy nằm không quá cao nhưng tĩnh mịch, linh thiêng. Cùng với những làn gió mát dịu từ biển thổi vào và không gian xanh của núi non, cây cối, du khách sẽ dễ dàng cảm nhận được một cõi bình yên, thanh thản.</p>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/cay-di-san-3-jpeg-5022-1654151745.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=499_zPSFMfQQfDR-IBlDZA" alt="" />
                        <CardGroup className="multipic">
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/cay-di-san-jpeg-2584-1654151745.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=GZp4p07I8I-ByfcI3Y1rWQ" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/cay-di-san-ngu-hanh-son-jpeg-9179-1654151745.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=ByTjVHmVe8ozLTAX-2GfHQ" />
                            </Card>
                            <Card style={luutru}>
                                <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/ngu-hanh-son-2-jpeg-7185-1654151745.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=gqafgwPO-3c7mEz7pvifPQ" />
                            </Card>
                        </CardGroup>
                        <p>Ngoài ra, nếu muốn thử cảm giác mạo hiểm, bạn hãy trải nghiệm leo núi ở động Vân Thông hay thả từ đỉnh núi xuống độ cao 25m.</p>
                    </div>

                    <div>
                        <p><b>Đèo Hải Vân</b></p>
                        <p>Đèo Hải Vân cách trung tâm Đà Nẵng khoảng một giờ chạy xe máy. Đèo có chiều dài 21 km, với đỉnh cao nhất là 496 m so với mực nước biển. Hải Vân có nghĩa là "biển mây". Nơi này từng được Jeremy Clarkson, dẫn show truyền hình thực tế Top Gear (Anh) nhận xét là "một trong những cung đường ven biển đẹp nhất thế giới".</p>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/deo-hai-van-jpeg-2870-1654151745.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=GilXeLUCa4d0TAKOBRRlEA" />
                        <p id="smpic">Một khúc cua trên đèo Hải Vân. Ảnh: Vietravel</p>
                        <p>Hiện có hai con đường qua đèo Hải Vân: hầm đường bộ xuyên đèo Hải Vân (không dành cho xe máy) và đường đèo Hải Vân.</p>
                        <p>Hầm đường bộ xuyên đèo Hải Vân mở cửa hàng ngày, có thu phí. Thời gian đóng hầm là 3h đến 4h sáng mỗi ngày để vệ sinh, sửa chữa, bảo trì các hạng mục đường hầm. Nếu đi theo đường hầm, du khách sẽ không thể ngắm cảnh hay tham quan một số địa điểm nổi tiếng trên đèo Hải Vân.</p>
                        <p>Đường đèo Hải Vân mở cửa hàng ngày, miễn phí. Du khách nên chọn tuyến đường này nếu muốn trải nghiệm cảm giác chinh phục đèo, ngắm cảnh thỏa thích. Du khách cần lưu ý phải giảm tốc độ mỗi khi có sương phủ.</p>
                        <p>Dịp đầu năm, du khách có thể chụp ảnh "săn mây" tại khúc cua nổi tiếng, đỉnh Hải Vân Quan, khu vườn "trên mây" đối diện Hải Vân Quan, hoặc xuống làng Vân tắm biển. Thời gian tham quan lý tưởng là bình minh hoặc hoàng hôn.</p>
                        <iframe style={vid} width="100%" height="630px" src="https://www.youtube.com/embed/aXtP7nZIpEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div>
                        <h3>| Trong thành phố</h3>
                        <p><b>Những cây cầu</b></p>
                        <p>Đà Nẵng vốn được mệnh danh là thành phố của những cây cầu ở Việt Nam. Cầu Rồng, cầu quay sông Hàn, cầu Trần Thị Lý, cầu tình yêu là những điểm tham quan hút khách đến vãn cảnh, check-in. Ngay gần cầu tình yêu là tượng cá chép hóa rồng.</p>
                    </div>
                </div>
            </div>

            <div>
                <CardGroup className="multipic">
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/01/Da-Nang-4605-1654080409.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=GZE9Isqmk7Cg1LUJb0ODKw" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/01/du-lich-Da-Nang-5058-1654080409.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=SWf8tf3c2jDpiamP2_gndA" />
                    </Card>
                </CardGroup>
            </div>

            <div className="container">
                <div className="body">
                    <p>Đặc biệt, cầu Rồng đông khách hơn vào ba tối cuối tuần khi có màn trình diễn rồng phun nước, phun lửa. Từ 9h tối, nhiều du khách và người dân tập trung ở trên cầu, hai bên bờ sông Hàn hoặc các nhà cao tầng gần đó.</p>
                    <p>Các phương tiện lưu thông hai đầu cầu được dừng lại trong 15 phút của show diễn. Du khách nên chọn hướng đứng phù hợp, hoặc mặc áo mưa, che ô để tránh bị ướt khi xem màn trình diễn phun nước.</p>
                    <iframe style={vid} width="100%" height="630px" src="https://www.youtube.com/embed/wdH6LG4B1RE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <p>Cầu Sông Hàn là cầu quay đầu tiên của Việt Nam. Cầu sông Hàn có chiều dài 487,7 m rộng 12,9 m với 11 nhịp trong đó có hai nhịp dây văng. Phần cầu nằm trên trụ giữa sông có thể quay 90 độ song song theo phương dòng chảy để tàu lớn qua lại. Công trình còn là biểu tượng của sự kết hợp, đồng thuận giữa chính quyền và nhân dân, do người dân Đà Nẵng góp tiền xây dựng.</p>
                    <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/Cau-Song-han-da-nang-5702-1654169673.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=9Udk4r73laHLOIogMrhR4g" />
                    <p id="smpic">Cầu sông Hàn là một phần hình ảnh logo của thành phố Đà Nẵng và cũng hiện diện trên biển tên đường phố Đà Nẵng. Ảnh: Hà Thành</p>
                    <p><i>Cầu Thuận Phước</i> là cầu dây võng lớn nhất Việt Nam. Cầu có chiều dài 1.856 m, chiều rộng 18 m, có hai mố ở hai đầu cầu và hai tháp trụ treo cáp cắm xuống lòng sông.</p>
                    <p><i>Cầu Trần Thị Lý</i> mang tên nữ anh hùng trong kháng chiến chống Mỹ quê ở Quảng Nam. Cầu nằm về phía nam cầu Rồng, cách cầu Rồng khoảng 1,5 km. Trước đây có một cây cầu cũ cùng tên, song đã được thay thế bởi cây cầu mới như hiện nay.</p>
                </div>
            </div>
            <div>
                <CardGroup className="multipic">
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/Cau-Thuan-Phuoc-da-nang-8559-1654169673.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=730odDMw1Dpm_-IyaPF4sg" />
                    </Card>
                    <Card style={luutru}>
                        <Card.Img variant="top" src="https://i1-dulich.vnecdn.net/2022/06/02/Cau-Tran-Thi-Ly-da-nang-6742-1654169673.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=n4MY_CKdnlueup4vYXl37w" />
                    </Card>
                </CardGroup>
                <br />
                <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/4-Cau-Rong-Han-Cau-Thuan-Phuoc-6049-1654169673.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=YUZ098MPNEGgbAK7OVV4cA" alt="" />
            </div>

            <div className="container">
                <div className="body">
                    <div>
                        <p id="smpic">Đà Nẵng còn được mệnh danh là "thành phố ánh sáng" khi những cây cầu, các tòa cao ốc và khu dân cư đồng loạt lên đèn về đêm. Ảnh: Nguyễn Sanh Quốc Huy</p>
                        <p><b>Biển Mỹ Khê</b></p>
                        <p>Biển Mỹ Khê từng được tạp chí Forbes (Mỹ) bình chọn là một trong 6 bãi biển quyến rũ nhất hành tinh và trong top 25 biển đẹp nhất châu Á năm 2021 của TripAdvisor. Bãi tắm trải dài 900 m trên đường Phạm Văn Đồng, thuộc quận Sơn Trà. Ngắm bình minh trên biển Mỹ Khê, du khách có cơ hội tìm hiểu thêm về đời sống của ngư dân địa phương.</p>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/My-Khe-Da-Nang-2450-1654169673.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=4sJaQr23FXvbPITnyQyNBw" alt="" />
                    </div>

                    <div>
                        <h2>Đặc sản</h2>
                        <p><b>Mì Quảng</b></p>
                        <p>Mì Quảng không có công thức "bất di bất dịch", mà rất đa dạng về hương vị như mì Quảng tôm thịt, mì Quảng cá lóc, mì Quảng chả cua... Mì Quảng là món ăn khô và một tô mì không bao giờ thiếu đậu phộng rang, bánh tráng mè nướng giòn.</p>
                        <p>Một tô mì Quảng nhỏ khoảng 15.000 đồng, tô lớn khoảng 20.000 - 30.000 đồng, ngoài ra với tô đặc biệt giá có thể lên đến 40.000 đồng.</p>
                        <img id="mist" src="https://reviewvilla.vn/wp-content/uploads/2022/06/top-12-quan-my-quang-9.jpg" alt="" />

                    </div>

                    <div>
                        <p><b>Bành xèo nem lụi</b></p>
                        <p>Các quán bánh xèo ngon tập trung ở đường Hoàng Diệu, Trưng Nữ Vương, Châu Thị Vĩnh Tế, Đống Đa. Giá cả trung bình từ 20.000 đến 100.000 đồng một phần tùy số lượng bánh và nem.</p>
                        <p>Bánh xèo miền Trung thường nhỏ bằng cái đĩa nên có độ giòn và khi cuốn bánh tráng vừa vặn hơn. Gia vị ăn kèm là nước tương nóng, vị vừa phải để chấm bánh.</p>
                        <img id="mist" src="https://i1-dulich.vnecdn.net/2022/06/02/nem-lui-5441-1654169674.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=7i8e-bpGt-6qSqxewfZqRA" alt="" />
                    </div>

                    <div>
                        <p><b>Bún mắm nêm</b></p>
                        <p>Đây là đặc sản bình dân rất dễ tìm ở Đà Nẵng. Một tô bún đầy đủ có thịt heo, tai heo, chả bò, nem, rau thơm, sợi đu đủ hay mít non bào mỏng, kèm một chén mắm nêm. Gia vị không thể thiếu của món Quảng là vị bùi của đậu phộng và miếng bánh giòn.</p>
                        <p>Thưởng thức bún mắm ở các gánh hàng, quán vỉa hè hay ở chợ sẽ cho cảm giác tròn vị nhất.

                            Bạn có thể thử bún mắm nêm ở chợ Cồn hoặc chợ Hàn vào buổi chiều, giá từ 15.000 đến 30.000 đồng mỗi tô.</p>
                        <img id="mist" src="https://icdn.dantri.com.vn/zoom/1200_630/2021/03/12/anh-3-1615536871523.jpg" alt="" />

                    </div>

                    <div>
                        <h2>Mua gì làm quà</h2>
                        <p>Tré ông Chánh, tré bà Đệ, bánh khô mè Cẩm Lệ, rong biển Mỹ Khê, nước mắm Nam Ô, hải sản tươi sống hoặc khô mực, khô cá... là những đặc sản trứ danh của Đà Nẵng, dễ tìm mua và đóng gói hành lý.</p>
                        <p>Nếu muốn mua quà lưu niệm, bạn có thể chọn tranh lụa, tranh thêu, tranh sơn dầu, các vật trang trí bằng đá, sành sứ, gỗ... hoặc đồ tạo tác mỹ nghệ bằng đá ở Ngũ Hành Sơn, quần áo từ vải lụa và tơ tằm.</p>

                    </div>
                </div>

            </div>
            <div>
                <img id="endpic" src="https://i1-dulich.vnecdn.net/2022/06/02/da-nang-2-5992-1654169675.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=FyGH3K8_fd9z9ActpGxC3A" alt="" />
            </div>
        </div>
    )
}
export default Danang;