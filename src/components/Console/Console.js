import { Stylediv, Styleh2, Styledivcontent, StyledImg, StyledButton, StyledLabel, StyledSelect } from './Console.style';
import React, { Component } from 'react';


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

    // Fonction pour changer le filtre
    changeFilter = (filter) => {
        this.setState({ filter: filter });
    };

    // Fonction de tri pour les images
    sortImages = (images, filter) => {
        switch (filter) {
            case 'recent':
                return images.slice().reverse(); // Tri par récence (ordre inverse)
            case 'ancien':
                return images.slice(); // Tri par ancien (ordre d'origine)
            case 'prix-croissant':
                return images.slice().sort((a, b) => a - b); // Tri par prix croissant
            case 'prix-decroissant':
                return images.slice().sort((a, b) => b - a); // Tri par prix décroissant
            case 'marque':
                return images.slice(); // Tri par marque (à personnaliser)
            case 'disponible':
                return images.slice(); // Tri par disponibilité (à personnaliser)
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
        const itemsPerPage = 5;
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
                <Styleh2>Nos Consoles</Styleh2>
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

export default Index;