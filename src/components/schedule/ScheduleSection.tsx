'use client'
import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit';
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine';

interface ScheduleItem {
  id: string;
  label: string;
}

const scheduleItems: ScheduleItem[] = [
  { id: 'all', label: 'ALL' },
  { id: 'aerobics', label: 'AEROBICS' },
  { id: 'spinning', label: 'SPINNING' },
  { id: 'body pump', label: 'BODY PUMP' },
  { id: 'crossfit', label: 'CROSSFIT' },
  { id: 'yoga', label: 'YOGA' },
  { id: 'zumba', label: 'ZUMBA' },
];

const scheduleData: string[][] = [
  ['8:00 am - 10:00 am', 'aerobics', '', 'yoga', 'zumba', 'yoga', 'body pump'],
  ['10:00 am - 12:00 pm', '', 'body pump', '', '', 'aerobics', ''],
  ['12:00 pm - 2:00 pm', 'spinning', '', 'aerobics', 'body pump', '', 'spinning'],
  ['2:00 pm - 4:00 pm', '', 'crossfit', 'spinning', '', 'zumba', ''],
  ['4:00 pm - 6:00 pm', 'zumba', 'yoga', '', 'crossfit', '', 'crossfit'],
];

const ScheduleNavItem: React.FC<{ id: string; onClick: () => void; active: boolean; children: ReactNode }> = ({ id, onClick, active, children }) => (
    <li>
      <a role="button" id={id} className={active ? 'active' : ''} onClick={onClick}>
        {children}
      </a>
    </li>
  );
  

const ScheduleSection: React.FC = () => {
  const [activeClass, setActiveClass] = useState<string>('all');

  const handleNavItemClick = (class_name: string) => {
    setActiveClass(class_name);
  };

  return (
    <section>
      <div className="class-schedule-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-6">
              <motion.div 
              className="section-heading-8 section-heading-10 text-center"
                initial={{
                opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                viewport={{once: true}}
                transition={{
                    duration: 1.5
                }}
              >
                <h2 className="mb-4">
                    <CustomGsapTextSplit children="Class Schedule"/>
                </h2>
                    <CustomGsapTextSplitLine className="title-txt">
                        Aerobics is a form of cardiovascular exercise that involves a combination of rhythmic movements, dance-like steps, and repetitive motions             
                    </CustomGsapTextSplitLine>
              </motion.div>
            </div>
          </div>
          <motion.ul
           className="schedule-nav fade_bottom"
           initial={{
            y: 40,
            opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            viewport={{once: true}}
            transition={{
                duration: 1.5
            }}
           >
        {scheduleItems.map((item) => (
            <ScheduleNavItem key={item.id} id={item.id} onClick={() => handleNavItemClick(item.id)} active={activeClass === item.id}>
            {item.label}
            </ScheduleNavItem>
        ))}
        </motion.ul>
          <div className="table-responsive fade_bottom">
            <table className="table table-bordered class-schedule-table">
              <thead>
                <motion.tr
                 initial={{
                    opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{once: true}}
                    transition={{
                        duration: 1.5
                    }}
                >
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </motion.tr>
              </thead>
              <tbody>
                {scheduleData.map((row, rowIndex) => (
                  <motion.tr 
                  key={rowIndex}
                  initial={{
                    opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{once: true}}
                    transition={{
                        duration: 1.2 + rowIndex * 0.2
                    }}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className={activeClass === cell ? 'highlighted':''}>
                        {cell.toUpperCase()}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
