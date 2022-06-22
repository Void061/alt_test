import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Header from "../components/base/Header";
import SlideInit from "../components/homepage/Slide";
import DescWithTitle from "../components/base/DescWithTitle";
import SwiperSlider from "../components/base/SwiperSlider";
import DividerSection from "../components/base/DividerSection";
import IconAndText from "../components/base/IconAndText";
import Card from "../components/base/Card";
import Link from "next/link";
import Contatti from "../components/homepage/Contatti";
import TitleAndSubtitle from "../components/base/TitleAndSubtitle";
import NewsCard from "../components/base/NewsCard";
import Divider from "../components/base/Divider";
import Footer from "../components/base/Footer";
import StrapiClient from "../lib/strapi-client";

export default function Home({ news }) {
    const titolo =
        "L'anello di congiunzione tra il bisogno di realizzarsi e l'inadeguatezza della realtà Altera è un Hub per lo sviluppo e condivisione di valori, sentimenti, obiettivi e azioni orientate al miglioramento della nostra comunità del Golfo di Gaeta.";
    return (
        <div>
            <Header Home={true} position="fixed" />
            <SlideInit />
            <div id="about" className="pt-[120px] divider2 chi-siamo">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-14 pb-[100px]">
                    <div className="col-span-1 h-full  pb-10 md:pb-0 ">
                        <div className="rounded-[50px] bg-white py-[30px] px-[40px] shadow-xl h-full flex flex-col justify-center">
                            <h3 className="pb-3">Vision</h3>
                            <p>L&apos;anello di congiunzione tra il bisogno di realizzarsi e l&apos;inadeguatezza della realtà</p>
                        </div>
                    </div>
                    <div className="col-span-2 h-full">
                        <div className="container"><h5 className="light-blue font-medium pb-3 h-full">Consulenza integrata</h5>
                            <h2 className="pb-3 text-[40px] md:text-[50px]">Hub per lo <span className="light-blue">sviluppo </span><br />e la <span className="light-blue">condivisione di valori.</span></h2>
                            <p className="pb-3">Altera è un Hub per lo sviluppo e condivisione di valori, sentimenti, obiettivi e azioni orientate al miglioramento della nostra comunità del Golfo di Gaeta.</p>
                            <div>
                                <Link legacyBehavior href="#contact">
                                    <a className="button btn-dark">
                                        Contattaci
                                    </a>
                                </Link>
                            </div></div>
                    </div>
                </div>
            </div>
            <div id="services" className="container mt-5 mx-auto py-[100px]">
                <TitleAndSubtitle titolo_normal="Professional" titolo_light="Experience" sottotitolo="Offriamo una consulenza trasversale per l&apos;avvio, lo sviluppo e la diversificazione d&apos;impresa. Supportiamo imprenditori e aspiranti tali nel loro percorso verso l&apos;autorealizzazione." />
                <Divider />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <div>
                        <Card titolo="Consulenza strategica" sottotitolo="Costruiamo e sviluppiamo business valutando la fattibilità degli investimenti" img="prova" />
                    </div>
                    <div className="xl:mt-12">
                        <Card titolo="Finanza agevolata" sottotitolo="Ricerchiamo agevolazioni per la nascita e lo sviluppo delle imprese" img="prova2" />
                    </div>
                    <div>
                        <Card titolo="Marketing e comunicazione" sottotitolo="Sviluppiamo la Brand Identity e miglioriamo il posizionamento sul mercato" img="prova3" />
                    </div>
                    <div className="xl:mt-12">
                        <Card titolo="Technology Development" sottotitolo="Progettiamo siti web, software gestionali, e soluzioni innovative Web 3.0" img="prova4" />
                    </div>
                </div>
            </div>
            <Contatti css="divider1 divider-contact" />
            <div className="py-[100px]">
                <TitleAndSubtitle titolo_normal="News &" titolo_light="Update" sottotitolo="Contributi e finanziamenti, consigli di marketing e tutto ciò che devi sapere per migliorare la tua impresa. <br /> Selezioniamo news e contenuti che contano davvero per aiutarti a sfruttare le ultime opportunità!" />
                <div className="pb-10"><Divider />
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3"> {
                        news.data.map((article, index) => (
                            <NewsCard key={index} titolo={article.attributes.Titolo} sottotitolo={article.attributes.sottotitolo} img={article.attributes.immagine} data={article.attributes.updatedAt} autore="Ercole Sarno" />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}



const client = new StrapiClient();

export const getStaticProps = async () => {
    const allNews = await client.fetchData('/articoli?populate=*');
    return {
        props: {
            news: allNews
        }
    }
}