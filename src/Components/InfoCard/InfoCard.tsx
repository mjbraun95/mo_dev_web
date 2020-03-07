import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

interface InfoCardProps {
  style?: {
    width?: string | number
    height?: string | number
    padding?: string | number
    margin?: string | number
    disableDecor?: boolean
  }
}

interface InfoCardState {
}

export class InfoCard extends React.Component<InfoCardProps, InfoCardState> {
  render() {
    return (
      <InfoCardStyledDiv {...this.props}>
        <ReactMarkdown
          source={this.props.children?.valueOf().toString()}
        />
      </InfoCardStyledDiv>
    );
  }
}

const InfoCardStyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props: InfoCardProps) => props.style && props.style.width !== undefined ? typeof props.style.width === "number" ? `${props.style.width}px` : props.style.width : "auto"};
  height: ${(props: InfoCardProps) => props.style && props.style.height !== undefined ? typeof props.style.height === "number" ? `${props.style.height}px` : props.style.height : "auto"};
  padding: ${(props: InfoCardProps) => props.style && props.style.padding !== undefined ? typeof props.style.padding === "number" ? `${props.style.padding}px` : props.style.padding : "0.5in"};
  background-color: black;
  margin: ${(props: InfoCardProps) => props.style && props.style.margin !== undefined ? typeof props.style.margin === "number" ? `${props.style.margin}px` : props.style.margin : "0.5in"};

  box-shadow: ${(props: InfoCardProps) => props.style && props.style.disableDecor ? "none" : "0px 0px 20px 0px #000000FF"};
  a {
    color: #3399cc;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  h2, h1, h3, h4, h5, h6, p, a, span {
    font-weight: 300;
  }

  p{
    line-height: 1.75em;
  }
`