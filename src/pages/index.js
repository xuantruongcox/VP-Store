import * as React from 'react';
import { graphql } from 'gatsby';
import MainLayout from '../layouts/main-layout';
const MainPages = ({ data }) => {
    return (
        <MainLayout>
            <div className="row">
               {data.allTester.nodes.map(item=>{
                   return (
                       <div className="col">
                           <h2>{item.name}</h2>
                        </div>
                   )
               })}
            </div>
        </MainLayout>
    )
}

export const query = graphql`
query pageQuery {
    allTester {
      nodes {
        type
        name
        prices
      }
    }
  }
  
`

export default MainPages;