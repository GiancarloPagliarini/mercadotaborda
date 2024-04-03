const SocialMedia = () => {
  return (
    <div className="flex items-center justify-around">
      <div>
        <img className="rounded-lg" src="https://source.unsplash.com/random/380x460" />
      </div>
      <div className="flex flex-col font-bold text-4xl gap-2 items-end">
        <div className="w-1/4 h-0.5 bg-zinc-400"></div>
        Siga nosso perfil no {' '}
        <span className="text-verdeTaborda">instagram!</span>
        <a
          className="bg-verdeTaborda text-white text-lg text-center p-2 rounded-md w-1/2 mt-3"
          href=""
          target="_blank"
        >
          Acessar perfil
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
