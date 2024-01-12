import styled from "styled-components";

const PageStyle = styled.div`
  background-color: #f00;
  
  & > .content {
    width: 100%;
    max-width: 1000px;
    
    margin: 0 auto;
    
    background-color: #0f0;
  }
`

const Page = () => {
  return (
    <PageStyle>
      <div className="content">

      </div>
    </PageStyle>
  )
}

export default Page