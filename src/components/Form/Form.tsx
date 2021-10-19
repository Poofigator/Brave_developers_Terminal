import { Dispatch, SetStateAction, useState } from "react";
import Image from 'next/image'
import styles from "./Form.module.css";
import gif from "../../../public/images/downloading.gif"

type propTypes = {
    operator: string | string[],
    logo: StaticImageData,
}


const FormContainer = ({operator, logo}: propTypes) => {
    const [downloading, setDownloading] = useState(false)
    return(
        <div className={styles.placer}>
            {downloading ? <Image width='56px' height='56px' src={gif} alt="Downloading"/> : <Form operator={operator} logo={logo} setDownloading = {setDownloading}/>}
        </div>
    )
}

type propTypes2 = {
    operator: string | string[],
    logo: StaticImageData,
    setDownloading: Dispatch<SetStateAction<boolean>>
}

const Form = ({operator, logo, setDownloading}: propTypes2) => {
    const [phone, setPhone] = useState('')
    const [sum, setSum] = useState('')
    const phoneRe = /^(8|\+7)\d{10}$/

    function payButton() {
        // eslint-disable-next-line
        if (!(phoneRe.test(phone) && (1000 >= Number(sum) && Number(sum) >= 1)))
        alert("Ошибка, проверьте правильность заполнения форм")
        else {
            setDownloading(true)
            setTimeout(pay, 1000)
            // анимация
        }
    }

    function pay() {
        if (Math.round(Math.random())) {
            alert('Операция прошла успешно')
            setDownloading(false)
            setPhone('')
            setSum('')
        }
        else {
            alert('Что-то пошло не так')
            setDownloading(false)
            setPhone('')
            setSum('')
        }
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.operator}>
                <p>{operator}</p>
                <Image width='34px' height='34px' src={logo} alt="Logotip"/>
            </div>
            <p style={phone?phoneRe.test(phone)?{ color: "limegreen"}:{ color: "brown"}:{}}>Телефон</p>
            <input placeholder="+79261234567" value={phone} onChange={(event) => setPhone(event.target.value)}/>
            <p style={sum?(1000 >= Number(sum) && Number(sum) >= 1)?{ color: "limegreen"}:{ color: "brown"}:{}}>Сумма</p>
            <input placeholder="1-1000" value={sum} onChange={(event) => setSum(event.target.value)}/>
            <button onClick={payButton}>Заплатить</button>
        </div>
    )
}

export default FormContainer;