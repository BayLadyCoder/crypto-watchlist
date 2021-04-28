import styled from "styled-components";

interface TableHeadDataProps {
  align: string;
}
interface TableBodyDataProps {
  align: string;
  change?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableName = styled.h2`
  font-size: 25px;
  color: #fff;
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  min-width: 400px;
`;

export const TableHead = styled.thead``;

export const TableHeadRow = styled.tr`
  background-color: #222;
  border-bottom: solid 1px #777;
`;

export const TableHeadData = styled.th<TableHeadDataProps>`
  color: #ccc;
  text-align: ${({ align }) => align};
  padding: 15px 30px;
`;

export const TableBodyRow = styled.tr`
  &:hover {
    background-color: #222;
  }
`;

export const CoinNameWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const TableBodyData = styled.td<TableBodyDataProps>`
  text-align: ${({ align }) => align};
  padding: 25px 30px;
  border-bottom: solid 1px #777;
  color: ${({ change }) =>
    change === "positive"
      ? "#26c761"
      : change === "negative"
      ? "#ff7a7a"
      : "#fff"};
  cursor: pointer;
`;

export const Ticker = styled.span`
  color: #aaa;
  font-size: 14px;
  margin-left: 5px;
  text-transform: uppercase;
`;

export const CoinImg = styled.img`
  width: 25px;
  margin-right: 15px;
`;
