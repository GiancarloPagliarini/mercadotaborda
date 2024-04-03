const GrupoOfertas = () => {
  return (
    <div className="container mx-auto px-4 pt-52 mb-32">
      <div className="flex items-center justify-between">
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
          <img
            className="rounded-lg"
            src="../images/ImageSection 1.png"
            alt=""
          />
        </div>
      </div>
      <img
        className="rounded-lg mt-28 mb-28"
        src="../images/Banner Horizontal.png"
        alt=""
      />
    </div>
  )
}

export default GrupoOfertas
