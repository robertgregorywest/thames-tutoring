import React from 'react';
import { RichTextElement } from '@kentico/gatsby-kontent-components';

const Header = ({ title, richText }) => (
  <header className="page-head">
    <h2>{title}</h2>
    {richText && <RichTextElement value={richText.value} />}
  </header>
);

export default Header;
