import styles from './PaginaInicial.module.scss';
import Cabecalho from 'componentes/Cabecalho';
import Menu from 'componentes/Menu';
import Banner from 'componentes/Banner';
import Galeria from 'componentes/Galeria';
import Populares from 'componentes/Populares';
import Rodape from 'componentes/Rodape';

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    );
}