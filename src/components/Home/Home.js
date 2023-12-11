import { StyledH1, StyledButton, StyledH2, StyledH3 } from './Home.style';
import Slider from '../Slider/slider'
import Box from '../Box/BoxConsole'
import BoxRetro from '../Box/BoxRetro.js'

function Index() {
    return (
        <div>
            <div>
                <a href='http://localhost:3000/Console'><StyledButton>Console</StyledButton></a>
                <a href='http://localhost:3000/jeux' ><StyledButton>Jeux</StyledButton></a>
            </div>
            <a href='http://localhost:3000/jeux' style={{ textDecoration: 'none' }} > <StyledH1>
                Nos Jeux Vidéo
            </StyledH1>
            </a>
            <Slider />
            <a href='http://localhost:3000/Console' style={{ textDecoration: 'none' }} >
                <StyledH3>
                    Nos Console
                </StyledH3>
            </a>
            <Box />
            <a href='http://localhost:3000/Retro' style={{ textDecoration: 'none' }} >
                <StyledH2>
                    Nos Produits Retro
                </StyledH2>
            </a>
            <BoxRetro />
        </div>
    )
}

export default Index;