"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Dataset", path: "/dataset" },
  { name: "Methodology", path: "/methodology" },
  { name: "Results", path: "/results" },
  { name: "Demo", path: "/demo" },
  { name: "Backend", path: "/backend" },
  { name: "About", path: "/about" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200",
        scrolled ? "bg-background/95 shadow-sm" : "bg-background/80",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
          <Heart className="h-6 w-6 text-pink-500 transition-transform group-hover:scale-110" fill="currentColor" />
          <span className="hidden sm:inline bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Speed Date Predictor
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === item.path ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
              {pathname === item.path && (
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", bounce: 0.25 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <motion.div
          className="container md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-2",
                  pathname === item.path ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {pathname === item.path && <Heart className="h-3 w-3 text-pink-500" fill="currentColor" />}
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
