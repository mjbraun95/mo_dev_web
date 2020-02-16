import React from 'react';
import styled from 'styled-components';

const fakeData = [
  [
    { gridWidth: 5, src: "https://images.unsplash.com/photo-1581252165015-9b5151a6930e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=930&q=80" },
    { gridWidth: 10, src: "https://images.unsplash.com/photo-1581356503493-56761c5a88fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" },
    { gridWidth: 5, src: "https://images.unsplash.com/photo-1581299894330-0ff5faf1529d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" }
  ],
  [
    { gridWidth: 3, src: "https://images.unsplash.com/photo-1581364008002-659cb816e322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" },
    { gridWidth: 4, src: "https://images.unsplash.com/photo-1581357824893-67965830191c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" },
    { gridWidth: 8, src: "https://images.unsplash.com/photo-1581311657685-a9e7b27aabfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" },
    { gridWidth: 5, src: "https://images.unsplash.com/photo-1577885641242-62d00d75184f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" }
  ],
  [
    { gridWidth: 2, src: "https://images.unsplash.com/photo-1581289098389-e322c1e66b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" },
    { gridWidth: 16, src: "https://images.unsplash.com/photo-1581329773757-330d975ca060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80" },
    { gridWidth: 2, src: "https://images.unsplash.com/photo-1581299495382-2e208a99e079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" }
  ]
]

interface PhotoWallProps {
  isShown: boolean
}

export class PhotoWall extends React.Component<PhotoWallProps> {

  componentWillMount() {
    window.addEventListener("resize", this.listenToResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.listenToResize.bind(this))
  }

  listenToResize(e: Event) {
    this.forceUpdate();
  }

  render() {
    return (
      <PhotoWallContainterDiv>
        {
          fakeData.map((row, rowIndex) => {
            return (
              <ImageRow key={rowIndex}>
                {
                  row.map((item, itemIndex) => {
                    return (
                      <ImageItem key={itemIndex} show={this.props.isShown} indexDelay={rowIndex + itemIndex} gridWidth={item.gridWidth} src={item.src} />
                    )
                  })
                }
              </ImageRow>
            )
          })
        }
      </PhotoWallContainterDiv>
    )
  }
}

interface ImageItemProps {
  gridWidth: number
  src: string
  indexDelay: number
  show: boolean
}

const ImageItem = styled.div`
  position: relative;
  margin: 10px;
  width: ${(props: ImageItemProps) => (window.innerWidth - 40) / 20 * props.gridWidth}px;
  height: calc((100vh - 40px - 40px) / 3);
  
  pointer-events: ${(props: ImageItemProps) => props.show ? "unset" : "none"};
  
  opacity: 0.1;
  :hover {opacity: 0.9;}
  transition: opacity 300ms ease-in-out;

  ::after {
    content: "";
    background: url("${(props: ImageItemProps) => props.src}") center center no-repeat;
    background-size: cover;
    opacity: ${(props: ImageItemProps) => props.show ? 1 : 0};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
    transition: opacity 300ms ${(props: ImageItemProps) => props.indexDelay === 0 ? "" : `${props.indexDelay * 200}ms`} ease-in-out;
  }
`

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
`

const PhotoWallContainterDiv = styled.div`
  margin: 10px;
  opacity: 1.0;
`