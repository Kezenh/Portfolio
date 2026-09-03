import Header from './components/Header'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-pixel bg-slate-950 text-slate-100">
      <Header />
      <div className="flex-1">
        <ProjectCard />
      </div>
      <Footer />
    </div>
  )
}