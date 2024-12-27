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
import Input from "../component/atoms/Input.js";
import {useForm} from "react-hook-form";
import {logDOM} from "@testing-library/react";

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
  const {register, handleSubmit, reset, watch, formState: {errors}} = useForm({
    defaultValues: {
      name: "한지연",
      age: 28
    }
  })

  return (
    <PageStyle>
      <div className="content">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Input register={register("name")} label={"name"} placeholder={"이름"}/>
          <Input register={register("age", {valueAsNumber : true, max: 100, min:20})} type={"number"} label={"age"} placeholder={"나이"}/>
          <Button type={"submit"}>전송</Button>
        </form>
        {errors.age ? "error" : "not-error"}
        <Button onClick={() => console.log(errors)}>에러?</Button>
        <div className="">
          {watch("name")}
          <br/>
          {watch("age")}
          <Button onClick={() => reset()}>리셋</Button>
        </div>
      </div>
    </PageStyle>
  )
}

export default React.memo(Page)