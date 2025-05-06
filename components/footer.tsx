import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Speed Date Predictor</h3>
            <p className="mt-2 text-sm text-muted-foreground">Data-Driven Insights on Second Date Decisions</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/dataset" className="text-muted-foreground hover:text-primary">
                  Dataset
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-muted-foreground hover:text-primary">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-muted-foreground hover:text-primary">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-muted-foreground hover:text-primary">
                  Interactive Demo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-2 flex space-x-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Speed Date Predictor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
