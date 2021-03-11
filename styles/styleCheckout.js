import styled from 'styled-components'

export const DivFormCheckout = styled.div`
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border: 1px solid #d8d8d8;
  font: 14px/18px Helvetica, Arial, "DejaVu Sans", "Liberation Sans", Freesans,
    sans-serif;
  font-size: 15px;
`;
export const DivTitle = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 600;
`;
export const DivSubmit = styled.div`
  display: flex;
`;
export const DivBodyProducts = styled.div`
  font-weight: 400;
  height: 535px;
  overflow-y: scroll;
  padding: 15px 16px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border: 1px solid #d8d8d8;
`;
export const DivRow = styled.div`
  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;
