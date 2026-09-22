import Header from './components/Header'
import Footer from './components/Footer'
import ProjectsLibrary from './components/ProjectsLibrary'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-pixel bg-slate-300 dark:bg-slate-950 text-slate-950 dark:text-slate-100 text-lg">
      <Header />
      <ProjectsLibrary />
      <Footer />
    </div>
  )
}