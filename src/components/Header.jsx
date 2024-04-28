
export default function Header() {
  
  return (
<header class="fixed top-1 z-10 flex items-center justify-center sm:w-full mx-auto mt-2">
  <nav style={{
    animation: "nav-shadown 1s linear both",
    animationTimeline: "scroll()",
    animationRange: "0 100px",
  }} class="flex px-3 font-medium rounded-full text-white  justify-center items-center gap-x-4 shadow-lg ring-1 backdrop-blur  bg-white/50 ring-white/10">
    <a href="#inicio">Inicio</a>
    <a href="#sobre-mi">Sobre mí</a>
    <a href="#experiencia">Experiencia</a>
    <a href="#proyectos">Proyectos</a>
    <a href="#tech-stack">Tech Stack</a>
    {/* <button>EN</button> */}
  </nav>
</header>
  )
}
