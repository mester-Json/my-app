import { StyledH1, StyledButton, StyledH2, StyledH3 } from './Home.style';
import Slider from '../slider/slider'
import Box from '../Box-Console/Box'

function Index() {
    return (
        <div>
            <div>
                <a href='http://localhost:3000/Console'><StyledButton>Console</StyledButton></a>
                <StyledButton>Jeux</StyledButton>
            </div>
            <StyledH1>
                Nos Nouvelles Rentrer
            </StyledH1>
            <Slider />
            <StyledH2>
                Nos Produits Rare
            </StyledH2>
            <a href='http://localhost:3000/Console' style={{ textDecoration: 'none' }} >
                <StyledH3>
                    Nos Console
                </StyledH3></a>
            <Box />
        </div>
    )
}

export default Index;