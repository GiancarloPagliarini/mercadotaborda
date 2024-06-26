const SocialMedia = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <img
            className="rounded-lg"
            src="../images/ImageSection 2.png"
            alt=""
          />
        </div>
        <div className="flex flex-col font-bold text-4xl gap-2 items-end">
          <div className="w-1/4 h-0.5 bg-zinc-400"></div>
          Siga nosso perfil no{' '}
          <span className="text-vermelhoTaborda">instagram!</span>
          <a
            className="bg-vermelhoTaborda text-white text-lg text-center p-2 rounded-md w-1/2 mt-3"
            href=""
            target="_blank"
          >
            Acessar perfil
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
