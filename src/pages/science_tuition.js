import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';
import Header from '../components/Header';

const ScienceTuition = ({ data }) => {
  const title = data.kontentItemSubjectArea.elements.title.value;
  const metaTitle =
    data.kontentItemSubjectArea.elements.seo_metadata__meta_title.value;
  const metaDescription =
    data.kontentItemSubjectArea.elements.seo_metadata__meta_description.value;
  // const summary = data.kontentItemSubjectArea.elements.summary;
  const details = data.kontentItemSubjectArea.elements.details;
  const testimonial =
    data.kontentItemSubjectArea.elements.testimonial.value[0].elements
      .testimonial;
  const attribution =
    data.kontentItemSubjectArea.elements.testimonial.value[0].elements
      .attribution.value;

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <Header title={title} />
      <div className="content-body">
        <RichTextElement
          value={details.value}
          images={details.images}
          resolveImage={(image) => (
            <figure className="width-wide image-card">
              <Image
                fluid={image.fluid}
                title={image.description}
                alt={image.description}
              />
            </figure>
          )}
        />
        <h2>Our Tutors</h2>
      </div>
      <Testimonial testimonial={testimonial} attribution={attribution} />
    </Layout>
  );
};

export default ScienceTuition;

export const pageQuery = graphql`
  query ScienceTuitionQuery {
    kontentItemSubjectArea(system: { codename: { eq: "science_tuition" } }) {
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
