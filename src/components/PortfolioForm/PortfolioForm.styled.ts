import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

export const FormContainer = styled.div`
  width: 60%;
  min-width: 350px;
  background: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid #fff;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const PortfolioNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PortfolioName = styled.h2`
  font-size: 20px;
`;

export const EditIconButton = styled(AiFillEdit)`
  color: #fff;
  padding: 10px;
  cursor: pointer;
  font-size: 40px;
  border-radius: 50%;

  &:hover {
    transition: all 0.2s linear;
    background: #223;
  }
`;

export const CloseFormButton = styled(VscChromeClose)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  font-size: 40px;

  &:hover {
    transition: all 0.2s linear;
    background-color: #223;
  }
`;

export const SearchCoinsContainer = styled.div`
  background: #555;
  padding: 10px 20px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const SearchCoinInput = styled.input`
  width: 50%;
  padding: 10px 20px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AddDetailsForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;
export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
`;
