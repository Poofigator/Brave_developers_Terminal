import styles from './Main.module.css'

const Main = () => {
    return(
        <div className={styles.container}>
            <p className={styles.subtitle}>Терминал оплаты мобильного телефона</p>
            <p className={styles.some_text}>Выберите мобильного опреатора в "бургер меню" слева в верху и вас перебросит на форму оплаты.<br/>
            <span>P.S. Это всё понарошку. От сервера будут прилетать случайные ответы, деньги никуда не отправятся</span></p>
        </div>
    )
}

export default Main;