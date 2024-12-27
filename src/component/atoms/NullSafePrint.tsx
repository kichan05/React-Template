import React from "react";

type NullSafePrintProps = {
  children: React.ReactNode,
  nullText: string
}

export const NullSafePrint : React.FC<NullSafePrintProps> = ({children, nullText}) => {
  return (
    <>
      {children ? children : nullText}
    </>
  )
}