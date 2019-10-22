import React from 'react';
import { ContactWrapper, Title } from './styles/ContactStyles';

const Contact = () => {
  return (
    <ContactWrapper>
      <Title>
        <h3>Don't hesitate to reach out!</h3>
        <span role='img' aria-label='wave'>
          🙋🏽‍♀️
        </span>
      </Title>
      <div>For work related enquries, shoot me an email:</div>
      <p>
        <a
          href='mailto:nabeelahyousuph@gmail.com?subject=Hi there!&body=Hi 👋🏽.'
          target='_blank'
          rel='noopener noreferrer'
        >
          nabeelahyousuph@gmail.com
        </a>
      </p>
    </ContactWrapper>
  );
};

export default Contact;
