"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Twitter,
  Mail,
  Phone,
  Zap,
  Shield,
  Cpu,
  Globe,
  TrendingUp,
  Lock,
  ChevronDown,
  X,
  ArrowRight,
  Users,
} from "lucide-react"
import CryptoBackground from "@/components/crypto-background"

export default function MainPage() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const [demoAction, setDemoAction] = useState<string>("")

  const handleEarlyAccess = () => {
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setShowEarlyAccess(false)
        setIsSubmitted(false)
        setEmail("")
      }, 2000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <CryptoBackground />

      {/* Elegant Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-xl border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              YOVENTA
            </span>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://x.com/YOVENTA_?t=50FGvR2a3dp6C2umRpM9wg&s=09"
              target="_blank"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 flex items-center space-x-2"
              rel="noreferrer"
            >
              <Twitter className="w-4 h-4" />
              <span>Follow Us</span>
            </motion.a>

            <motion.button
              onClick={() => setShowEarlyAccess(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              Join Beta
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Early Access Modal */}
      <AnimatePresence>
        {showEarlyAccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 p-8 rounded-3xl shadow-2xl max-w-md w-full border border-purple-500/30 backdrop-blur-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Join Yoventa Beta</h3>
                <button
                  onClick={() => setShowEarlyAccess(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {!isSubmitted ? (
                <>
                  <p className="text-gray-300 mb-6">Be among the first to experience the future of technology.</p>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-black/20 border-purple-500/30 text-white placeholder-gray-400 rounded-xl"
                    />
                    <Button
                      onClick={handleEarlyAccess}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl py-3"
                    >
                      Get Beta Access
                    </Button>
                  </div>
                </>
              ) : (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center py-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-white text-2xl">✓</span>
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">Welcome to Yoventa!</h4>
                  <p className="text-gray-300">You're now on the beta access list.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 pt-24">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="min-h-screen flex items-center justify-center px-6 relative"
        >
          {/* Elegant floating elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 backdrop-blur-sm"
              style={{
                left: `${10 + i * 10}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-15, 15, -15],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div variants={itemVariants} className="mb-12 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 w-40 h-40 mx-auto"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-3xl" />
              </motion.div>

              <div className="relative inline-flex items-center justify-center mb-10"></div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
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
                The Future Awaits
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-white mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              <motion.span
                animate={{
                  color: ["#60a5fa", "#a78bfa", "#f472b6", "#60a5fa"],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Yoventa transforms blockchain technology with elegant design, lightning-fast operations, and
                unparalleled security in a sophisticated digital ecosystem.
              </motion.span>
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {[
                {
                  icon: Shield,
                  title: "Secure",
                  desc: "Enterprise-grade protection",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  desc: "Instant transaction processing",
                  color: "from-purple-500 to-pink-600",
                },
                {
                  icon: Globe,
                  title: "Global Network",
                  desc: "Worldwide accessibility",
                  color: "from-indigo-500 to-purple-600",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                  }}
                  className={`bg-gradient-to-br ${feature.color} p-[2px] rounded-3xl shadow-2xl group`}
                >
                  <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-3xl h-full">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      <feature.icon className="w-14 h-14 text-white mb-6 mx-auto" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-lg">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-20">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  color: ["#60a5fa", "#a78bfa", "#f472b6", "#60a5fa"],
                }}
                transition={{
                  y: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  color: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <ChevronDown className="w-10 h-10 mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-32 px-6"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              About Yoventa
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={itemVariants}>
                <h3 className="text-4xl font-bold text-white mb-8">Revolutionary Innovation</h3>
                <p className="text-gray-300 text-xl leading-relaxed mb-8">
                  Yoventa represents the pinnacle of blockchain evolution, seamlessly integrating advanced AI operations
                  with lightning-fast transaction processing. Our sophisticated network operates on a revolutionary
                  consensus mechanism that ensures both elegance and security.
                </p>
                <p className="text-gray-300 text-xl leading-relaxed">
                  Designed for tomorrow, Yoventa enables seamless integration of cognitive operations with decentralized
                  finance, creating unprecedented opportunities for innovation and growth in the digital economy.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
                {[
                  { icon: Cpu, title: "AI-Powered", value: "100%", color: "from-blue-500 to-indigo-600" },
                  { icon: TrendingUp, title: "Uptime", value: "99.9%", color: "from-purple-500 to-pink-600" },
                  { icon: Lock, title: "Security", value: "Military", color: "from-indigo-500 to-purple-600" },
                  { icon: Users, title: "Community", value: "50K+", color: "from-pink-500 to-red-600" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-gradient-to-br ${stat.color} p-[2px] rounded-2xl shadow-xl`}
                  >
                    <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl text-center h-full">
                      <stat.icon className="w-10 h-10 text-white mx-auto mb-4" />
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-300 text-sm font-medium">{stat.title}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Interactive Demo Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-32 px-6"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-center mb-20">
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
                Experience Yoventa Live
              </motion.span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800/20 to-purple-900/20 rounded-3xl p-10 backdrop-blur-xl border border-purple-500/20 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-8">
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
                      Live Network Operations
                    </motion.span>
                  </h3>
                  <p className="text-gray-300 text-xl mb-10">
                    Watch our AI-powered network process operations in real-time. Interact with the demo to see
                    Yoventa's capabilities in action!
                  </p>

                  <div className="space-y-6 mb-10">
                    {[
                      { label: "Network Status", value: "🟢 Active", color: "text-green-400" },
                      { label: "Active Nodes", value: "3,247", color: "text-blue-400" },
                      { label: "Transactions/Sec", value: "18,500+", color: "text-purple-400" },
                      { label: "AI Efficiency", value: "99.97%", color: "text-pink-400" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-center py-3 border-b border-gray-700/50"
                      >
                        <span className="text-gray-300 text-lg">{item.label}</span>
                        <motion.span
                          className={`font-bold text-xl ${item.color}`}
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        >
                          {item.value}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDemoAction("transaction")}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg"
                    >
                      🚀 Process Transaction
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDemoAction("ai")}
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg"
                    >
                      🧠 AI Analysis
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDemoAction("mining")}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg"
                    >
                      ⛏️ Mine Block
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setDemoAction("reset")}
                      className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg"
                    >
                      🔄 Reset Demo
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  className="relative h-96 bg-black/10 rounded-3xl border border-purple-500/20 overflow-hidden backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central Core */}
                    <motion.div
                      animate={{
                        scale: demoAction === "reset" ? [1, 0.7, 1] : [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                        rotate: [0, 360],
                      }}
                      transition={{
                        scale: { duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      }}
                      className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-90 flex items-center justify-center z-10 shadow-2xl"
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        {demoAction === "transaction" && <ArrowRight className="w-10 h-10 text-white" />}
                        {demoAction === "ai" && <Cpu className="w-10 h-10 text-white" />}
                        {demoAction === "mining" && <Zap className="w-10 h-10 text-white" />}
                        {(demoAction === "reset" || !demoAction) && <div className="w-4 h-4 bg-white rounded-full" />}
                      </motion.div>
                    </motion.div>

                    {/* Orbiting Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-5 h-5 rounded-full"
                        style={{
                          background: `linear-gradient(45deg, ${
                            ["#60a5fa", "#a78bfa", "#f472b6", "#34d399", "#fbbf24", "#f87171"][i]
                          }, ${["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#ef4444"][i]})`,
                        }}
                        animate={{
                          x: [
                            Math.cos((i * Math.PI * 2) / 6) * 90,
                            Math.cos((i * Math.PI * 2) / 6 + Math.PI) * 90,
                            Math.cos((i * Math.PI * 2) / 6) * 90,
                          ],
                          y: [
                            Math.sin((i * Math.PI * 2) / 6) * 90,
                            Math.sin((i * Math.PI * 2) / 6 + Math.PI) * 90,
                            Math.sin((i * Math.PI * 2) / 6) * 90,
                          ],
                          scale: demoAction === "ai" ? [1, 2.5, 1] : [1, 1.8, 1],
                          opacity: demoAction === "transaction" ? [1, 0.4, 1] : [0.9, 1, 0.9],
                        }}
                        transition={{
                          duration: 5 + i * 0.3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Action-specific effects */}
                    {demoAction === "transaction" && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 2.5, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute w-40 h-40 border-4 border-blue-400 rounded-full"
                      />
                    )}

                    {demoAction === "ai" && (
                      <>
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-3 h-3 bg-purple-400 rounded-full"
                            animate={{
                              x: [0, Math.cos(i * 36) * 160],
                              y: [0, Math.sin(i * 36) * 160],
                              opacity: [1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              delay: i * 0.1,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          />
                        ))}
                      </>
                    )}

                    {demoAction === "mining" && (
                      <motion.div
                        animate={{
                          boxShadow: ["0 0 30px #fbbf24", "0 0 80px #fbbf24", "0 0 30px #fbbf24"],
                        }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute w-56 h-56 border-2 border-yellow-400 rounded-full"
                      />
                    )}
                  </div>

                  {/* Status Messages */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      key={demoAction}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10"
                    >
                      <span className="text-white font-semibold text-lg">
                        {demoAction === "transaction" && "🚀 Processing Transaction..."}
                        {demoAction === "ai" && "🧠 AI Analysis in Progress..."}
                        {demoAction === "mining" && "⛏️ Mining New Block..."}
                        {(demoAction === "reset" || !demoAction) && "🌟 Yoventa Network Ready"}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Support Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-32 px-6"
        >
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Get Support
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 p-10 rounded-3xl backdrop-blur-sm border border-blue-500/20 shadow-2xl text-center"
              >
                <Mail className="w-20 h-20 text-blue-400 mx-auto mb-8" />
                <h3 className="text-3xl font-bold text-white mb-6">Email Support</h3>
                <p className="text-gray-300 mb-8 text-lg">Connect with our dedicated support team via email</p>
                <motion.a
                  href="mailto:support@yoventa.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg"
                >
                  support@yoventa.com
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 p-10 rounded-3xl backdrop-blur-sm border border-purple-500/20 shadow-2xl text-center"
              >
                <Phone className="w-20 h-20 text-purple-400 mx-auto mb-8" />
                <h3 className="text-3xl font-bold text-white mb-6">Phone Support</h3>
                <p className="text-gray-300 mb-8 text-lg">Speak directly with our expert support team</p>
                <motion.a
                  href="tel:+1-800-YOVENTA"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 text-lg"
                >
                  +1-800-YOVENTA
                </motion.a>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-16 text-center">
              <p className="text-gray-300 text-xl">
                Our support team is available 24/7 to help you succeed with Yoventa.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-20 px-6 border-t border-purple-500/20"
        >
          <div className="container mx-auto max-w-6xl text-center">
            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                YOVENTA
              </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg">
              Your Venture Into Advanced Technology - Transforming the future of blockchain innovation.
            </motion.p>

            <motion.div variants={itemVariants} className="text-gray-500 text-lg">
              © 2025 Yoventa Network. All rights reserved.
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
