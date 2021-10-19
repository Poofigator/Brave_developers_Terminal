import {useRouter} from "next/router"
import Form from "../src/components/Form/Form"
import Header from "../src/components/Menu/Header"

import defLogo from "../public/images/default.png"
import MTS from "../public/images/MTS.png"
import Bilain from "../public/images/Bilain.png"
import Megafon from "../public/images/Megafon.png"

export default function Operator() {
    const {query} = useRouter()
    const images= [defLogo, MTS, Bilain, Megafon]
    const num = query.operator === 'МТС' ? 1 : query.operator === 'Билайн' ? 2 : query.operator === 'Мегафон' ? 3 : 0
    const logo = images[num]
    return(
        <div>
            <Header/>
            <div className="content_container">
                <Form operator={query.operator} logo={logo}/>
            </div>
        </div>
    )
}

