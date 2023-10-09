import { StyledSlider, StyledImage, StyledSliderContener, } from './slider.style'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Img from './Image';
import { ArrowsR, ArrowsG } from './CustomArrows';

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
        prevArrow: <ArrowsG />,
        nextArrow: <ArrowsR />,
    };

    return (
        <div>
            <StyledSlider>
                <Slider {...settings}>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img.Img)} alt="Image 1" />
                            <StyledImage src={(Img.Img2)} alt="Image 2" />
                            <StyledImage src={(Img.Img3)} />
                        </StyledSliderContener>
                    </div>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img.Img4)} alt="Image 1" />
                            <StyledImage src={(Img.Img5)} alt="Image 2" />
                            <StyledImage src={(Img.Img6)} />
                        </StyledSliderContener>
                    </div>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img.Img7)} alt="Image 1" />
                            <StyledImage src={(Img.Img8)} alt="Image 2" />
                            <StyledImage src={(Img.Img9)} />
                        </StyledSliderContener>
                    </div>
                    <div>
                        <StyledSliderContener>
                            <StyledImage src={(Img.Img10)} alt="Image 1" />
                            <StyledImage src={(Img.Img11)} alt="Image 2" />
                            <StyledImage src={(Img.Img12)} />
                        </StyledSliderContener>
                    </div>
                </Slider>
            </StyledSlider>
        </div>
    )
}

export default Index;