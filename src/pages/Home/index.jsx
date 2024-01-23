import { Container } from "./styles";
import background from './assets/background.png'
import building from './assets/building.png'
import building2 from './assets/building2.png'
import building3 from './assets/building3.png'
import building4 from './assets/building4.png'
import building5 from './assets/building5.png'
import building6 from './assets/building6.png'
import figure from './assets/figure.png'
import figure2 from './assets/figure2.png'
import figure3 from './assets/figure3.png'

import { Header } from "../../components/header";

export function Home() {
    return (
        <Container>
            <Header />

            <div className="background">
                <img src={background} alt="Imagem de um edificio" />
            </div>

            <main>
                <div className="head">
                    <h1>enko school</h1>
                    <h2><span>localização</span> Lorem Ipsum</h2>
                    <h2><span>área construida</span> 203 m2</h2>
                    <h2><span>ano</span> 2023</h2>
                </div>

                <div className="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque consequatur quae assumenda obcaecati tempore, dolores nihil, laudantium qui vero iusto sed modi cupiditate animi! Ullam repudiandae quas totam adipisci.</p>
                    <br/>
                    <p>Amet iusto tempora exercitationem alias explicabo, voluptas consectetur unde iure, architecto aperiam debitis, suscipit laborum illo cumque perspiciatis harum in eos deleniti expedita natus sunt. Minus corrupti esse soluta vel!</p>
                </div>
            </main>

            <div className="gallery">
                <img src={building} alt="Fotos de nossos projetos" />
                <img src={building2} alt="Fotos de nossos projetos" />
                <img src={building3} alt="Fotos de nossos projetos" />
                <img src={building4} alt="Fotos de nossos projetos" />
                <img src={building5} alt="Fotos de nossos projetos" />
                <img src={building6} alt="Fotos de nossos projetos" />
            </div>

            <div className="figures">
                <img src={figure} alt="Fotos de nossos projetos" />
                <img src={figure2} alt="Fotos de nossos projetos" />
                <img src={figure3} alt="Fotos de nossos projetos" />
            </div>
        </Container>
    )
}