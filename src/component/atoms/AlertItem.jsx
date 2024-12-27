import {styled} from "styled-components";
import React, {useEffect} from "react";
import {UI_ACTION_TYPE, useUiDispatch} from "../../context/UiReducer";

const AlertItemStyle = styled.div`
  width: 250px;
  font-size: 1.1em;
  
  background: ${p => p.theme.color.Gray0};
  padding: 1em;
  border: 1px solid ${p => p.theme.color.Gray2};
  border-left: 5px solid ${p => p.theme.color.Red4};
  border-radius: 12px;

  display: inline-block;
`

const AlertItem = ({message}) => {
  const uiDispatch = useUiDispatch();

  useEffect(() => {
    setTimeout(() => {
      uiDispatch({type: UI_ACTION_TYPE.remoteAlertMessage, messageId : message.id})
    }, 3000)
  }, [])

  return (
    <AlertItemStyle>
      {message.message} {message.id}
    </AlertItemStyle>
  )
}

export default React.memo(AlertItem)