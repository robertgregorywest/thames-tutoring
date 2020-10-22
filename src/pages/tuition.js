import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import LinkedItem from '../components/LinkedItem';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Tuition = ({ data }) => {
  const title = data.kontentItemArticle.elements.title.value;
  const metaTitle =
    data.kontentItemArticle.elements.seo_metadata__meta_title.value;
  const metaDescription =
    data.kontentItemArticle.elements.seo_metadata__meta_description.value;
  const intro = data.kontentItemArticle.elements.body;

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <Header title={title} />
      <RichTextElement
        value={intro.value}
        linkedItems={intro.modular_content}
        resolveLinkedItem={(linkedItem) => (
          <LinkedItem linkedItem={linkedItem} />
        )}
      />
    </Layout>
  );
};

export default Tuition;

export const pageQuery = graphql`
  query TuitionQuery {
    kontentItemArticle(system: { codename: { eq: "tuition" } }) {
      elements {
        title {
          value
        }
        seo_metadata__meta_title {
          value
        }
        seo_metadata__meta_description {
          value
        }
        body {
          value
          modular_content {
            ... on kontent_item_listing_block {
              id
              elements {
                items {
                  value {
                    ... on kontent_item_subject_area {
                      id
                      elements {
                        title {
                          value
                        }
                        summary {
                          value
                        }
                      }
                      system {
                        codename
                        type
                      }
                    }
                  }
                }
                listing_title {
                  value
                }
              }
              system {
                codename
                type
              }
            }
            ... on kontent_item_testimonial {
              id
              elements {
                testimonial {
                  value
                }
                attribution {
                  value
                }
              }
              system {
                codename
                type
              }
            }
          }
        }
      }
    }
  }
`;
