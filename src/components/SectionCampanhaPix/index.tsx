const CampanhaPix = () => {
  return (
    <div className="container mx-auto px-4 mb-32">
      <div className="flex items-center justify-between">
        <div>
          <img
            className="rounded-lg h-full"
            src="../images/ImageSection 3.png"
            alt=""
          />
        </div>
        <div className="flex flex-col font-bold text-4xl gap-2 items-end">
          <div className="w-1/4 h-0.5 bg-zinc-400"></div>
          Nossa Campanha do <span className="text-verdeTaborda">Pix!</span>
          <a
            className="bg-verdeTaborda text-white text-lg text-center p-2 rounded-md w-1/2 mt-3"
            href=""
            target="_blank"
          >
            Participar
          </a>
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

export default CampanhaPix
