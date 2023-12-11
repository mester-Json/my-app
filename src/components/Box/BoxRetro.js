
import { StyledDiv, StyledImg } from './Box.style';
import React, { useState, useEffect } from 'react';

const images = [

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