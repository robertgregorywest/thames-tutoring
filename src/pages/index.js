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

  const featuredCourses = data.kontentItemHome.elements.featured_courses.value;

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
      <CourseListing title="Latest Courses" featuredCourses={featuredCourses} />
      <AboutBlock title={aboutUsTitle} richText={aboutUsRichText} />
      <SubjectAreasListing title="What We Cover" subjectAreas={subjectAreas} />
      <Testimonial testimonial={testimonial} />
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
          modular_content {
            ... on kontent_item_call_to_action {
              ...CallToActionInfo
            }
          }
        }
        hero_image {
          value {
            fluid(maxWidth: 1000) {
              ...KontentAssetFluid
            }
            description
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
              ...CourseInfo
            }
          }
        }
        subject_areas {
          value {
            ... on kontent_item_subject_area {
              ...SubjectAreasListingInfo
            }
          }
        }
        testimonial {
          value {
            ... on kontent_item_testimonial {
              ...TestimonialInfo
            }
          }
        }
      }
    }
  }
`;
