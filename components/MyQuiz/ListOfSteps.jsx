import { motion } from "framer-motion";
import { Translate } from "lang/StaticTexts";
import { item } from "animations/basic";

const ListOfSteps = ({ steps, lang }) => {
  return (
    <ul>
      {steps.map((step, idx) => (
        <motion.li key={idx} variants={item}>
          {Translate[step][lang]}
        </motion.li>))
      }
    </ul>
  )
}

export default ListOfSteps