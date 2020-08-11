import styled from 'styled-components';

export const ProjectStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;

  h1 {
    font-size: 1.4rem;
    text-decoration: underline solid #ec3c37;
  }

  .ant-card {
    margin: 10px 0;
    &.content {
      color: #fff;
      background-color: #434343;
    }

    .ant-card-meta-detail {
      .ant-card-meta-description,
      .ant-card-meta-title {
        color: #fff;
      }
    }

    .ant-card-meta-description {
      p {
        color: #ccc;
        font-size: 0.8rem;
        padding: 10px 0;
      }
    }

    .ant-card-actions {
      .anticon {
        &.icon {
          &:hover {
            color: #ec3c37;
          }
        }
      }
    }
  }
`;
