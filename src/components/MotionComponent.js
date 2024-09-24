import { ConstructionSharp } from "@mui/icons-material"
import { motion } from "framer-motion"

const  MotionComponent = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 0.5, x:100 }}
    transition={{ duration: 0.5 }}
  >{" "}</motion.div>
)


export default MotionComponent