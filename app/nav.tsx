export default function Nav() {
  return (
    <nav className="flex py-5 gap-3 items-center justify-between shadow-sm shadow-white w-full">
      <h1 className=" text-2xl ml-5 font-extrabold text-amber-500	">Elias</h1>
      <li className="flex gap-5">
        <a className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500">
          Inicio
        </a>
        <a className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500">
          Sobre Mi
        </a>
        <a className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500">
          Proyectos
        </a>
        <a className="border-b-2 border-transparent hover:border-white transition-all duration-300 ease-in-out hover:ease-in-out hover:text-amber-500">
          Contacto
        </a>
      </li>
      <ul>
        <a className="mr-5 text-amber-500 font-extrabold hover:text-white border-b-2 border-transparent hover:border-amber-500 transition-all duration-300 ease-in-out hover:ease-in-out ">
          Contratame
        </a>
      </ul>
    </nav>
  );
}
