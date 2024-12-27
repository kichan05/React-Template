import styled from "styled-components";
import {useUiState} from "../context/UiReducer.js";
import LoadingDialog from "../component/organisms/LoadingDialog.tsx";

const UiSectionStyle = styled.section`
  width: 100%;
  height: calc(var(--vh) * 100);
  
  pointer-events: none;
  
  position: fixed;
  top: 0;
  left: 0;
`

const UiSection = () => {
  const uiState = useUiState()

  return (
    <UiSectionStyle>
      {/*<Modal isShow={uiState.isModalShow}/>*/}
      {/*<BottomSheet isShow={uiState.isBottomSheetShow}/>*/}
      <LoadingDialog isShow={uiState.isLoadingModalShow} message={"잠시만 기다려 주세용"}/>
      {/*<AlertMessageList/>*/}
    </UiSectionStyle>
  )
}

export default UiSection