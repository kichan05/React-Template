import styled from "styled-components";
import React from "react";

type SpaceProps = {
    h : number,
    v: number,
}

export const Space : React.FC<SpaceProps> = styled.div`
  width: ${p => p.h}px;
  height: ${p => p.v}px;
`