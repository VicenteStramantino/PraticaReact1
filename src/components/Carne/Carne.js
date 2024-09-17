import styles from "./Carne.module.css"
import btCompra from "../../assets/Compra.png"

const Carne = ({foto, nomeItem, kilopreco, preço}) =>{
    return(
        <>
        <div className={styles.container}>
            <img src={foto} alt="Carne" className={styles.foto}/>
            <div className={styles.textos}>
                <h2 className={styles.titulo}>{nomeItem}</h2>
                <p className={styles.kilopreco}>{kilopreco}</p>
                <h3 className={styles.preco}>R$  {preço}</h3>
                <img src={btCompra} alt="" className={styles.btCompra}/>
            </div>
        </div>
        </>
    )
}

export default Carne