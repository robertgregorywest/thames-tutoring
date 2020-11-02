import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import LinkedItem from '../components/LinkedItem';
import Testimonial from '../components/Testimonial';
import Header from '../components/Header';

const ScienceTuition = ({ data }) => {
  const title = data.kontentItemSubjectArea.elements.title.value;
  const metaTitle =
    data.kontentItemSubjectArea.elements.seo_metadata__meta_title.value;
  const metaDescription =
    data.kontentItemSubjectArea.elements.seo_metadata__meta_description.value;
  const summary = data.kontentItemSubjectArea.elements.summary;
  const details = data.kontentItemSubjectArea.elements.details;
  const testimonial =
    data.kontentItemSubjectArea.elements.testimonial.value[0].elements
      .testimonial;
  const attribution =
    data.kontentItemSubjectArea.elements.testimonial.value[0].elements
      .attribution.value;

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <Header title={title} richText={summary} />
      <div className="content-body">
        <RichTextElement
          value={details.value}
          linkedItems={details.modular_content}
          resolveLinkedItem={(linkedItem) => (
            <LinkedItem linkedItem={linkedItem} />
          )}
        />
        <h2>Our Tutors</h2>
      </div>
      <Testimonial testimonial={testimonial} attribution={attribution} />
    </Layout>
  );
};

export default ScienceTuition;

export const pageQuery = graphql`
  query ScienceTuitionQuery {
    kontentItemSubjectArea(system: { codename: { eq: "science_tuition" } }) {
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
        summary {
          value
        }
        details {
          value
          modular_content {
            ... on kontent_item_listing_block {
              id
              elements {
                items {
                  value {
                    ... on kontent_item_cost_option {
                      id
                      elements {
                        title {
                          value
                        }
                        cost {
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
            ... on kontent_item_call_to_action {
              id
              system {
                codename
                type
              }
              elements {
                title {
                  value
                }
                target_page {
                  value {
                    id
                  }
                }
              }
            }
          }
        }
        testimonial {
          value {
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
            }
          }
        }
      }
    }
  }
`;
