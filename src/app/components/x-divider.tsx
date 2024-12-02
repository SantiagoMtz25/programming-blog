import React from 'react'
import { motion } from 'framer-motion'

const XDivider = () => {
  return (
    <motion.div 
      className='border-2 border-x-slate-400 shadow'
      initial={{ width: '0%'}}
      animate={{ width: '100%'}}
    ></motion.div>
  )
}

export default XDivider