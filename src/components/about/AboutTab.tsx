'use client'
import React, { useState } from 'react'
import { Nav, Tab } from 'react-bootstrap';
import MyselfTabPane from './MyselfTabPane';
import EducationTabPane from './EducationTabPane';
import SkillTabPane from './SkillTabPane';
import AwardTabPane from './AwardTabPane';
import {motion} from 'framer-motion';

const AboutTab = () => {
    const [activeKey, setActiveKey] = useState<string>('myself');

    const handleSelect = (selectedKey: string | null) => {
      if (selectedKey) {
        setActiveKey(selectedKey);
      }
    };
  return (
    <>
        <Nav activeKey={activeKey} onSelect={handleSelect}>
            <motion.div 
            className="nav about-9-tab-nav"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once: true}}
            transition={{duration:1.5}}
            >
            <Nav.Item>
            <Nav.Link role='button' className={`about-9-tab-btn ${activeKey === 'myself' ? 'active':''}`} eventKey="myself">My Self</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link role='button' className={`about-9-tab-btn ${activeKey === 'education' ? 'active':''}`} eventKey="education">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link role='button' className={`about-9-tab-btn ${activeKey === 'skill' ? 'active':''}`} eventKey="skill">Skill</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link role='button' className={`about-9-tab-btn ${activeKey === 'award' ? 'active':''}`} eventKey="award">Award</Nav.Link>
            </Nav.Item>
            </motion.div>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="myself" className={activeKey === 'myself' ? 'active show':''}>
            <MyselfTabPane />
          </Tab.Pane>
          <Tab.Pane eventKey="education" className={activeKey === 'education' ? 'active show':''}>
            <EducationTabPane />
          </Tab.Pane>
          <Tab.Pane eventKey="skill" className={activeKey === 'skill' ? 'active show':''}>
            <SkillTabPane />
          </Tab.Pane>
          <Tab.Pane eventKey="award" className={activeKey === 'award' ? 'active show':''}>
            <AwardTabPane />
          </Tab.Pane>
        </Tab.Content>
    </>
  )
}

export default AboutTab