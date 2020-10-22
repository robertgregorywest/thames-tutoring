import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';

const About = ({ data }) => {
  const title = data.kontentItemArticle.elements.title.value;
  const metaTitle =
    data.kontentItemArticle.elements.seo_metadata__meta_title.value;
  const metaDescription =
    data.kontentItemArticle.elements.seo_metadata__meta_description.value;
  const intro = data.kontentItemArticle.elements.body;

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <Header title={title} richText={intro} />
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    kontentItemArticle(system: { codename: { eq: "about" } }) {
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
        body {
          value
        }
      }
    }
  }
`;
