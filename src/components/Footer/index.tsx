import { AiFillFacebook } from 'react-icons/ai'
import { RiInstagramLine } from 'react-icons/ri'

const FooterCards = () => {
  return (
    <footer className="bg-verdeTaborda py-6">
      <div className="container">
        <div className="w-full flex justify-center">
          <img
            className="w-44 rounded-lg shadow-lg mb-4"
            src="../images/logoTaborda.jpeg"
            alt=""
          />
        </div>
        <ul className="flex justify-center items-center gap-4">
          <li className="p-2 px-3 text-white rounded-md font-poppins cursor-pointer hover:text-vermelhoTaborda duration-75">
            Início
          </li>
          <li className="p-2 px-3 text-white rounded-md font-poppins cursor-pointer hover:text-vermelhoTaborda duration-75">
            Ofertas da semana
          </li>
          <li className="p-2 px-3 text-white rounded-md font-poppins cursor-pointer hover:text-vermelhoTaborda duration-75">
            Nossa Historia
          </li>
          <li className="p-2 px-3 text-white rounded-md font-poppins cursor-pointer hover:text-vermelhoTaborda duration-75">
            Contato
          </li>
          <div className="w-0.5 h-full bg-white rounded">‎</div>
          <li>
            <RiInstagramLine className="text-3xl text-white cursor-pointer hover:text-vermelhoTaborda duration-100" />
          </li>
          <li>
            <AiFillFacebook className="text-3xl text-white cursor-pointer hover:text-vermelhoTaborda duration-100" />
          </li>
        </ul>
        <div className=" flex justify-center mt-4 mb-4">
          <div className="w-full h-0.5 bg-white"></div>
        </div>
        <div className="flex justify-center">
          <div className="text-white w-full flex flex-col items-center">
            Formas de Pagamento
            <div className="bg-white rounded-xl shadow-md mt-4 p-6 grid grid-cols-3 gap-4 w-1/2 justify-items-center items-center">
              <img
                className="w-20"
                src="../images/mastercard.png"
                alt="mastercard"
              />
              <img
                className="w-20"
                src="../images/hipercard2.png"
                alt="hipercard"
              />
              <img className="w-20" src="../images/sodexo.png" alt="sodexo" />
              <img className="w-24" src="../images/ticket.png" alt="ticket" />
              <img className="w-20" src="../images/visa.png" alt="visa" />
              <img className="w-20" src="../images/elo.png" alt="elo" />
            </div>
          </div>
          <div className="text-white flex flex-col items-center w-full">
            Formas de Pagamento
            <div className="bg-white rounded-xl shadow-md mt-4 p-6 grid grid-cols-3 gap-4 w-1/2 justify-items-center items-center">
              <img
                className="w-20"
                src="../images/mastercard.png"
                alt="mastercard"
              />
              <img
                className="w-20"
                src="../images/hipercard2.png"
                alt="hipercard"
              />
              <img className="w-20" src="../images/sodexo.png" alt="sodexo" />
              <img className="w-24" src="../images/ticket.png" alt="ticket" />
              <img className="w-20" src="../images/visa.png" alt="visa" />
              <img className="w-20" src="../images/elo.png" alt="elo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterCards
