import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import LinkedItem from '../components/LinkedItem';
import CourseListing from '../components/CourseListing';
import Testimonial from '../components/Testimonial';
import Header from '../components/Header';

const Courses = ({ data }) => {
  const title = data.kontentItemArticle.elements.title.value;
  const description =
    data.kontentItemArticle.elements.seo_metadata__meta_description.value;
  const introduction = data.kontentItemArticle.elements.introduction;
  const body = data.kontentItemArticle.elements.body;

  const testimonial =
    data.kontentItemArticle.elements.testimonial.value[0].elements.testimonial;
  const attribution =
    data.kontentItemArticle.elements.testimonial.value[0].elements.attribution
      .value;

  const featuredCourses = data.allKontentItemCourse.nodes;

  return (
    <Layout title={title} description={description}>
      <Header title={title} richText={introduction} />
      <RichTextElement
        value={body.value}
        linkedItems={body.modular_content}
        resolveLinkedItem={(linkedItem) => (
          <LinkedItem linkedItem={linkedItem} />
        )}
      />
      <CourseListing title="Courses" featuredCourses={featuredCourses} />
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
                        dates {
                          value
                        }
                        summary {
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
    allKontentItemCourse {
      nodes {
        elements {
          title {
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
          summary {
            value
          }
          url {
            value
          }
          dates {
            value
          }
          cost {
            value
          }
          subject_option {
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
        system {
          codename
        }
      }
    }
  }
`;
