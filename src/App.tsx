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
        <section className="container mx-auto px-4 pt-52">
          <GrupoOfertas />
        </section>
        <section className="bg-neutral-100 p-48 mt-12 mb-12">
          <CampanhaPix />
        </section>
        <div className="container mx-auto px-4 mb-32">
          <img
            className="rounded-lg"
            src="../images/Banner Horizontal.png"
            alt=""
          />
        </div>
        <section className="container mx-auto px-4 mb-32">
          <SocialMedia />
        </section>
        <FooterCards />
      </div>
    </div>
  )
}

export default App
