import { StyleH1, StyleButton, StyleH2, StyleH3 } from './Home.style';
import Slider from '../SliderJeux/sliderjeux.js'
import SliderConsole from '../SliderConsole/sliderconsole.js'
import SliderRetro from '../SliderRetro/sliderretro.js'

function Index() {
    return (
        <div>
            <div>
                <a href='http://localhost:3000/Console'><StyleButton>Console</StyleButton></a>
                <a href='http://localhost:3000/jeux' ><StyleButton>Jeux</StyleButton></a>
            </div>
            <a href='http://localhost:3000/jeux' style={{ textDecoration: 'none' }} > <StyleH1>
                Nos Jeux Vidéo
            </StyleH1>
            </a>
            <Slider />
            <a href='http://localhost:3000/Console' style={{ textDecoration: 'none' }} >
                <StyleH3>
                    Nos Console
                </StyleH3>
            </a>
            <SliderConsole />
            <a href='http://localhost:3000/Retro' style={{ textDecoration: 'none' }} >
                <StyleH2>
                    Nos Produits Retro
                </StyleH2>
            </a>
            <SliderRetro />
        </div>
    )
}

export default Index;