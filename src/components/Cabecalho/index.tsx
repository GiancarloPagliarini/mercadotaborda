import { RiInstagramLine } from 'react-icons/ri'
import { AiFillFacebook } from 'react-icons/ai'

const Cabecalho = () => {
  return (
    <header>
      <div className="flex justify-around p-6 bg-verdeTaborda">
        <img
          className="w-48 rounded-lg shadow-lg"
          src="/images/logoTaborda.jpeg"
          alt="Logo do Mercado"
        />
        <nav className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <li className="py-1 px-2 rounded-md hover:bg-vermelhoTaborda text-white font-poppins font-medium cursor-pointer duration-75">
              Início
            </li>
            <li className="py-1 px-2 rounded-md hover:bg-vermelhoTaborda text-white font-poppins font-medium cursor-pointer duration-75">
              Ofertas da semana
            </li>
            <li className="py-1 px-2 rounded-md hover:bg-vermelhoTaborda text-white font-poppins font-medium cursor-pointer duration-75">
              Nossa Historia
            </li>
            <li className="py-1 px-2 rounded-md hover:bg-vermelhoTaborda text-white font-poppins font-medium cursor-pointer duration-75">
              Contato
            </li>
          </ul>
          <div className="w-0.5 h-1/2 bg-white rounded"></div>
          <ul className="flex gap-4">
            <li>
              <RiInstagramLine className="text-3xl text-white cursor-pointer hover:text-vermelhoTaborda duration-100" />
            </li>
            <li>
              <AiFillFacebook className="text-3xl text-white cursor-pointer hover:text-vermelhoTaborda duration-100" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
