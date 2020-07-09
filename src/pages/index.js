import React from 'react';
import Layout from '../components/Layout';

const Index = () => {
  const siteTitle = 'Thames Tutoring';

  return (
    <Layout title={siteTitle}>
      <header className="page-head">
        <h2 className="page-head-title">
          Core subject specialists mission statement and key services
        </h2>
        <p>Some additional information or call to action.</p>
      </header>
      <figure className="width-full">
        <img
          src="https://gatsby-london.netlify.app/static/f730aa735f8c274dd0d657d737cb4121/883ab/vladimir-malyutin-98174-unsplash.jpg"
          className="image"
          alt=""
        />
      </figure>
      <p>About us block</p>
      <p>Latest courses (if any)</p>
    </Layout>
  );
};

export default Index;
