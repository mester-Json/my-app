import { StyledArrowsG, StyledArrowsR } from './CustomArrows.style'


const ArrowsG = (props) => (
    <StyledArrowsG>
        <div
            onClick={props.onClick}
        >
            {"<"} {/* Utilisez un texte ou une icône pour représenter la flèche précédente */}
        </div>
    </StyledArrowsG>
);

const ArrowsR = (props) => (
    <StyledArrowsR>
        <div
            onClick={props.onClick}
        >
            {">"} {/* Utilisez un texte ou une icône pour représenter la flèche suivante */}
        </div>
    </StyledArrowsR>
);

export { ArrowsG, ArrowsR };