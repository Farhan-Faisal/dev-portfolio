import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { LiIcon } from '../atoms/LiIcon'

const EduDetails = ({ type, time, place, info, cGPA }) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
      >
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
          <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
            {time} | {place} | cGPA: {cGPA}
          </span>
          <p className="font-medium w-full md:text-sm">{info}</p>
        </motion.div>
      </li>
    );
};

export default EduDetails;