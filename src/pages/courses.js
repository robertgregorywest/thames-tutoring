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
      <Testimonial testimonial={testimonial} />
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
              ...ListingBlockInfo
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
