const GrupoOfertas = () => {
  return (
    <div className="">
      <div className="sm:flex items-center justify-between">
        <div className="flex flex-col font-bold text-4xl gap-2">
          <div className="w-1/4 h-0.5 bg-zinc-400"></div>
          Grupo com todas nossas{' '}
          <span className="text-vermelhoTaborda">ofertas!</span>
          <a
            className="bg-vermelhoTaborda text-white text-lg text-center p-2 rounded-md w-1/2 mt-3 mb-7"
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
        className="rounded-lg hidden sm:block sm:mt-28 mt-12"
        src="../images/Banner Horizontal.png"
        alt=""
      />
      <img
        className="rounded-lg sm:hidden sm:mt-28 mt-12 mb-28"
        src="../images/CellModelBanner.png"
        alt=""
      />
    </div>
  )
}

export default GrupoOfertas
