import styled from "styled-components";
import {useUiState} from "../context/UiReducer";
import LoadingDialog from "../component/organisms/LoadingDialog";

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
      <LoadingDialog isShow={uiState.isLoadingModalShow}/>
    </UiSectionStyle>
  )
}

export default UiSection