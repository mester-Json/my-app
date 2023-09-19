import { StyledNav, StyledH1, StyledSearch, StyledImg } from './Nav.style'
import Img from './Le revendeur-Logo.png'

function Nav() {
    return (
        <StyledNav>
            <StyledImg src={(Img)} />
            <StyledH1>
                Le revendeur
            </StyledH1>
            <StyledSearch type="text" placeholder="Rechercher un produit" />
        </StyledNav>
    );
}

export default Nav;