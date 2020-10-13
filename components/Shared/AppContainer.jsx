import { motion } from "framer-motion"
import { container } from "../../helpers/FramerMotionAnimationValues"
import Logo from "../Logo"
import { RightSideBar } from "./RightSideBar"
import { LeftSideBar } from './LeftSideBar'

export const AppContainer = ({ children }) => {
  return (
    <main>
      <div className="row">
        <RightSideBar />
        <motion.div className="col-md-8" animate="show" initial="hidden" variants={container}>
          <Logo />
          {children}
        </motion.div>
        <LeftSideBar />
      </div>
    </main>
  )
}