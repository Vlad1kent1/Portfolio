'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'motion/react'
import { Text } from '@/components/ui'

export const Loading = () => {
  const rawProgress = useMotionValue(0)

  const springProgress = useSpring(rawProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const controls = animate(rawProgress, 100, {
      duration: 4,
      ease: "linear",
    })

    return () => controls.stop()
  }, [rawProgress])

  const steps = 8;
  const clipPath = useTransform(springProgress, (value) => {
    const steppedValue = Math.floor(value / (100 / steps)) * (100 / steps);
    return `inset(0 ${100 - steppedValue}% 0 0)`;
  })

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background overflow-hidden">
      <div className="relative inline-block">
        
        <Text
          size="xxl_bold"
          className="m-0 select-none whitespace-nowrap leading-none tracking-tighter uppercase text-muted"
        >
          LOADING
        </Text>

        <motion.div
          style={{ clipPath }}
          className="absolute inset-0"
        >
          <Text
            size="xxl_bold"
            className="m-0 select-none whitespace-nowrap leading-none tracking-tighter uppercase text-contrast"
          >
            LOADING
          </Text>
        </motion.div>
        
      </div>
    </div>
  )
}