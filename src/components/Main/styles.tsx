import styled from "styled-components";

const phoneSize = "768px";

export const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  padding: 30px 120px;

  @media screen and (max-width: ${phoneSize}) {
    padding: 30px 60px;
  }
`;

export const Subtitle = styled.p`
  font-size: 36px;

  @media screen and (max-width: ${phoneSize}) {
    font-size: 24px;
  }
`;
export const SomeText = styled.p`
  font-size: 24px;
  margin-top: 72px;

  @media screen and (max-width: ${phoneSize}) {
    font-size: 18px;
    margin-top: 72px;
  }
`;
