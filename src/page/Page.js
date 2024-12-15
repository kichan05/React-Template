import React from "react"
import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer.js";
import Button from "../component/atoms/Button.js";
import {PageBasicStyle} from "../style/BasicStyle.js";
import {useState} from "react";
import {LuImagePlus} from "react-icons/lu";
import {IconButton} from "../component/atoms/IconButton.js";
import CheckItem from "../component/atoms/CheckItem.js";
import RadioButton from "../component/atoms/RadioButton.js";
import InputLabel from "../component/atoms/InputLabel.js";

const PageStyle = styled.div`
  ${PageBasicStyle};

  background-color: #f00;

  & > .content {
    background-color: #0f0;
  }
`

const Page = () => {
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
        <CheckItem isChecked={true} onCheck={() => {}}>dasdads</CheckItem>
        <RadioButton isChecked={true} onCheck={() => {}}>Man</RadioButton>
        <InputLabel label={"sads"} placeholder={"sada"}/>
        <Button
          onClick={() => uiDispatch({type: UI_ACTION_TYPE.addAlertMessage, message: "Hello World"})}>dasdas</Button>
      </div>
    </PageStyle>
  )
}

export default React.memo(Page)