import styled from "styled-components";

const PageStyle = styled.div`
  height: 100%;
  background-color: #f00;
  
  & > .content {
    width: 100%;
    max-width: ${({theme}) => theme.size.mobileMaxWidth}px;
    
    margin: 0 auto;
    background-color: #0f0;
  }
`

const Page = () => {
  return (
    <PageStyle>
      <div className="content">
        Hello
      </div>
    </PageStyle>
  )
}

export default Page