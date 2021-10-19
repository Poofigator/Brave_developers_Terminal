import { useState } from "react"
import Menu from "./Menu"

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:"Главная", href: '/'},
                   {value: "МТС", href: '/МТС'},
                   {value: "Билайн", href: '/Билайн'},
                   {value: "Мегафон", href: '/Мегафон'},
                   {value: "Какой-то другой оператор", href: '/ПетроБанк'}]
    return(
    <div>
        <header>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span/>
        </div>
      </header>
      <Menu active={menuActive} setActive={setMenuActive} header={"Операторы мобильной связи"}items={items}/>
    </div>
    )
}

export default Header