import Cabecalho from './components/Cabecalho'
import CarouselImages from './components/CarouselImages'
import GrupoOfertas from './components/SectionGrupoOfertas'
import CampanhaPix from './components/SectionCampanhaPix'
import SocialMedia from './components/SectionSocialMedia'
import FooterCards from './components/Footer'

function App() {
  return (
    <div>
      <Cabecalho />
      <CarouselImages />
      <div className="flex flex-col gap-32 pt-52 mb-32">
        <GrupoOfertas />
        <SocialMedia />
        <CampanhaPix />
      </div>
      <FooterCards />
    </div>
  )
}

export default App
