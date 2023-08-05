import styles from './Notfound.module.css'

function Notfound(){
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado</p>
        </section>
    );
}

export default Notfound;