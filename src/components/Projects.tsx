import React from 'react';
import { Card } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { ProjectStyles } from './styles/Projects';
const { Meta } = Card;

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Support Ticket System API',
      desc:
        'A customer support ticketing system. The system allows customers to be able to place support requests, and support agents to process the request',
      link: 'https://github.com/NabeelahY/support_ticket_system',
      github: 'https://github.com/NabeelahY/support_ticket_system',
      stack: 'TypeScript, MongoDB, NodeJS, ExpressJS, Jest',
    },
    {
      name: 'Textractor',
      desc: 'App to extract text from images and download as .txt files. Users can use this app to upload images they would like to extract text from.',
      link: 'https://develop.d15mzgyv498byw.amplifyapp.com/',
      github: 'https://github.com/NabeelahY/aws-react',
      stack: 'TypeScript, React, AWS Amplify, AWS Lambda, AWS Rekognition, S3',
    },
    {
      name: 'Where To Code',
      desc:
        'WhereToCode is targeted at remote software developers looking for places to work and code on the go.',
      link: 'https://youtu.be/GRBEZQ1l0q4',
      github: 'https://github.com/where-to-code',
      stack:
        'JavaScript, React/Redux, PostgreSQL, NodeJS, ExpressJS, Google Map API',
    },
    {
      name: 'Bookr API',
      desc:
        'Bookr is your source for all things textbooks, a social platform for peer-reviewed textbooks',
      link: 'https://github.com/bookr-buildweek/Back-End',
      github: 'https://github.com/bookr-buildweek/Back-End',
      stack: 'JavaScript, PostgreSQL, NodeJS, ExpressJS, Jest',
    },
    {
      name: 'Reddit Mini Clone',
      desc: 'Frontend to consume the Reddit API. Users can see lists of posts grouped by their subreddits and be able to search and sort through posts.',
      link: 'https://reddit-mini-clone.netlify.app/',
      github: 'https://github.com/NabeelahY/reddit-spa',
      stack: 'TypeScript, React/Redux, React Bootstrap',
    },
  ];

  const redirect = (link: string) => {
    window.open(link, '_blank', ' noopener noreferrer');
  };

  return (
    <ProjectStyles id="Projects">
      <h1>Recent Projects</h1>
      <div className="work">
        {projects.map((project, idx) => (
          <Card
            className="content"
            key={idx}
            bordered={false}
            actions={[
              <GithubOutlined
                key="github"
                onClick={() => redirect(project.github)}
                className="icon"
              />,
              <LinkOutlined
                key="link"
                onClick={() => redirect(project.link)}
                className="icon"
              />,
            ]}
          >
            <Meta
              title={project.name}
              description={
                <>
                  <p>Stack: {project.stack}</p>
                  <div>{project.desc}</div>
                </>
              }
            />
          </Card>
        ))}
      </div>
    </ProjectStyles>
  );
};

export default Projects;
