const GrupoOfertas = () => {
  return (
    <div className="flex items-center justify-around">
      <div className="flex flex-col font-bold text-4xl gap-2">
        <div className="w-1/4 h-0.5 bg-zinc-400"></div>
        Grupo com todas nossas{' '}
        <span className="text-vermelhoTaborda">ofertas!</span>
        <a
          className="bg-vermelhoTaborda text-white text-lg text-center p-2 rounded-md w-1/2 mt-3"
          href=""
          target="_blank"
        >
          Entrar no grupo
        </a>
      </div>
      <div>
        <img className="rounded-lg" src="https://source.unsplash.com/random/380x460" />
      </div>
    </div>
  )
}

export default GrupoOfertas
