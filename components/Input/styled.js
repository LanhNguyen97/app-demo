import styled from 'styled-components'

export const WrapperLabel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-size: 14px;
  }

  svg {
    position: absolute;
    bottom: 0;
    right: 1%;
    top: 63%;
    cursor: pointer;
  }
`

export const StyleInput = styled.input`
  height: 35px;
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`

export const TextError = styled.span`
  color: #e85c41;
  font-size: 12px;
  margin-top: 5px;
`