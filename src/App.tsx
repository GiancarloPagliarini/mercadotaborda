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
      <div className="bg-slate-100">
        <GrupoOfertas />
        <CampanhaPix />
        <SocialMedia />
      <FooterCards />
      </div>
    </div>
  )
}

export default App
