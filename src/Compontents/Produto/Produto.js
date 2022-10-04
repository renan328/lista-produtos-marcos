import Styles from "./Produto.module.css";
function Produto({img, preco, preco1, preco2, nome, href}) {
    return(
        <div className={Styles.produto}>
            <a href={href} target="_balnk">
                <img src={img} alt='' className={Styles.img}/>
            </a>
            <h1 className={Styles.preco}>R${preco}</h1>
            <h1 className={Styles.preco1}>R${preco1}</h1>
            <h1 className={Styles.preco2}>-{preco2}%</h1>
            <h1 className={Styles.preco3}>{nome}</h1>     
        </div>
    );
}

export default Produto;
