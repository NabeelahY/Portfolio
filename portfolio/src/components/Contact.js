import React, { useState } from 'react';
import { ContactWrapper, Title } from './styles/ContactStyles';

const Contact = () => {
  const initialVals = {
    name: '',
    email: '',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: process.env.REACT_APP_ACCESS_KEY, // get your access key from https://www.staticforms.xyz
  };
  const [contact, setContact] = useState(initialVals);

  const [response, setResponse] = useState({
    type: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (
        contact.name !== '' &&
        contact.email !== '' &&
        contact.message !== ''
      ) {
        const res = await fetch('https://api.staticforms.xyz/submit', {
          method: 'POST',
          body: JSON.stringify(contact),
          headers: { 'Content-Type': 'application/json' },
        });
        const json = await res.json();
        if (json.success) {
          setResponse({
            type: 'success',
            message:
              "Thanks for reaching out. I'll get back to you as soon as possible!",
          });
          setLoading(false);
          setContact(initialVals);
        } else {
          setResponse({
            type: 'error',
            message: json.message,
          });
          setLoading(false);
        }
      } else {
        setResponse({
          type: 'error',
          message: 'Thank you, but please fill the form! 🤕.',
        });
        setLoading(false);
      }
    } catch (e) {
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      });
      setLoading(false);
    }
  };
  const statusResponse =
    response.message !== '' ? (
      <div className='message'>
        <p>{response.message}</p>
      </div>
    ) : (
      ''
    );

  return (
    <ContactWrapper>
      <Title>
        <h3>Don't hesitate to reach out!</h3>
        <span role='img' aria-label='wave'>
          🙋🏽‍♀️
        </span>
      </Title>
      <form
        name='contact'
        onSubmit={handleSubmit}
        action='https://api.staticforms.xyz/submit'
        method='post'
      >
        <div className='form'>
          <div className='top'>
            <input
              name='name'
              type='text'
              onChange={handleChange}
              value={contact.name}
              placeholder='Your name'
            />
            <input
              name='email'
              type='email'
              onChange={handleChange}
              value={contact.email}
              placeholder='Your E-mail'
            />
          </div>
          <input
            name='message'
            onChange={handleChange}
            value={contact.message}
            placeholder='Your Message'
          />
        </div>
        {statusResponse}
        <button>{loading ? 'Sending...' : 'Send'}</button>
      </form>
    </ContactWrapper>
  );
};

export default Contact;
