import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';

const About = ({ data }) => {
  const title = data.kontentItemArticle.elements.title.value;
  const metaTitle =
    data.kontentItemArticle.elements.seo_metadata__meta_title.value;
  const metaDescription =
    data.kontentItemArticle.elements.seo_metadata__meta_description.value;
  const body = data.kontentItemArticle.elements.body;
  const testimonial =
    data.kontentItemArticle.elements.testimonial.value[0].elements.testimonial;
  const attribution =
    data.kontentItemArticle.elements.testimonial.value[0].elements.attribution
      .value;

  return (
    <Layout
      title={title}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
    >
      <RichTextElement
        value={body.value}
        images={body.images}
        resolveImage={(image) => (
          <figure className="main-wrapper__width-75">
            <Image
              fluid={image.fluid}
              title={image.description}
              alt={image.description}
            />
          </figure>
        )}
      />
      <Testimonial testimonial={testimonial} attribution={attribution} />
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
          images {
            image_id
            fluid(maxWidth: 1000) {
              ...KontentAssetFluid
            }
            description
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
