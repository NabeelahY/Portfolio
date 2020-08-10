import React from 'react';
import { Card } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import { ProjectStyles } from './styles/Projects';
const { Meta } = Card;

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Support Ticket System API',
      desc: 'A customer support ticketing system',
      link: 'https://github.com/NabeelahY/support_ticket_system',
      github: 'https://github.com/NabeelahY/support_ticket_system',
    },
    {
      name: 'Where To Code',
      desc:
        'WhereToCode is targeted at remote software developers looking for places to work and code on the go.',
      link: 'https://wheretocode.com',
      github: 'https://github.com/where-to-code',
    },
    {
      name: 'Bookr API',
      desc:
        'Bookr is your source for all things textbooks, a social platform for peer-reviewed textbooks',
      link: 'https://github.com/bookr-buildweek/Back-End',
      github: 'https://github.com/bookr-buildweek/Back-End',
    },
    {
      name: 'Reddit Mini Clone',
      desc: 'Frontend to consume the Reddit API',
      link: 'https://reddit-mini-clone.netlify.app/',
      github: 'https://github.com/NabeelahY/reddit-spa',
    },
  ];

  const redirect = (link: string) => {
    window.open(link, '_blank', ' noopener noreferrer');
  };

  return (
    <ProjectStyles>
      <h1>Recent Projects</h1>
      <div>
        {projects.map((project, idx) => (
          <Card
            className="content"
            key={idx}
            hoverable={true}
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
            <Meta title={project.name} description={project.desc} />
          </Card>
        ))}
      </div>
    </ProjectStyles>
  );
};

export default Projects;
