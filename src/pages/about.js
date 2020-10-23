import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';
import Header from '../components/Header';

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
    <Layout title={metaTitle} description={metaDescription}>
      <Header title={title} />
      <div className="content-body">
        <RichTextElement
          value={body.value}
          images={body.images}
          resolveImage={(image) => (
            <figure className="width-full image-card">
              <Image
                fluid={image.fluid}
                title={image.description}
                alt={image.description}
              />
            </figure>
          )}
        />
      </div>
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
  }
`;
