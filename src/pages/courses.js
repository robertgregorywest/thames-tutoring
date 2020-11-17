import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';
import LinkedItem from '../components/LinkedItem';

const Courses = ({ data }) => {
  const title = data.kontentItemArticle.elements.title.value;
  const metaDescription =
    data.kontentItemArticle.elements.seo_metadata__meta_description.value;
  const introduction = data.kontentItemArticle.elements.introduction;
  const body = data.kontentItemArticle.elements.body;

  const testimonial =
    data.kontentItemArticle.elements.testimonial.value[0].elements.testimonial;
  const attribution =
    data.kontentItemArticle.elements.testimonial.value[0].elements.attribution
      .value;

  return (
    <Layout
      title={title}
      metaTitle={title}
      metaDescription={metaDescription}
      introduction={introduction}
    >
      <RichTextElement
        value={body.value}
        linkedItems={body.modular_content}
        resolveLinkedItem={(linkedItem) => (
          <LinkedItem linkedItem={linkedItem} />
        )}
      />
      <Testimonial testimonial={testimonial} attribution={attribution} />
    </Layout>
  );
};

export default Courses;

export const pageQuery = graphql`
  query CoursesQuery {
    kontentItemArticle(system: { codename: { eq: "courses_landing_page" } }) {
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
        introduction {
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
                    ... on kontent_item_course {
                      id
                      elements {
                        title {
                          value
                        }
                        cost {
                          value
                        }
                        start_date {
                          value
                        }
                        end_date {
                          value
                        }
                        location {
                          value
                        }
                        introduction {
                          value
                        }
                        summary_image {
                          value {
                            fluid(maxWidth: 500) {
                              ...KontentAssetFluid
                            }
                            description
                          }
                        }
                        url {
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
                background_gradient {
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
