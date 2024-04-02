import Cabecalho from './components/Cabecalho'
import CarouselImages from './components/CarouselImages'
import GrupoOfertas from './components/SectionGrupoOfertas'

function App() {
  return (
    <div>
      <Cabecalho />
      <CarouselImages />
      <div className="pt-52 flex justify-center mb-32">
        <GrupoOfertas />
      </div>
    </div>
  )
}

export default App
