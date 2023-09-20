import { StyledSlider, StyledImage, StyledSliderContener, StyledH1 } from './slider.style'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from './img/20230602_113111.jpg';
import Img2 from './img/71aHh6YZOJL._AC_UF1000,1000_QL80_.jpg';
import Img3 from './img/BL2_PS3-wAmary_FoB.1337253501.jpg';
import Img4 from './img/jaquette-HD-Nintendo-DS-Adibou-Je-Joue-Avec-Les-Lettres-Et-Les-Nombres.jpg';

function Index() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div>
            <StyledH1>
                Nos produits
            </StyledH1>
            <div>
                <button>Console</button>
                <button>Jeux</button>
            </div>
            <StyledSlider>
                <Slider {...settings}>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img)} alt="Image 1" />
                            <StyledImage src={(Img2)} alt="Image 2" />
                        </StyledSliderContener>
                    </div>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img3)} />
                            <StyledImage src={(Img4)} />
                        </StyledSliderContener>
                    </div>
                </Slider>
            </StyledSlider>
        </div>
    )
}

export default Index;