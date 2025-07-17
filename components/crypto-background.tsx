"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
  color: string
  size: number
}

export default function CryptoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()

  const colors = [
    "#60a5fa", // blue-400
    "#a78bfa", // purple-400
    "#f472b6", // pink-400
    "#34d399", // emerald-400
    "#fbbf24", // amber-400
    "#f87171", // red-400
    "#3b82f6", // blue-500
    "#8b5cf6", // purple-500
    "#ec4899", // pink-500
    "#10b981", // emerald-500
    "#f59e0b", // amber-500
    "#ef4444", // red-500
    "#1d4ed8", // blue-700
    "#7c3aed", // purple-700
    "#be185d", // pink-700
    "#047857", // emerald-700
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initNodes = () => {
      const nodeCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000))
      nodesRef.current = []

      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          connections: [],
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 4,
        })
      }

      // Create connections
      nodesRef.current.forEach((node, i) => {
        const maxConnections = 4
        let connectionCount = 0

        nodesRef.current.forEach((otherNode, j) => {
          if (i !== j && connectionCount < maxConnections) {
            const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
            if (distance < 180) {
              node.connections.push(j)
              connectionCount++
            }
          }
        })
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Apply friction
        node.vx *= 0.995
        node.vy *= 0.995

        // Draw connections with rainbow colors
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodesRef.current[connectionIndex]
          if (connectedNode) {
            const distance = Math.sqrt(Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2))

            if (distance < 250) {
              const opacity = (1 - distance / 250) * 0.6
              const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y)

              // Create rainbow gradient
              const time = Date.now() * 0.001
              const hue1 = (time * 20 + i * 30) % 360
              const hue2 = (time * 20 + connectionIndex * 30) % 360

              gradient.addColorStop(0, `hsla(${hue1}, 60%, 65%, ${opacity})`)
              gradient.addColorStop(0.5, `hsla(${(hue1 + hue2) / 2}, 70%, 70%, ${opacity * 1.1})`)
              gradient.addColorStop(1, `hsla(${hue2}, 60%, 65%, ${opacity})`)

              ctx.strokeStyle = gradient
              ctx.lineWidth = opacity * 2
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(connectedNode.x, connectedNode.y)
              ctx.stroke()
            }
          }
        })

        // Draw node with pulsing effect
        const time = Date.now() * 0.002
        const pulseSize = node.size + Math.sin(time * 2 + i) * 1.5
        const nodeSize = Math.max(pulseSize, 1)

        // Create animated gradient for nodes
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeSize)
        const hue = (time * 30 + i * 25) % 360
        nodeGradient.addColorStop(0, `hsla(${hue}, 80%, 70%, 0.9)`)
        nodeGradient.addColorStop(0.7, `hsla(${hue + 60}, 70%, 60%, 0.6)`)
        nodeGradient.addColorStop(1, `hsla(${hue + 120}, 60%, 50%, 0.3)`)

        ctx.fillStyle = nodeGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2)
        ctx.fill()

        // Add extra glow effect
        ctx.shadowColor = `hsla(${hue}, 80%, 70%, 0.4)`
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(node.x, node.y, nodeSize * 0.6, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Add sparkle effect occasionally
        if (Math.random() < 0.003) {
          const sparkleGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 15)
          sparkleGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)")
          sparkleGradient.addColorStop(1, "rgba(255, 255, 255, 0)")

          ctx.fillStyle = sparkleGradient
          ctx.beginPath()
          ctx.arc(node.x, node.y, 15, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      resizeCanvas()
      initNodes()
    }

    resizeCanvas()
    initNodes()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
