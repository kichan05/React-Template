import {css, styled} from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: inline-block;
  padding: 1.7em;
  background-color: ${p => p.theme.color.Gray1};
  border-radius: 0.7em;
`
export const ColumnFill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > * {
    flex: 1;
  }
`
export const RowFill = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  & > * {
    flex: 1;
  }
`

export const AutoFill = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  & > * {
    flex: 1;
  }

  ${p => css`
    @media (max-width: ${p.theme.size.mobileMaxWidth}px) {
      flex-direction: column;
    }
  `}
`

export const Title = styled.h1`
  font-size: 1.3em;
  font-weight: 600;
  color: ${p => p.theme.color.Gray9};
`
export const SubTitle = styled.h1`
  font-size: 1.2em;
  font-weight: 400;
  color: ${p => p.theme.color.Gray8};
`
export const HighLight = styled.span`
  color: ${p => p.theme.color.HeechanBlue};
`
export const PushSides = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > * {
    flex-shrink: 0;
  }
`;