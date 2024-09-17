import styles from "./Carne2.module.css"
import btCompra from "../../assets/Compra.png"
import BotaoCompra from "../BotaoCompra/BotaoCompra"

const Carne2 = ({foto, nomeItem, kilopreco, preco, tipoCliente}) =>{
    return(
        <>
        <div>{texto(tipoCliente)}</div>
        <div className={styles.container}>
            <img src={foto} alt="Carne" className={styles.foto}/>
            <div className={styles.textos}>
                <h2 className={styles.titulo}>{nomeItem}</h2>
                <p className={styles.kilopreco}>{kilopreco}</p>
                {funpreco(tipoCliente, preco)}
                {funBotaoCompra(tipoCliente)}
            </div>
        </div>
        </>
    )
}

const texto = (tipoCliente) =>{
    if(tipoCliente == "Cliente+"){
        return(
            <div className={styles.textoClientePromo}>promo</div>
        )
    }
    else{
        return(
            <div className={styles.textoClienteSaudavel}>Saudavel</div>
        )
    }
}

const funpreco = (tipoCliente, preco) =>{
    if(tipoCliente == "Cliente+"){
        return(
            <h3 className={styles.precoCli}>R$  {preco}</h3>
        )
    }
    else{
        return(
            <h3 className={styles.precoSau}>R$  {preco}</h3>
        )
    }
}

const funBotaoCompra = (tipoCliente) => {
    if(tipoCliente == "Cliente+"){
        return(
            <div className={styles.btCompra}>
                <BotaoCompra cor="#FF0000"/>
            </div>
        )
    }
    else{
        return(
            <div className={styles.btCompra}>
                <BotaoCompra cor="#008000"/>
            </div>
        )
    }
}

export default Carne2