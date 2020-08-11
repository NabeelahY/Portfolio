import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { ContactStyles } from './styles/Contact';

const Contact: React.FC = () => {
  const initialVals = {
    name: '',
    email: '',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: process.env.REACT_APP_ACCESS_KEY, // get your access key from https://www.staticforms.xyz
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const btnLayout = {
    wrapperCol: {
      sm: {
        offset: 4,
        span: 16,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    type: '',
    message: '',
  });
  const [form] = Form.useForm();

  const handleClose = () => {
    setResponse({
      type: '',
      message: '',
    });
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const val = { ...initialVals, ...values };
    const res = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify(val),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await res.json();

    json.success
      ? setResponse({
          type: 'success',
          message:
            "Thanks for reaching out. I'll get back to you as soon as possible!",
        })
      : setResponse({
          type: 'error',
          message: json.message,
        });

    setLoading(false);
    form.resetFields();
  };

  return (
    <ContactStyles id="Contact">
      {response.type === 'success' ? (
        <Alert
          message="Success"
          description={response.message}
          type="success"
          showIcon
          closable
          onClose={handleClose}
        />
      ) : response.type === 'error' ? (
        <Alert
          message="Error"
          description={response.message}
          type="error"
          showIcon
          closable
          onClose={handleClose}
        />
      ) : (
        ''
      )}

      <h1>Contact Me</h1>

      <Form
        {...formItemLayout}
        name="contact"
        form={form}
        onFinish={handleSubmit}
        initialValues={initialVals}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please enter your email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[
            {
              required: true,
              message: 'Please enter your message',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item {...btnLayout}>
          <Button type="ghost" htmlType="submit" block loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ContactStyles>
  );
};

export default Contact;
