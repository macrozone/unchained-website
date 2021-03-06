import { compose, mapProps, defaultProps } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const defaultProducts = [];
const defaultTags = [];

export default compose(
  defaultProps({ tags: defaultTags }),
  graphql(gql`
    query getProducts($tags: [String!]) {
      products(tags: $tags) {
        _id
        texts {
          _id
          title
          subtitle
          slug
        }
        ... on SimpleProduct {
          media {
            _id
            file {
              _id
              url
            }
            texts {
              _id
              title
            }
          }
          catalogPrice {
            _id
            isTaxable
            isNetPrice
            price {
              amount
              currency
            }
          }
          simulatedPrice {
            _id
            isTaxable
            isNetPrice
            price {
              amount
              currency
            }
          }
        }
      }
    }
  `),
  mapProps(({ data: { products, loading }, loading: loadingPredecessor = false, ...rest }) => ({
    products: products || defaultProducts,
    loading: !products && (loading || loadingPredecessor),
    ...rest,
  })),
);
