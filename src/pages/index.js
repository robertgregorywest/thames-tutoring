/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';

const Index = ({ data }) => {
  const siteTitle = data.kontentItemHome.elements.site_title.value;
  const vision = data.kontentItemHome.elements.company_vision_statement;
  const heroImage = data.kontentItemHome.elements.hero_image.value[0];

  const aboutUsTitle = data.kontentItemHome.elements.about_us_title.value;
  const aboutUsRichText = data.kontentItemHome.elements.about_us;

  const testimonial = data.kontentItemHome.elements.testimonial.value[0].elements.testimonial;
  const attribution = data.kontentItemHome.elements.testimonial.value[0].elements.attribution.value;
  return (
    <Layout title={siteTitle}>
      <header className="page-head">
        <RichTextElement
          value={vision.value}
          images={vision.images}
          resolveImage={image => (
            <figure className="width-full">
              <Image
                fluid={image.fluid}
                title={image.description}
                alt={image.description}
              />
            </figure>
          )}
        />
      </header>
      <figure className="width-full">
        <Image
          fluid={heroImage.fluid}
          title={heroImage.description}
          alt={heroImage.description}
        />
      </figure>
      <p>Latest courses triple block</p>
      <div className="flex-grid">
        <div className="col">
          <h2>{aboutUsTitle}</h2>
        </div>
        <div className="col">
          <RichTextElement value={aboutUsRichText.value} />
        </div>
      </div>
      <p>Subjects triple block</p>
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
      }
    }
  }
`;
