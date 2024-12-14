import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useState} from "react";
import {LuImagePlus} from "react-icons/lu";
import {IconButton} from "../component/IconButton";
import CheckItem from "../component/CheckItem";
import RadioButton from "../component/RadioButton";
import InputLabel from "../component/InputLabel";
import {NullSafePrint} from "../component/NullSafePrint";

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
  const [count, setCount] = useState(0)

  return (
    <PageStyle>
      <div className="content">
        <Button onClick={() => uiDispatch({type: UI_ACTION_TYPE.MODAL_TOGGLE})}>모달 토글</Button>
        <IconButton onClick={() => {
          alert("Hello World")
        }}><LuImagePlus/></IconButton>
        <Button onClick={() => uiDispatch({type: UI_ACTION_TYPE.BOTTOM_SHEET_SHOW})}>모달 업</Button>
        <Button onClick={() => {
          uiDispatch({type: UI_ACTION_TYPE.LOADING_MODAL_SHOW})
          setTimeout(() => {
            uiDispatch({type: UI_ACTION_TYPE.LOADING_MODAL_HIDE})
          }, 1000)
        }}>로딩한다</Button>
        <CheckItem isChecked={true}>dasdads</CheckItem>
        <RadioButton isChecked={true}>Man</RadioButton>
        <InputLabel label={"sads"} placeholder={"sada"}/>
      </div>
    </PageStyle>
  )
}

export default Page