import {useUiState} from "../../context/UiReducer";
import styled from "styled-components";
import AlertItem from "../atoms/AlertItem.jsx";

export const AlertMessageList = () => {
  const uiState = useUiState();

  const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;

    position: fixed;
    top: 0;
    right: 0;

    pointer-events: auto;
  `

  return (
    <List>
      {uiState.alertMessageList.map(m => (
        <AlertItem key={m.id} message={m}/>
      ))}
    </List>
  )
}