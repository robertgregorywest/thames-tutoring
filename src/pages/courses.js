import React from 'react';
import { graphql } from 'gatsby';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import CourseListing from '../components/CourseListing';
import Testimonial from '../components/Testimonial';

const Courses = ({ data }) => {
  const title = data.kontentItemArticle.elements.title.value;
  const intro = data.kontentItemArticle.elements.body;

  const testimonial =
    data.kontentItemArticle.elements.testimonial.value[0].elements.testimonial;
  const attribution =
    data.kontentItemArticle.elements.testimonial.value[0].elements.attribution
      .value;

  const featuredCourses = data.allKontentItemCourse.nodes;

  return (
    <Layout title={title}>
      <header className="page-head">
        <h2>{title}</h2>
        <RichTextElement value={intro.value} />
      </header>

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
        body {
          value
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
      }
    }
  }
`;
