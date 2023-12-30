import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import hanoititle from "../../Share/img/hanoititle.jpg"
import hoiantitle from "../../Share/img/hoiantitle.jpg"
import danangtitle from "../../Share/img/danangtitle.jpg"
import huetitle from "../../Share/img/huetitle.jpg"
import dalattitle from "../../Share/img/dalattitle.jpg"
import hcmtitle from "../../Share/img/hcmtitle.jpg"
import './quangcao.css'

function Travel() {
    const haha = { marginTop: '5px',marginLeft: "1%" }
    const merge = { marginTop: '-15%', textAlign: 'center', color: 'black' }
    const pic = {  transformScale: '1.1, 1.1' }
    return (
        <div className="container">
            <CardGroup>
                {/* Hà Nội */}
                <Card style={haha}>
                    <Link className="nav-link" to={`/hanoi`}>
                        <Card.Img id='trans' variant="top" src={hanoititle} style={pic} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to={`/hanoi`}>
                            <Card.Title style={merge}>Hà Nội</Card.Title>
                        </Link>
                    </Card.Body>
                </Card>
                {/* Hội An */}
                <Card style={haha}>
                    <Link className="nav-link" to={`/hoian`}>
                        <Card.Img id='trans' variant="top" src={hoiantitle} style={pic} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to={`/hoian`}>
                            <Card.Title style={merge}>Hội An</Card.Title>
                        </Link>
                    </Card.Body>
                </Card>
                {/* Đà Nẵng */}
                <Card style={haha}>
                    <Link className="nav-link" to={`/danang`}>
                        <Card.Img id='trans' variant="top" src={danangtitle} style={pic} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to={`/danang`}>
                            <Card.Title style={merge}>Đà Nẵng</Card.Title>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup>
                {/* Huế */}
                <Card style={haha}>
                    <Link className="nav-link" to={`/hue`}>
                        <Card.Img id='trans' variant="top" src={huetitle} style={pic} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to={`/hue`}>
                            <Card.Title style={merge}>Huế</Card.Title>
                        </Link>
                    </Card.Body>
                </Card>

                {/* Đà Lạt */}
                <Card style={haha}>
                    <Link className="nav-link" to={`/dalat`}>
                        <Card.Img id='trans' variant="top" src={dalattitle} style={pic} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to={`/dalat`}>
                            <Card.Title style={merge}>Đà Lạt</Card.Title>
                        </Link>
                    </Card.Body>
                </Card>

                {/* Hồ Chí Minh */}
                <Card style={haha}>
                    <Link className="nav-link" to={`/hcm`}>
                        <Card.Img id='trans' variant="top" src={hcmtitle} style={pic} />
                    </Link>
                    <Card.Body>
                        <Link className="nav-link" to={`/hcm`}>
                            <Card.Title style={merge}>Hồ Chí Minh</Card.Title>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Travel;

