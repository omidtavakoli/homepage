import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

// const pageText = {
//   paraOne: ``,
// };

const pageText = {
  paraOne: ``,
  paraTwo: `I'm a curious Software Engineer with more than 7 years of experience in design, develope and deploy qualified software. 
  Through my training and also during my studies at the <a href="https://aut.ac.ir/en" target="_blank">Amirkabir University of Technology</a>, I gained experience with various technologies. 
  After graduating as a computer engineer, I joined Ashnasecure as a security specialist for penetration testing of web applications and 
  networks based on OWASP metrics. Then I came to Emaarat startup as Tech Lead and developed a comprehensive online building platform. 
  Then I came to Miras startup, a big data and AI company as the only full-stack software engineer to clean up, 
  visualize and deploy data intensive APIs. Eventually, I joined the AI ​​team of one of the top startups in 
  Iran named <a href="https://www.sabaidea.com/en/" target="_blank">SabaIdea</a>. This company's main products/services are 
  <a href="https://www.aparat.com/" target="_blank">Aparat</a>(top Iranian website in the world), 
  <a href="https://www.filimo.com/" target="_blank">Filimo</a> (top VOD service in Iran), 
  <a href="https://www.televika.com/en" target="_blank">Televika</a> and <a href="https://www.aparatkids.com/" target="_blank">Aparatkids</a>. 
  My duty is providing services for millions of users such as creating and delivering 
  Filimo movie rows and all products' search engine.`,
};

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Omid', 'Tavakoli', 'Omid Tavakoli', 'FullStack software engineer', 'Golang', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        {/* <h1 className="titleSeparate">About Me</h1> */}
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[5, 5]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="challenge.png"
            height={60}
            height={60}
            alt="location image"
            textH4="Challenges?"
            textH3="More Than Welcomed"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            height={60}
            height={60}
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            height={60}
            height={60}
            img="meeting.png"
            alt="meeting image"
            textH4="Meeting New People"
            textH3="Always Enjoyed"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            height={60}
            height={60}
            img="running.png"
            alt="running image"
            textH4="Love Running"
            textH3="Run for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            height={60}
            height={60}
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            height={60}
            height={60}
            img="graduation.png"
            alt="graduation image"
            textH4="Bachelor in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
