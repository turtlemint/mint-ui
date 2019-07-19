import styled from "styled-components";

const Row = styled.div<{ children: React.ReactNode }>`
  margin-left: -15px;
  margin-right: -15px;
  &:before,
  &:after {
    display: table;
    content: " ";
  }
  &:after {
    clear: both;
  }
`;

export default Row;