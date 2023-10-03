import { Stylediv, Styleh2, Styledivcontent, StyledImg, StyledButton } from './Console.style';
import React, { Component } from 'react';
import Img1 from './img/Jeux-Video-et-Consoles_Consoles-f1-XBOX.jpg'
import Img2 from './img/xbox-360_0900895485.jpg'
import Img3 from './img/istockphoto-472044719-612x612.jpg'
import Img4 from './img/Ps5-standard-edition.jpg'
import Img5 from './img/console-ps3-fat-e126192.jpg'
import Img6 from './img/images.jpeg'
import Img7 from './img/images2.jpeg'
import Img8 from './img/FX2HTD2igDw5Q6MWkbD3YP-415-80.jpg'
import Img9 from './img/nintendo-switch-edition-mario-rouge-et-bleu.jpg'
import Img10 from './img/nintendo-switch_7949a77b3fd2c1f6__1200_900__overflow.jpg'
import Img11 from './img/9-10.jpg'
import Img12 from './img/9-10.jpg'
import Img13 from './img/9-10.jpg'
import Img14 from './img/9-10.jpg'
import Img15 from './img/9-10.jpg'
import Img16 from './img/9-10.jpg'
import Img17 from './img/9-10.jpg'

const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17
];

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
        };
    }

    // Fonction pour changer la page
    changePage = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { currentPage } = this.state;
        const itemsPerPage = 5;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const displayedImages = images.slice(startIndex, endIndex);

        return (
            <div>
                <Styleh2>Nos Consoles</Styleh2>
                <Stylediv>
                    <Styledivcontent>
                        {displayedImages.map((image, index) => (
                            <StyledImg key={index} src={image} alt="" />
                        ))}
                        <div>
                            {[1, 2, 3].map((page) => (
                                <StyledButton
                                    key={page}
                                    onClick={() => this.changePage(page)}
                                    disabled={page === currentPage}
                                >
                                    Page {page}
                                </StyledButton>
                            ))}
                        </div>
                    </Styledivcontent>
                </Stylediv>
            </div>
        );
    }
}

export default Index;