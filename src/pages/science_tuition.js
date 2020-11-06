import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import LinkedItem from '../components/LinkedItem';
import TutorListing from '../components/TutorListing';
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

  const tutors = data.kontentItemSubjectArea.elements.tutors.value;

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
        <h2>Our Science Tutors</h2>
        <TutorListing tutors={tutors} />
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
                listing_title {
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
