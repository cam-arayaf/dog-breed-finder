import styled from "styled-components";

export const Title = styled.h2`
  background-color: #8bab4a;
  color: #fff;
  font-size: 24px;
  line-height: 30px;
  margin: 0;
  padding: 16px;
  text-align: center;
`;

export const WrapperBreed = styled.div`
  display: flex;
  place-items: center;

  :first-of-type {
    margin: 16px 16px 0;
  }

  :last-of-type {
    margin: 0 16px 16px;
  }

  :not(:first-of-type):not(:last-of-type) {
    margin: 0 16px;
  }
`;

export const WrapperBreeds = styled.aside`
  background-color: #dff3ec;
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    text-transform: capitalize;
  }

  @media (min-width: 608px) {
    height: calc(100% - 112px);
    overflow-y: auto;
    position: absolute;
    width: 320px;
  }
`;
