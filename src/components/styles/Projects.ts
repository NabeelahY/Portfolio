import styled from 'styled-components';

export const ProjectStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

  h1 {
    font-size: 1.4rem;
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

    .ant-card-actions {
      .anticon {
        &.icon {
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
`;
