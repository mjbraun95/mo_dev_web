import React from 'react';
import styled from 'styled-components';
import { PortfolioItem } from '../../Components/PortfolioItem';

let fakeData = [
  {
    imgUrl: "https://images.unsplash.com/photo-1581790413682-69d8776f9533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
    markdown: `# Test\nLoremIpsum e et etc.\n\ndsadsadsadsa\n\nddsadsaydsa dsahdsa ds ahdsa hdsah udh sa dah dsauy dyusa dsaydyasu dyas d asgdysagduygsauy dgyusa uydgsayugdusag y gdsay uydg sayugdusyag dshaydtasy dasyutdas dysauy dsa ydusa dsa\n\n[Continue Reading](https://dsa.inc)`
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1581875598921-869af98b4939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    markdown: `# Test2\nLoremIpsum e et etc.\n\ndsadsadsadsa\n\nddsadsaydsa dshaydtasy dasyutdas dysauy dsa ydusa dsa\n\n[Continue Reading](https://dsa.inc)`
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1581790413682-69d8776f9533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
    markdown: `# Test3\nLoremIpsum e et etc.\n\ndsadsadsadsa\n\nddsadsaydsa dshaydtasy dasyutdas dysauy dsa ydusa dsa\n\n[Continue Reading](https://dsa.inc)`
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1581875598921-869af98b4939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    markdown: `# Test4\nLoremIpsum e et etc.\n\ndsadsadsadsa\n\nddsadsaydsa dshaydtasy dasyutdas dysauy dsa ydusa dsa\n\n[Continue Reading](https://dsa.inc)`
  }
]

export class PortfolioScreen extends React.Component {
  render() {
    return (
      <PortfolioScreenContainer>
        {
          fakeData.map(
            (data, index) => <PortfolioItem imgUrl={data.imgUrl} direction={index % 2 === 0 ? "right" : "left"} markdown={data.markdown} />
          )
        }
      </PortfolioScreenContainer>
    )
  }
}

const PortfolioScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: auto;
  margin-top: 70px;
  align-items: center;
`