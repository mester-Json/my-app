import { StyledDiv, StyledImg } from './Box.style'
import Img1 from './img/Jeux-Video-et-Consoles_Consoles-f1-XBOX.jpg'
import Img2 from './img/xbox-360_0900895485.jpg'
import Img3 from './img/istockphoto-472044719-612x612.jpg'
import Img4 from './img/Ps5-standard-edition.jpg'
import Img5 from './img/console-ps3-fat-e126192.jpg'
import Img6 from './img/images.jpeg'

const Box = () => {
    return (
        <div>
            <StyledDiv>
                <StyledImg src={Img1} alt="" />
                <StyledImg src={Img2} alt='' />
                <StyledImg src={Img3} alt='' />
                <StyledImg src={Img4} alt='' />
                <StyledImg src={Img5} alt='' />
                <StyledImg src={Img6} alt='' />
            </StyledDiv>
        </div>
    );
};

export default Box;