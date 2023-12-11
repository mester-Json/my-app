import { Stylediv, Styleh2, Styledivcontent, StyledImg, StyledButton, StyledLabel, StyledSelect } from './Retro.style';
import React, { Component } from 'react';


class Jeux extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
        };
    }

    changePage = (page) => {
        this.setState({ currentPage: page });
    };

    changeFilter = (filter) => {
        this.setState({ filter: filter });
    };

    sortImages = (images, filter) => {
        switch (filter) {
            case 'recent':
                return images.slice().reverse();
            case 'ancien':
                return images.slice();
            case 'prix-croissant':
                return images.slice().sort((a, b) => a - b);
            case 'prix-decroissant':
                return images.slice().sort((a, b) => b - a);
            case 'marque':
                return images.slice();
            case 'disponible':
                return images.slice();
            default:
                return images;
        };
    }
    getImages = () => {
        const images = require.context('./img', false, /\.(jpg|jpeg|png|gif|webp)$/);
        const imageKeys = images.keys();
        return imageKeys.map(images);
    };


    render() {
        const { currentPage, filter } = this.state;
        const itemsPerPage = 7;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const imageUrls = this.getImages();

        const sortedImages = this.sortImages(imageUrls, filter);
        const displayedImages = sortedImages.slice(startIndex, endIndex);

        const totalPages = Math.ceil(imageUrls.length / itemsPerPage);

        const paginationButtons = [];
        for (let page = 1; page <= totalPages; page++) {
            paginationButtons.push(
                <StyledButton
                    key={page}
                    onClick={() => this.changePage(page)}
                    disabled={page === currentPage}
                >
                    Page {page}
                </StyledButton>
            );
        }

        return (
            <div>
                <Styleh2>Nos Jeux Vidéo</Styleh2>
                <Stylediv>
                    <StyledLabel>Filtrer par : </StyledLabel>
                    <StyledSelect onChange={(e) => this.changeFilter(e.target.value)} value={filter}>
                        <option value="recent">Récence</option>
                        <option value="ancien">Ancienneté</option>
                        <option value="prix-croissant">Prix Croissant</option>
                        <option value="prix-decroissant">Prix Décroissant</option>
                        <option value="marque">Marque</option>
                        <option value="disponible">Disponible</option>
                        {/* Ajoutez d'autres options de filtrage ici */}
                    </StyledSelect>
                    <Styledivcontent>
                        {displayedImages.map((image, index) => (
                            <StyledImg key={index} src={image} alt="" />
                        ))}
                    </Styledivcontent>
                    <div>
                        {paginationButtons}
                    </div>
                </Stylediv>
            </div>
        );
    }
}


export default Jeux