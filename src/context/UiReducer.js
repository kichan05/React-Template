import React, {useContext, useReducer} from "react";

export const UI_ACTION_TYPE = {
  MODAL_SHOW: "MODAL_SHOW",
  MODAL_HIDE: "MODAL_HIDE",
  MODAL_TOGGLE: "MODAL_TOGGLE",

  BOTTOM_SHEET_SHOW : "BOTTOM_SHEET_OPEN",
  BOTTOM_SHEET_HIDE : "BOTTOM_SHEET_HIDE",
  BOTTOM_SHEET_TOGGLE : "BOTTOM_SHEET_TOGGLE",

  LOADING_MODAL_SHOW : "loadingModalShow",
  LOADING_MODAL_HIDE : "loadingModalHide",
  LOADING_MODAL_TOGGLE : "loadingModalToggle",
}

const uiState = {
  isModalShow: false,
  isBottomSheetShow : false,
  isLoadingModalShow: false,
}

function reducer(state, action) {
  switch (action.type) {
    case UI_ACTION_TYPE.MODAL_SHOW:
      return {
        ...state,
        isModalShow: true
      }
    case UI_ACTION_TYPE.MODAL_HIDE:
      return {
        ...state,
        isModalShow: false
      }
    case UI_ACTION_TYPE.MODAL_TOGGLE:
      return {
        ...state,
        isModalShow: !state.isModalShow
      }
    case UI_ACTION_TYPE.BOTTOM_SHEET_SHOW:
      return {
        ...state,
        isBottomSheetShow: true
      }
    case UI_ACTION_TYPE.BOTTOM_SHEET_HIDE:
      return {
        ...state,
        isBottomSheetShow: false
      }
    case UI_ACTION_TYPE.BOTTOM_SHEET_TOGGLE:
      return {
        ...state,
        isBottomSheetShow: !state.isBottomSheetShow
      }
    case UI_ACTION_TYPE.LOADING_MODAL_SHOW:
      return {
        ...state,
        isLoadingModalShow: true
      }
    case UI_ACTION_TYPE.LOADING_MODAL_HIDE:
      return {
        ...state,
        isLoadingModalShow: false
      }
    case UI_ACTION_TYPE.LOADING_MODAL_TOGGLE:
      return {
        ...state,
        isLoadingModalShow: !state.isLoadingModalShow
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