import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Card from "../componentes/Card";

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <div>
                <Card title="STITCH" content="Stitch é um personagem alienígena que ficou conhecido com os filmes e programas de televisão Lilo & Stitch da Disney. Ele foi criado originalmente para causar o caos através da galáxia, marcado pelo seu temperamento abrupto e seu jeito brincalhão e malvado." />
                <Card title="LILO" content="Mesmo com a sua personalidade excêntrica e os seus momentos de irresponsabilidade e desobediência, Lilo é uma menina muito bondosa, paciente, fiel, engraçada, caridosa e que se preocupa com os outros." />
                <Card title="LILO E STITCH" content="À medida que a história se desenrola, Lilo ensina Stitch sobre amor, família e o significado de pertencimento, enquanto ele tenta se adaptar ao mundo humano e a sua nova vida. O filme aborda temas como a importância da família, a superação de desafios e a aceitação das diferenças." />
                </div>

                <div className="img">
                    <img src="../Img/lilostitch.png"></img>
                </div>
            </main>
            <Footer />
        </div>

    )
}