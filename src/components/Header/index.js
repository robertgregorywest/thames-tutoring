import React from 'react';
import { RichTextElement } from '@kentico/gatsby-kontent-components';
import LinkedItem from '../LinkedItem';
import './header.scss';

const Header = ({ title, richText }) => (
  <header className="page-head">
    <h2 className="page-head__title">{title}</h2>
    {richText && (
      <RichTextElement
        value={richText.value}
        linkedItems={richText.modular_content}
        resolveLinkedItem={(linkedItem) => (
          <LinkedItem linkedItem={linkedItem} />
        )}
      />
    )}
  </header>
);

export default Header;
