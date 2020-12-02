import React from 'react';
import { graphql, Link } from 'gatsby';
import SkewWrapper from '../SkewWrapper';

const CallToAction = ({ title, target }) => (
  <Link to={target} className="cta cta--large">
    <SkewWrapper>{title}</SkewWrapper>
  </Link>
);

export const fragmentQuery = graphql`
  fragment CallToActionInfo on kontent_item_call_to_action {
    id
    elements {
      target_page {
        value {
          id
          ... on kontent_item_article {
            id
            elements {
              url {
                value
              }
            }
          }
          ... on kontent_item_course {
            id
            elements {
              url {
                value
              }
            }
          }
          ... on kontent_item_subject_area {
            id
            elements {
              url {
                value
              }
            }
          }
        }
      }
      title {
        value
      }
    }
    system {
      codename
      type
    }
  }
`;

export default CallToAction;
