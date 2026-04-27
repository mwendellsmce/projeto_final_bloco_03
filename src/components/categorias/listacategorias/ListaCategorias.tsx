import { useState, useEffect } from 'react'
import { SyncLoader } from 'react-spinners'
import CardCategorias from '../cardcategorias/CardCategorias'
import type Categoria from '../../../models/Categoria'
import { buscar } from '../../../services/Service'

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function buscarCategorias() {
    setIsLoading(true)
    try {
      await buscar('/categorias', setCategorias)
    } catch (error) {
      console.error("Erro ao buscar as categorias", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <div className="flex justify-center w-full my-8 grow">
      <div className="container flex flex-col items-center">
        
        {/* Animação de Loading */}
        {isLoading && (
          <SyncLoader color="#312e81" margin={4} />
        )}
        
        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-8">
          {categorias.map((categoria) => (
            <CardCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>

        {/* Mensagem caso não tenha nada no banco */}
        {!isLoading && categorias.length === 0 && (
          <p className="text-xl mt-4 font-medium text-gray-800">Nenhuma categoria cadastrada.</p>
        )}
        
      </div>
    </div>
  )
}

export default ListaCategorias