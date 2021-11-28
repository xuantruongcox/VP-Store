import * as React from 'react';
import { graphql } from 'gatsby';
import MainLayout from '../layouts/main-layout';
const MainPages = ({ data }) => {
    return (
        <MainLayout>
            <div className="row">
                {data.allProducts.nodes.map((item, index) => {
                    return (
                        <div key={index} className="col">
                            <h2>{item.name}</h2>
                            <p>{item.prices}</p>
                        </div>
                    )
                })}
            </div>
        </MainLayout>
    )
}

export const query = graphql`
query pageQuery {
    allProducts {
      nodes {
        type
        name
        prices
      }
    }
  }
  
`

export default MainPages;