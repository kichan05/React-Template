import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "./Button";

const PageStyle = styled.div`
  background-color: #f00;
  
  & > .content {
    width: 100%;
    max-width: ${({theme}) => theme.size.mobileMaxWidth}px;
    
    margin: 0 auto;
    background-color: #0f0;
  }
`

const Page = () => {
  const uiState = useUiState()
  const uiDispatch = useUiDispatch()

  return (
    <PageStyle>
      <div className="content">
        <Button onClick={() => uiDispatch({type:UI_ACTION_TYPE.modal_toggle})}>모달 토글</Button>
      </div>
    </PageStyle>
  )
}

export default Page