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
    text-align: center;
  }

  .work {
    width: 100%;
    .content {
      margin: 10px 0;
      color: #fff;
      background-color: #434343;
      width: 100%;

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
  }

  @media (min-width: 1024px) {
    .work {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: center;
      margin: 20px 0;
      .content {
        width: 40%;
        margin: 10px;
        .ant-card-body {
          height: 220px;
        }
      }
    }
  }
`;
