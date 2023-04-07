import Cabecalho from '../../componentes/Cabecalho';
import Menu from '../../componentes/Menu';
import Banner from '../../componentes/Banner';
import Rodape from '../../componentes/Rodape';
import Galeria from '../../componentes/Galeria';
import styles from './PaginaInicial.module.scss';

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <div>
                <Galeria />
            </div>
            <Rodape />
        </>
    );
}