const CampanhaPix = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="font-bold text-4xl">
          <div className="flex items-center w-full justify-between mb-12">
            <p className="w-[750px]">
              Nossa Campanha do <span className="text-verdeTaborda">Pix!</span>
            </p>
            <div className="w-full h-0.5 bg-zinc-300 ml-6"></div>
          </div>
        </div>
        <div className="flex justify-between">
          <img
            className="rounded-lg h-full"
            src="../images/ImageSection 3.png"
            alt=""
          />
          <img
            className="rounded-lg h-[460px]"
            src="../images/pix.jpeg"
            alt=""
          />
          <img
            className="rounded-lg h-full"
            src="../images/ImageSection 3.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-0.5 bg-zinc-300 ml-6"></div>
        <a
          className="bg-verdeTaborda text-white text-lg text-center p-2 rounded-md w-1/5 mt-12"
          href=""
          target="_blank"
        >
          Como participar?
        </a>
        <div className="h-0.5 bg-zinc-300 ml-6"></div>
      </div>
    </div>
  )
}

export default CampanhaPix
