import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
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
        span: 8,
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

  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const [form] = Form.useForm();
  console.log(form);

  return (
    <ContactStyles>
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ContactStyles>
  );
};

export default Contact;
