/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import RoundImage from "components/img";
import Ive from "../imgs/안유진.jpg";
import SSBadge from "components/badge";
import SSTab from "components/tab";
import SSModal from "components/modal";
import imIVE from "../imgs/ImIVE.webp";
import ELEVEN from "../imgs/ELEVEN.webp";
import LOVEDIVE from "../imgs/LOVE DIVE.webp";
import EitherWay from "../imgs/Either Way.webp";
import SSCard from "components/card";

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Resume = () => {
  return (
    <div
      css={css`
        ${flexCenter}
        flex-direction: column;
      `}
    >
      <div
        css={css`
          width: 70vh;

          text-align: center;
          background-color: hotpink;
          border: 2px solid hotpink;
        `}
      >
        <Title>
          <p>안유진</p>
          <p>AN YUJIN</p>
        </Title>
        <div
          css={css`
            width: 100%;
          `}
        >
          <div>
            <RoundImage src={Ive} />
          </div>
          <SSBadge />
          <SSTab />
          <Album>
            <p>Album</p>
            <ModalWrapper>
              <SSModal name={"imIVE"} src={imIVE} />
              <SSModal name={"ELEVEN"} src={ELEVEN} />
              <SSModal name={"LOVE DIVE"} src={LOVEDIVE} />
              <SSModal name={"Either Way"} src={EitherWay} />
            </ModalWrapper>
          </Album>
          <SSCard />
        </div>
      </div>
    </div>
  );
};

export default Resume;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  height: 100px;
  ${flexCenter}
  flex-direction: column;
  color: white;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Album = styled.div`
  background-color: white;
  height: 100px;

  & p {
    font-size: 24px;
    font-weight: bold;
    padding: 5px;
  }
`;
