import { StyledNav, StyledH1, StyledSearch, StyledImg, StyledFontAwesomeIcon } from './Nav.style'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Img from './Lerevendeur.png'

function Nav() {
    return (
        <StyledNav>
            <a href='http://localhost:3000/' ><StyledImg src={(Img)} /></a>
            <StyledH1>
                Le revendeur
            </StyledH1>
            <StyledSearch type="text" placeholder="Rechercher un produit" />
            <a href='http://localhost:3000/profile' ><StyledFontAwesomeIcon icon={faUser} /></a>
            <a href='http://localhost:3000/panier' ><StyledFontAwesomeIcon icon={faCartPlus} /></a>
        </StyledNav>
    );
}

export default Nav;