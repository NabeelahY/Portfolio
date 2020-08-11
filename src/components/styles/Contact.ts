import styled from 'styled-components';

export const ContactStyles = styled.section`
  padding: 20px;

  h1 {
    font-size: 1.4rem;
    margin: 20px 0 10px 0;
    text-align: center;
  }

  .ant-alert-description {
    color: rgba(0, 0, 0, 0.65);
  }
  form {
    label {
      color: #fff;
    }
    input {
      height: 40px;
    }
    textarea {
      resize: none;
    }
    button {
      padding: 8px 0;
      height: 40px;
    }
  }
`;
