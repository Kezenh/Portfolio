import Header from './components/Header'
import Footer from './components/Footer'
import ProjectsLibrary from './components/ProjectsLibrary'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-pixel bg-slate-950 text-slate-100 text-lg">
      <Header />
      <ProjectsLibrary />
      <Footer />
    </div>
  )
}