import { motion } from "framer-motion";
import { item } from "../../helpers/FramerMotionAnimationValues";

export default function ImageInstruction({ src, alt }) {
  return (
    <motion.img variants={item}
      className="img-fluid mb-3 shadow-sm"
      src={src}
      alt={alt} />
  )
}
