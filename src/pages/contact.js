/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from 'gatsby-link';
import Layout from '../components/Layout';
import '../assets/scss/pages/contact.scss';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Contact = ({ data }) => {
  const title = data.kontentItemArticle.elements.title.value;
  const description =
    data.kontentItemArticle.elements.seo_metadata__meta_description.value;
  const intro = data.kontentItemArticle.elements.body;

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <Layout
      metaTitle={title}
      title={title}
      metaDescription={description}
      introduction={intro}
    >
      <form
        className="contact"
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div className="contact__field">
          <label htmlFor="name">
            Your Name:{' '}
            <input
              type="text"
              name="name"
              className="contact__field-element"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="contact__field">
          <label htmlFor="email">
            Your Email:{' '}
            <input
              type="email"
              name="email"
              className="contact__field-element"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="contact__field">
          <label htmlFor="subject">
            Subject:{' '}
            <input
              type="subject"
              name="subject"
              className="contact__field-element"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="contact__field">
          <label htmlFor="message">
            Message:{' '}
            <textarea
              name="message"
              className="contact__field-element contact__textarea"
              required
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" className="contact__button">
            <span className="contact__button-text">Submit</span>
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query ContactQuery {
    kontentItemArticle(system: { codename: { eq: "contact" } }) {
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
