import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import CourseListing from '../components/CourseListing';
import SubjectAreasListing from '../components/SubjectAreasListing';
import Testimonial from '../components/Testimonial';

const Index = ({ data }) => {
  const title = data.kontentItemHome.elements.title.value;
  const vision = data.kontentItemHome.elements.company_vision_statement;
  const heroImage = data.kontentItemHome.elements.hero_image.value[0];

  const aboutUsTitle = data.kontentItemHome.elements.about_us_title.value;
  const aboutUsRichText = data.kontentItemHome.elements.about_us;

  const testimonial =
    data.kontentItemHome.elements.testimonial.value[0].elements.testimonial;
  const attribution =
    data.kontentItemHome.elements.testimonial.value[0].elements.attribution
      .value;

  const featuredCourses = data.kontentItemHome.elements.featured_courses.value;

  const subjectAreas = data.kontentItemHome.elements.subject_areas.value;

  return (
    <Layout title={title}>
      <header className="page-head">
        <RichTextElement value={vision.value} />
      </header>

      <figure className="width-full">
        <Image fluid={heroImage.fluid} alt={heroImage.description} />
      </figure>

      <CourseListing title="Latest Courses" featuredCourses={featuredCourses} />

      <section className="grid grid--full large-grid--fit about">
        <div className="custom-shape-divider-top-1594982357">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="shape-fill"
            />
          </svg>
        </div>
        <div className="grid-cell">
          <h2 className="about__title">{aboutUsTitle}</h2>
        </div>
        <div className="grid-cell about__text">
          <RichTextElement value={aboutUsRichText.value} />
        </div>
        <div className="custom-shape-divider-bottom-1594916332">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>

      <SubjectAreasListing subjectAreas={subjectAreas} />

      <Testimonial testimonial={testimonial} attribution={attribution} />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    kontentItemHome {
      elements {
        site_title {
          value
        }
        title {
          value
        }
        company_vision_statement {
          value
        }
        hero_image {
          value {
            fluid(maxWidth: 1000) {
              ...KontentAssetFluid
            }
            description
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
        about_us_title {
          value
        }
        about_us {
          value
        }
        featured_courses {
          value {
            ... on kontent_item_course {
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
            }
          }
        }
        subject_areas {
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
            }
          }
        }
      }
    }
  }
`;
