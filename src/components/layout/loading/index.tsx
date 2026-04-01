'use client'

import { useState, useMemo } from 'react'
import { m, AnimatePresence, Variants } from 'motion/react'
import { Text } from '@/components/ui'

export const Loading = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFirstWordDone, setIsFirstWordDone] = useState(false)
  const lastName = useMemo(() => Array.from('KARABINOVYCH'), [])
  const firstName = useMemo(() => Array.from('VLADYSLAV'), [])

  const typingSpeed = 0.08 
  const secondWordDelay = lastName.length * typingSpeed + 0.5

  const columnVariants: Variants = {
    initial: { y: 0 },
    exit: (i: number) => ({
      y: '100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: i * 0.1
      }
    })
  }

  const letterVariants: Variants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline",
      transition: { duration: 0 }
    },
  }

  return (
    <AnimatePresence>
      {!isLoaded && (
        <m.div
          className="fixed inset-0 z-100 flex items-center justify-start overflow-hidden divide-x divide-muted"
          exit={{ opacity: 1 }}
        >
          {[...Array(4)].map((_, i) => (
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
            className="absolute inset-0 flex items-center justify-center z-10"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
          >
            <div className="grid grid-cols-[1fr_1fr] gap-8 w-full h-40">
              
              <div className='relative flex self-start place-self-end'>
                <Text size='xxxl_bold' className='invisible text-contrast tracking-tighter'>{lastName}</Text>
                <m.div 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: typingSpeed, delayChildren: 0.3 } }
                  }}
                  onAnimationComplete={() => setIsFirstWordDone(true)}
                  className=" whitespace-nowrap absolute text-right text-3xl font-bold text-text-inverse tracking-tighter uppercase"
                >
                  {lastName.map((l, i) => (
                    <m.span key={i} variants={letterVariants}>{l}</m.span>
                  ))}
                  {!isFirstWordDone && (
                    <m.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="inline-block w-1.5 h-[0.8em] bg-text-inverse ml-2 translate-y-1"
                    />
                  )}
                </m.div>
              </div>

              <m.div 
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { 
                    transition: { staggerChildren: typingSpeed, delayChildren: secondWordDelay } 
                  }
                }}
                onAnimationComplete={() => setTimeout(() => setIsLoaded(true), 1200)}
                className="text-left text-3xl font-bold text-text-inverse tracking-tighter uppercase self-end"
              >
                {firstName.map((l, i) => (
                  <m.span key={i} variants={letterVariants}>{l}</m.span>
                ))}
                <m.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ 
                    delay: secondWordDelay,
                    repeat: Infinity, 
                    duration: 0.8 
                  }}
                  className="inline-block w-1.5 h-[0.8em] bg-text-inverse ml-2 translate-y-1"
                />
              </m.div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
