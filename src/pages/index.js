import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';
import CourseListing from '../components/CourseListing';
import AboutBlock from '../components/AboutBlock';
import SubjectAreasListing from '../components/SubjectAreasListing';

const Index = ({ data }) => {
  const metaTitle =
    data.kontentItemHome.elements.seo_metadata__meta_title.value;
  const description =
    data.kontentItemHome.elements.seo_metadata__meta_description.value;
  const title = data.kontentItemHome.elements.title.value;
  const vision = data.kontentItemHome.elements.company_vision_statement;
  const heroImage = data.kontentItemHome.elements.hero_image.value[0];

  const aboutUsTitle = data.kontentItemHome.elements.about_us_title.value;
  const aboutUsRichText = data.kontentItemHome.elements.about_us.value;

  const testimonial =
    data.kontentItemHome.elements.testimonial.value[0].elements.testimonial;
  const attribution =
    data.kontentItemHome.elements.testimonial.value[0].elements.attribution
      .value;

  const featuredCourses = data.kontentItemHome.elements.featured_courses.value;

  const showCourses =
    Array.isArray(featuredCourses) && featuredCourses.length > 0;

  const subjectAreas = data.kontentItemHome.elements.subject_areas.value;

  return (
    <Layout
      title={title}
      metaTitle={metaTitle}
      metaDescription={description}
      introduction={vision}
    >
      <figure className="main-wrapper__full">
        <Image fluid={heroImage.fluid} alt={heroImage.description} />
      </figure>
      {showCourses && (
        <CourseListing
          title="Latest Courses"
          featuredCourses={featuredCourses}
        />
      )}
      <AboutBlock title={aboutUsTitle} richText={aboutUsRichText} />
      <SubjectAreasListing title="What We Cover" subjectAreas={subjectAreas} />
      <Testimonial testimonial={testimonial} attribution={attribution} />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    kontentItemHome {
      elements {
        title {
          value
        }
        site_title {
          value
        }
        seo_metadata__meta_title {
          value
        }
        seo_metadata__meta_description {
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
              system {
                codename
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
      }
    }
  }
`;
