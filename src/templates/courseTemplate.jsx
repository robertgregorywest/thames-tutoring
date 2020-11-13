import React from 'react';
import { graphql } from 'gatsby';
// import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
// import LinkedItem from '../components/LinkedItem';

const CourseTemplate = ({ data }) => {
  const title = data.kontentItemCourse.elements.title.value;
  const metaTitle =
    data.kontentItemCourse.elements.seo_metadata__meta_title.value;
  const metaDescription =
    data.kontentItemCourse.elements.seo_metadata__meta_description.value;
  const introduction = data.kontentItemCourse.elements.introduction;

  return (
    <Layout
      title={title}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      introduction={introduction}
    >
      {/* <RichTextElement
        value={details.value}
        linkedItems={details.modular_content}
        resolveLinkedItem={(linkedItem) => (
          <LinkedItem linkedItem={linkedItem} />
        )}
      /> */}
      <p>Map</p>
    </Layout>
  );
};

export default CourseTemplate;

export const pageQuery = graphql`
  query CourseQuery($url: String!) {
    kontentItemCourse(elements: { url: { value: { eq: $url } } }) {
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
        dates {
          value
        }
        cost {
          value
        }
      }
    }
  }
`;
