"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Rocket } from "lucide-react"
import CryptoBackground from "@/components/crypto-background"

export default function LandingPage() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleExploreClick = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      router.push("/main")
    }, 1200)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <CryptoBackground />

      {/* Elegant floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 100, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full z-50"
            style={{ transformOrigin: "center" }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="mb-12 relative"
          ></motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-7xl md:text-9xl font-bold mb-8 leading-tight"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              YOVENTA
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-2xl md:text-3xl text-white mb-6 font-light tracking-wide"
          >
            <motion.span
              animate={{
                color: ["#60a5fa", "#a78bfa", "#f472b6", "#60a5fa"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Your Venture Into Advanced Technology
            </motion.span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-xl text-gray-200 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of decentralized innovation. Where cutting-edge blockchain technology meets
            sophisticated AI operations in an elegant symphony of digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(99, 102, 241, 0.5)",
                  "0 0 50px rgba(139, 92, 246, 0.5)",
                  "0 0 30px rgba(99, 102, 241, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full blur-lg"
            />
            <Button
              onClick={handleExploreClick}
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-16 py-8 text-2xl font-bold rounded-full border-0 transition-all duration-500 group overflow-hidden shadow-2xl"
            >
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{ backgroundSize: "200% 200%" }}
              />
              <span className="relative z-10 flex items-center">
                Explore Yoventa
                <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="ml-4 w-8 h-8" />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-20 flex justify-center space-x-6"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg"
              />
            ))}
          </motion.div>

          {/* Floating icons */}
          <motion.div
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-32 left-16 text-blue-400"
          >
            <Rocket className="w-10 h-10" />
          </motion.div>

          <motion.div
            animate={{
              y: [15, -15, 15],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-40 right-16 text-purple-400"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
