"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import the LocomotiveScroll component with no SSR
const LocomotiveScroll = dynamic(
  () =>
    import("locomotive-scroll").then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default
      return function LocomotiveScrollComponent({ options, containerRef, watch, children }) {
        const scrollRef = useRef(null)

        useEffect(() => {
          if (!containerRef.current) return

          // Create the scroll instance
          const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            lerp: 0.1,
            multiplier: 1.0,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
            ...options,
          })

          scrollRef.current = scroll

          // Update scroll on content change
          if (watch) {
            watch.forEach((item) => {
              if (item) {
                scroll.update()
              }
            })
          }

          // Clean up
          return () => {
            if (scrollRef.current) {
              scrollRef.current.destroy()
            }
          }
        }, [options, containerRef, watch])

        return children
      }
    }),
  { ssr: false },
)

interface LocomotiveScrollProviderProps {
  children: ReactNode
}

export function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Set client state after component mounts to avoid SSR issues
    setIsClient(true)
  }, [])

  return (
    <div data-scroll-container ref={containerRef}>
      {isClient ? (
        <LocomotiveScroll
          options={{
            smooth: true,
            lerp: 0.1,
            multiplier: 1.0,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          containerRef={containerRef}
          watch={[]}
        >
          {children}
        </LocomotiveScroll>
      ) : (
        children
      )}
    </div>
  )
}
