import styled from "styled-components";

export const Card = styled.div`
  background-color: #bfeeca;
  border-radius: 16px;
  box-shadow: 0 4px 10px #a5d8ff;
  display: flex;
  flex-direction: column;
  place-content: space-between;
  max-width: 256px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 29px 16px 19px;
  place-content: center;
`;

export const Image = styled.img`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
`;

export const Name = styled.p`
  background-color: #44c662;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  padding: 16px;
  text-align: center;
  text-transform: capitalize;
  width: calc(100% - 32px);
`;

export const NoCheckedBreedsImage = styled.img`
  width: 100%;
`;

export const NoCheckedBreedsMessage = styled.p`
  color: #444;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  margin: 0;
  text-align: center;
`;

export const NoCheckedBreedsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 8px 0 32px;
`;

export const Title = styled.h2`
  background-color: #b3be56;
  color: #fff;
  font-size: 24px;
  line-height: 30px;
  margin: 0;
  padding: 16px;
  text-align: center;
`;

export const Wrapper = styled.section`
  @media (min-width: 608px) {
    height: calc(100% - 112px);
    margin-left: 320px;
    overflow-y: auto;
    position: absolute;
    width: calc(100% - 320px);
  }
`;
