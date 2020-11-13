import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';
import LinkedItem from '../components/LinkedItem';
import TutorListing from '../components/TutorListing';

const SubjectTemplate = ({ data }) => {
  const title = data.kontentItemSubjectArea.elements.title.value;
  const metaTitle =
    data.kontentItemSubjectArea.elements.seo_metadata__meta_title.value;
  const metaDescription =
    data.kontentItemSubjectArea.elements.seo_metadata__meta_description.value;
  const summary = data.kontentItemSubjectArea.elements.summary;
  const details = data.kontentItemSubjectArea.elements.details;

  const tutors = data.kontentItemSubjectArea.elements.tutors.value;

  const testimonial =
    data.kontentItemSubjectArea.elements.testimonial.value[0].elements
      .testimonial;
  const attribution =
    data.kontentItemSubjectArea.elements.testimonial.value[0].elements
      .attribution.value;

  return (
    <Layout
      title={title}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      introduction={summary}
    >
      <RichTextElement
        value={details.value}
        linkedItems={details.modular_content}
        resolveLinkedItem={(linkedItem) => (
          <LinkedItem linkedItem={linkedItem} />
        )}
      />
      <h2>Our Science Tutors</h2>
      <TutorListing tutors={tutors} />
      <Testimonial testimonial={testimonial} attribution={attribution} />
    </Layout>
  );
};

export default SubjectTemplate;

export const pageQuery = graphql`
  query SubjectQuery($url: String!) {
    kontentItemSubjectArea(elements: { url: { value: { eq: $url } } }) {
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
                        details {
                          value
                        }
                        cost {
                          value
                        }
                        unit {
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
                shape_dividers {
                  value {
                    codename
                  }
                }
                width {
                  value {
                    codename
                  }
                }
              }
              system {
                codename
                type
              }
            }
          }
        }
        tutors {
          value {
            ... on kontent_item_tutor {
              id
              elements {
                tutor_name {
                  value
                }
                introduction {
                  value
                }
                summary_picture {
                  value {
                    fluid(maxWidth: 500) {
                      ...KontentAssetFluid
                    }
                    description
                  }
                }
                teaching_provision {
                  value {
                    ... on kontent_item_subject_option {
                      id
                      elements {
                        title {
                          value
                        }
                      }
                    }
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