import { Container, Subtitle, SomeText } from "./styles";

const Main = () => {
  return (
    <Container>
      <Subtitle>Терминал оплаты мобильного телефона</Subtitle>
      <SomeText>
        Выберите мобильного опреатора в "бургер меню" слева в верху и вас
        перебросит на форму оплаты.
        <br />
        P.S. Это всё понарошку. От сервера будут прилетать случайные ответы,
        деньги никуда не отправятся
      </SomeText>
    </Container>
  );
};

export default Main;
