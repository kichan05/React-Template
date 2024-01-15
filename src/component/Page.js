import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "./Button";
import {PageBasicStyle} from "../style/BasicStyle";

const PageStyle = styled.div`
  ${PageBasicStyle};
  
  background-color: #f00;
  
  & > .content {
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