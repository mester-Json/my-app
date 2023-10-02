import { StyledNav, StyledH1, StyledSearch, StyledImg, StyledFontAwesomeIcon } from './Nav.style'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Img from './Lerevendeur.png'

function Nav() {
    return (
        <StyledNav>
            <StyledImg src={(Img)} />
            <StyledH1>
                Le revendeur
            </StyledH1>
            <StyledSearch type="text" placeholder="Rechercher un produit" />
            <StyledFontAwesomeIcon icon={faUser} />
        </StyledNav>
    );
}

export default Nav;