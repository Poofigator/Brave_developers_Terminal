import Link from "next/link";
import { menuProps, item } from "./Header";

import { MenuContainer, Blur, Content, Header, List, Item, AddButton } from "./styles";

const Menu = ({ active, setActive, header, items, addItem }: menuProps) => {
  let i = 0;
  return (
    <MenuContainer active={active} onClick={() => setActive(false)}>
      <Blur />
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>{header}</Header>
        <List>
          {items.map((item: item) => (
            <li key={(i += 1)}>
              <Link href={item.href}>
                <Item>{item.value}</Item>
              </Link>
            </li>
          ))}
          <li>
            <AddButton onClick={addItem}>Добавить</AddButton>
          </li>
        </List>
      </Content>
    </MenuContainer>
  );
};

export default Menu;
