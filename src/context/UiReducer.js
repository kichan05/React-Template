import React, {useContext, useReducer} from "react";

export const UI_ACTION_TYPE = {
  modal_show: "MODAL_SHOW",
  modal_hide: "MODAL_HIDE",
  modal_toggle: "MODAL_TOGGLE",

  bottomSheet_show : "BOTTOM_SHEET_OPEN",
  bottomSheet_hide : "BOTTOM_SHEET_HIDE",
  bottomSheet_toggle : "BOTTOM_SHEET_TOGGLE",
}

const uiState = {
  isModalShow: false,
  isBottomSheetShow : false,
}

function reducer(state, action) {
  switch (action.type) {
    case UI_ACTION_TYPE.modal_show:
      return {
        ...state,
        isModalShow: true
      }
    case UI_ACTION_TYPE.modal_hide:
      return {
        ...state,
        isModalShow: false
      }
    case UI_ACTION_TYPE.modal_toggle:
      return {
        ...state,
        isModalShow: !state.isModalShow
      }
    case UI_ACTION_TYPE.bottomSheet_show:
      return {
        ...state,
        isBottomSheetShow: true
      }
    case UI_ACTION_TYPE.bottomSheet_hide:
      return {
        ...state,
        isBottomSheetShow: false
      }
    case UI_ACTION_TYPE.bottomSheet_toggle:
      return {
        ...state,
        isBottomSheetShow: !state.isBottomSheetShow
      }
    default:
      throw "Undefined ui reducer action type"
  }
}

const UiState = React.createContext(null)
const UiDispatch = React.createContext(null)

export const UiContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, uiState)

  return (
    <UiState.Provider value={state}>
      <UiDispatch.Provider value={dispatch}>
        {children}
      </UiDispatch.Provider>
    </UiState.Provider>
  )
}

export function useUiState() {
  const context = useContext(UiState)
  if(!context)
      throw new Error("Cannot find UiState context")
  return context
}

export function useUiDispatch() {
  const context = useContext(UiDispatch)
  if(!context)
      throw new Error("Cannot find UiDispatch context")
  return context
}