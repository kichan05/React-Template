import styled, {css} from "styled-components";
import {CSSTransition} from "react-transition-group";
import Button from "./Button";
import {useState} from "react";
import {UI_ACTION_TYPE, useUiDispatch} from "../context/UiReducer";

const BottomSheetStyle = styled.div`
  width: 100%;
  height: calc(var(--vh) * 100);
  background-color: rgba(0, 0, 0, 0.37);

  ${({state}) => css`
    opacity: ${(state === "exiting" || state === "exited") ? 0 : 1};
  `};
  transition: 100ms;

  pointer-events: visible;

  position: fixed;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  .content-wrap {
    width: calc(100% - 60px);
    max-width: 600px;
  }

  .content {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    background-color: #fff;
    padding: 32px;
    border-radius: 15px;

    transition: 150ms;
    transition-timeing-function: ease-in;
    ${({state}) => css`
      transform: translateY(${(state === "exiting" || state === "exited") ? "100%" : "0%"});
    `};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::before {
      content: "";
      width: 100px;
      height: 5px;
      background-color: ${p => p.theme.color.Gray4};
      border-radius: 10px;

      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
    }

    & > div {
      user-select: none;
    }
  }

  .title {
    color: ${p => p.theme.color.Gray9};
    font-size: 24px;
    font-weight: 800;
  }

  p {
    color: ${p => p.theme.color.Gray7};
    margin-top: 8px;
  }

  button {
    width: 100%;
  }
`

export const BottomSheet = ({isShow}) => {
  const uiDispatch = useUiDispatch()

  const [bottomSheetState, setBottomSheetState] = useState(
    {x: 0, y: 0}
  )

  const onBottomSheetMove = (e) => {
    const yMax = 140, yMin = -50

    const {buttons, nativeEvent: {movementX, movementY}} = e
    let x = bottomSheetState.x + movementX
    let y = bottomSheetState.y + movementY

    if (!buttons) {
      if ((y >= yMax - 10 || y <= yMin)) {
        uiDispatch({type: UI_ACTION_TYPE.bottomSheet_hide})
      }

      setBottomSheetState({x: 0, y: 0})
      return
    }


    if(y >= yMax)
      y = yMax


    setBottomSheetState({x, y})
  }
  const closeBottomSheet = (e) => {
    const {target, currentTarget} = e

    if(target !== currentTarget)
      return
    uiDispatch({type: UI_ACTION_TYPE.bottomSheet_hide})
  }

  return (
    <CSSTransition timeout={150} in={isShow} unmountOnExit={true} onExited={() => {
      setBottomSheetState({x: 1, y: 1})
    }}>
      {state => (
        <BottomSheetStyle state={state} onClick={closeBottomSheet}>
          <div
            className="content-wrap"
            style={{
              transform: `translateY(${bottomSheetState.y}px) scale(1)`,
            }}
          >
            <div className="content"
                 onMouseMove={onBottomSheetMove}>
              <div className="">
                <div className="title">와 바텀시트다</div>
                <p>대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용 대충 내용<br/>나는
                  안드로이드 개발자인가 프론트엔드 개발자인가 그냥 학생인가</p>
              </div>

              <Button onClick={closeBottomSheet}>닫기</Button>
            </div>
          </div>
        </BottomSheetStyle>
      )}
    </CSSTransition>
  )
}