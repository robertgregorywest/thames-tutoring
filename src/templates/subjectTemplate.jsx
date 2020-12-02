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
      <h2>Our Tutors</h2>
      <TutorListing tutors={tutors} />
      <Testimonial testimonial={testimonial} />
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
              ...ListingBlockInfo
            }
          }
        }
        tutors {
          value {
            ... on kontent_item_tutor {
              ...TutorListingInfo
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
