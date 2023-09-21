import { StyledSlider, StyledImage, StyledSliderContener, } from './slider.style'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from './img/20230602_113111.jpg';
import Img2 from './img/pokemon-version-noire-nintendo-ds-fr.jpg';
import Img3 from './img/BL2_PS3-wAmary_FoB.1337253501.jpg';
import Img4 from './img/mario-kart-8-jaquette-58789fb140253.jpg';
import Img5 from './img/81-FD3tzUlL._AC_SL1500_.webp';
import Img6 from './img/images.jpeg';
import Img7 from './img/jaquette-HD-Nintendo-DS-Adibou-Je-Joue-Avec-Les-Lettres-Et-Les-Nombres.jpg';
import Img8 from './img/jaquette-super-pokemon-rumble-nintendo-3ds-cover-boxart-fr-pegi_0903D4000000019759.jpg';
import Img9 from './img/79bc1ab83c0eb782d2c3fe5de1088850.jpg';
import Img10 from './img/817FOluzPFL._AC_SY550_.jpg';
import Img11 from './img/minecraft-xbox-360-jaquette-e112948.jpg';
import Img12 from './img/71aHh6YZOJL._AC_UF1000,1000_QL80_.jpg';
import { ArrowsR, ArrowsG } from './CustomArrows'; // Importez vos flèches personnalisées


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
        pauseOnHover: true,
        prevArrow: <ArrowsG />, // Utilisez la flèche précédente personnalisée
        nextArrow: <ArrowsR />, // Utilisez la flèche suivante personnalisée
    };
    return (
        <div>
            <StyledSlider>
                <Slider {...settings}>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img)} alt="Image 1" />
                            <StyledImage src={(Img2)} alt="Image 2" />
                            <StyledImage src={(Img3)} />
                        </StyledSliderContener>
                    </div>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img4)} />
                            <StyledImage src={(Img5)} />
                            <StyledImage src={(Img6)} />
                        </StyledSliderContener>
                    </div>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img7)} />
                            <StyledImage src={(Img8)} />
                            <StyledImage src={(Img9)} />
                        </StyledSliderContener>
                    </div>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img10)} />
                            <StyledImage src={(Img11)} />
                            <StyledImage src={(Img12)} />
                        </StyledSliderContener>
                    </div>
                </Slider>
            </StyledSlider>
        </div>
    )
}

export default Index;