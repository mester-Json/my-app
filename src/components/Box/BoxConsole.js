import { StyledDiv, StyledImg } from './Box.style';
import React, { useState, useEffect } from 'react';

const images = [
    { src: require('../Console/img/PSP-3000-Silver.jpg'), date: new Date('2023-01-01') },
    { src: require('../Console/img/xbox-one-fate.jpg'), date: new Date('2023-09-30') },
    { src: require('../Console/img/wii-slime-Nintendo-Mario-Kart-Wii.jpg'), date: new Date('2023-09-29') },
    { src: require('../Console/img/ps4-pro.jpeg'), date: new Date('2023-09-28') },
    { src: require('../Console/img/new-3ds-xl-edition-snes.jpg'), date: new Date('2023-09-27') },
    { src: require('../Console/img/xbox-360.jpg'), date: new Date('2023-09-26') },
];

const Box = () => {
    const [recentImages, setRecentImages] = useState([]);

    useEffect(() => {

        const sortedImages = images.sort((a, b) => b.date - a.date);

        const top6Images = sortedImages.slice(0, 6);

        setRecentImages(top6Images);
    }, []);

    return (
        <div>
            <StyledDiv>
                {recentImages.map((image, index) => (
                    <StyledImg key={index} src={image.src} alt="" />
                ))}
            </StyledDiv>
        </div>
    );
};

export default Box;