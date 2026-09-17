import React from 'react'
import { motion } from 'framer-motion'
import LoadLottie from '../../loadLottie'
import Sent from "../../utils/json/MailSent.json"

export default function BookingFormSuccess() {
  return (
    <div className="bg-[#000]/[70%] fixed inset-0 z-[100] h-screen w-full flex justify-center items-center">
          <motion.div
            className='relative w-11/12 md:w-[548px] bg-[#0D1B3A] rounded-[10px] md:rounded-[20px] p-[15px] z-[55] text-[#FFF] max-h-[90vh] md:h-[354px] overflow-y-scroll flex flex-col justify-center items-center'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className='size-[80px] md:size-[150px] mx-auto flex justify-center items-center'>
              <LoadLottie animationData={Sent} loop={true} />
            </div>
            <div className='text-center mt-1'>
              <p className='font-bold text-[14px] md:text-[20px]'>🎉 Thank you for contacting FirstGen Digital!</p>
              <p className='mt-1 font-normal text-[12px] md:text-[14px] text-[#828487]'>We've received your request and will reach out within 24 hours.</p>
            </div>
          </motion.div>
        </div>
  )
}
