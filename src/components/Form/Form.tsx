import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Image from "next/image";
import gif from "../../../public/images/downloading.gif";

import { Placer, Container, Operator } from './styles'

type propTypes = {
  operator: string | string[];
  logo: StaticImageData;
};

const FormContainer = ({ operator, logo }: propTypes) => {
  const [downloading, setDownloading] = useState(false);
  return (
    <Placer>
      {downloading ? (
        <Image width="56px" height="56px" src={gif} alt="Downloading" />
      ) : (
        <Form operator={operator} logo={logo} setDownloading={setDownloading} />
      )}
    </Placer>
  );
};

type propTypes2 = {
  operator: string | string[];
  logo: StaticImageData;
  setDownloading: Dispatch<SetStateAction<boolean>>;
};

const Form = ({ operator, logo, setDownloading }: propTypes2) => {
  const [phone, setPhone] = useState("");
  const [sum, setSum] = useState("");
  const phoneRe = /^(8|\+7)\d{10}$/;

  function payTimeout(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDownloading(true);
    setTimeout(pay, 1000);
  }

  function pay() {
    if (Math.round(Math.random())) {
      alert("Операция прошла успешно");
      setDownloading(false);
      setPhone("");
      setSum("");
    } else {
      alert("Что-то пошло не так");
      setDownloading(false);
      setPhone("");
      setSum("");
    }
  }

  return (
    <Container onSubmit={(e) => payTimeout(e)}>
      <Operator>
        <p>{operator}</p>
        <Image width="34px" height="34px" src={logo} alt="Logotip" />
      </Operator>
      <p
        style={
          phone
            ? phoneRe.test(phone)
              ? { color: "limegreen" }
              : { color: "brown" }
            : {}
        }
      >
        Телефон
      </p>
      <input
        type="tel"
        placeholder="+79261234567"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
        pattern={phoneRe.source}
      />
      <p
        style={
          sum
            ? 1000 >= Number(sum) && Number(sum) >= 1
              ? { color: "limegreen" }
              : { color: "brown" }
            : {}
        }
      >
        Сумма
      </p>
      <input
        type={"number"}
        placeholder="1-1000"
        value={sum}
        onChange={(event) => setSum(event.target.value)}
        required
        min={0}
        max={1000}
      />
      <button type="submit" >Заплатить</button>
    </Container>
  );
};

export default FormContainer;
