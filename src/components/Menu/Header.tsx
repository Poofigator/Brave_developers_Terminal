import { Dispatch, SetStateAction, useState } from "react";
import Menu from "./Menu";
import { BurgerButton } from "./styles";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [items, setItems] = useState([
    { value: "Главная", href: "/" },
    { value: "МТС", href: "/operator/МТС" },
    { value: "Билайн", href: "/operator/Билайн" },
    { value: "Мегафон", href: "/operator/Мегафон" },
  ]);

  function addItem() {
    const newOperator = prompt(
      "Введите название оператора, которого хотите добавить в список"
    );
    if (newOperator) {
      const newItems = [
        ...items,
        { value: newOperator, href: `/operator/${newOperator}` },
      ];
      setItems(newItems);
    }
  }

  return (
    <div>
      <header>
        <BurgerButton onClick={() => setMenuActive(!menuActive)}>
          <span />
        </BurgerButton>
      </header>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Операторы мобильной связи"}
        items={items}
        addItem={addItem}
      />
    </div>
  );
};

export type item = {
  value: string;
  href: string;
};
export type menuProps = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  header: string;
  items: item[];
  addItem: () => void;
};
export default Header;
