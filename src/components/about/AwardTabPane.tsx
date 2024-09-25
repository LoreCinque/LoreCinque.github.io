import React from "react";
import {motion} from 'framer-motion'
const AwardTabPane = () => {
  return (
    <motion.table 
    className="table award-table"
    initial={{
        y: 40,
        opacity: 0
    }}
    whileInView={{
        y:0,
        opacity: 1
    }}
    viewport={{once: true}}
    transition={{duration:1.2}}
    >
      <tbody>
        <tr>
          <td className="title-anim">Content Marketing</td>
          <td className="title-anim">Winner</td>
          <td className="title-anim">2023</td>
        </tr>
        <tr>
          <td className="title-anim">Digi day Awards</td>
          <td className="title-anim">Winner</td>
          <td className="title-anim">2022</td>
        </tr>
        <tr>
          <td className="title-anim">Pearl Awards</td>
          <td className="title-anim">Winner</td>
          <td className="title-anim">2019</td>
        </tr>
        <tr>
          <td className="title-anim">Lovie Awards</td>
          <td className="title-anim">Nominated</td>
          <td className="title-anim">2016</td>
        </tr>
      </tbody>
    </motion.table>
  );
};

export default AwardTabPane;
