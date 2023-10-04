import { StyledH1, StyledButton, StyledH2, StyledH3 } from './Home.style';
import Slider from '../Slider/slider'
import Box from '../Box-Console/Box'

function Index() {
    return (
        <div>
            <div>
                <a href='http://localhost:3000/Console'><StyledButton>Console</StyledButton></a>
                <StyledButton>Jeux</StyledButton>
            </div>
            <StyledH1>
                Nos Jeux Vidéo
            </StyledH1>
            <Slider />
            <a href='http://localhost:3000/Console' style={{ textDecoration: 'none' }} >
                <StyledH3>
                    Nos Console
                </StyledH3></a>
            <Box />
            <StyledH2>
                Nos Produits Retro
            </StyledH2>
        </div>
    )
}

export default Index;