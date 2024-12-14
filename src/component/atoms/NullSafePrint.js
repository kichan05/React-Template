export const NullSafePrint = ({children, nullText}) => {
  return (
    <>
      {children ? children : nullText}
    </>
  )
}