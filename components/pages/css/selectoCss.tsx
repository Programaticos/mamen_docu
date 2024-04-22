import styled from "styled-components";

const DivContainerSelector = styled.div`
  width: 20vw;
  height: 70vh;
  border: 2px solid #059862;
  border-radius: 8px;
  overflow: scroll;
  overflow-x: hidden;
`;
const DivSelecto = styled.div`
  background: #059862;
  color: white;
  border-radius: 3px;
  height: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
`;
export default function MainContainerCss() {
  return (
    <DivContainerSelector>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        (e: number, i: number) => {
          return <DivSelecto key={i}>{e}.-Hola</DivSelecto>;
        }
      )}
    </DivContainerSelector>
  );
}