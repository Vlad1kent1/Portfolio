'use client'

import { useState, useMemo, useEffect } from 'react'
import { useUIStore } from '@/store/useUIStore'
import { m, MotionConfig, useReducedMotion, AnimatePresence, Variants } from 'motion/react'
import { Text } from '@/components/ui'

const LAST_NAME = 'KARABINOVYCH'
const FIRST_NAME = 'VLADYSLAV'
const TYPING_SPEED = 0.08
const COLUMN_COUNT = 4

const letterVariants: Variants = {
  hidden: { opacity: 0, display: "none" },
  visible: { opacity: 1, display: "inline", transition: { duration: 0 } },
}

const columnVariants: Variants = {
  initial: { y: 0 },
  exit: (i: number) => ({
    y: '100%',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.1
    }
  })
}

const Cursor = ({ delay = 0 }: { delay?: number }) => (
  <m.span
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{ delay, repeat: Infinity, duration: 0.8, ease: "linear" }}
    className="inline-block w-1.5 h-[0.8em] bg-text-inverse ml-2 translate-y-1"
  />
)

const IntroTextContent = ({ last, first }: { last: string; first: string }) => (
  <div className="grid grid-cols-[1fr_1fr] gap-8 w-full h-40">
    <div className="relative flex self-start place-self-end">
      <Text size="xxxl_bold" className="text-text-inverse tracking-tighter uppercase">
        {last}
      </Text>
    </div>
    <div className="text-left self-end">
      <Text size="xxxl_bold" className="text-text-inverse tracking-tighter uppercase">
        {first}
      </Text>
    </div>
  </div>
)

export const Intro = () => {
  const shouldReduceMotion = useReducedMotion()
  const { isIntroDone, setIsIntroDone } = useUIStore()

  const [isVisible, setIsVisible] = useState(!isIntroDone)
  const [isFirstWordDone, setIsFirstWordDone] = useState(false)

  const lastNameChars = Array.from(LAST_NAME)
  const firstNameChars = Array.from(FIRST_NAME)
  const secondWordDelay = lastNameChars.length * TYPING_SPEED + 0.5

  useEffect(() => {
    if (shouldReduceMotion && isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 1200)
      return () => clearTimeout(timer)
    }
  }, [shouldReduceMotion, isVisible])

  if (isIntroDone) return null

  return (
    <MotionConfig reducedMotion="never">
      <AnimatePresence onExitComplete={() => setIsIntroDone(true)}>
        {isVisible && (
          <m.div
            key="intro-overlay"
            className="fixed inset-0 z-100 flex items-center justify-start overflow-hidden divide-x divide-muted"
          >
            {[...Array(COLUMN_COUNT)].map((_, i) => (
              <m.div
                key={i}
                custom={i}
                variants={columnVariants}
                initial="initial"
                exit="exit"
                className="flex-1 self-stretch bg-background-inverse"
              />
            ))}

            <m.div
              className="show-only-on-reduced absolute inset-0 flex items-center justify-center z-10"
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <IntroTextContent last={LAST_NAME} first={FIRST_NAME} />
            </m.div>

            <m.div
              className="hide-on-reduced absolute inset-0 flex items-center justify-center z-10"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            >
              <div className="grid grid-cols-[1fr_1fr] gap-8 w-full h-40">
                <div className="relative flex self-start place-self-end">
                  <Text size="xxxl_bold" className="invisible tracking-tighter uppercase">
                    {LAST_NAME}
                  </Text>
                  <m.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: TYPING_SPEED, delayChildren: 0.3 } },
                    }}
                    onAnimationComplete={() => setIsFirstWordDone(true)}
                    className="whitespace-nowrap absolute text-right text-3xl font-bold text-text-inverse tracking-tighter uppercase"
                  >
                    {lastNameChars.map((l, i) => (
                      <m.span key={`last-${i}`} variants={letterVariants}>
                        {l}
                      </m.span>
                    ))}
                    {!isFirstWordDone && <Cursor />}
                  </m.div>
                </div>

                <m.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: TYPING_SPEED, delayChildren: secondWordDelay },
                    },
                  }}
                  onAnimationComplete={() => setTimeout(() => setIsVisible(false), 1200)}
                  className="text-left text-3xl font-bold text-text-inverse tracking-tighter uppercase self-end"
                >
                  {firstNameChars.map((l, i) => (
                    <m.span key={`first-${i}`} variants={letterVariants}>
                      {l}
                    </m.span>
                  ))}
                  <Cursor delay={secondWordDelay} />
                </m.div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}
