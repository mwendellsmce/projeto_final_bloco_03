import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { buscar, deletar } from '../../../services/Service'
import type Categoria from '../../../models/Categoria'

function DeletarCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
  })

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error) {
      console.error('Erro ao buscar a categoria', error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id)
    }
  }, [id])

  function retornar() {
    navigate('/categorias')
  }

  async function deletarCategoria() {
    setIsLoading(true)

    try {
      await deletar(`/categorias/${id}`)
      alert('Categoria apagada com sucesso!')
    } catch (error) {
      console.error('Erro ao apagar a categoria', error)
      alert('Erro ao apagar a categoria.')
    }

    setIsLoading(false)
    retornar()
  }

  return (
    <div className="container w-1/3 mx-auto flex flex-col items-center justify-center grow">
      <h1 className="text-4xl text-center my-4 font-bold text-gray-900">Deletar categoria</h1>
      <p className="text-center font-medium mb-4 text-gray-800">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border-2 border-indigo-900 rounded-lg overflow-hidden flex flex-col bg-white shadow-md w-full">
        <header className="bg-indigo-900 text-white py-2 px-4 font-bold text-lg text-center">
          Categoria
        </header>
        
        <div className="p-6 text-xl font-medium text-gray-800 text-center bg-gray-50">
          {categoria.nome}
        </div>
        
        <div className="flex">
          <button 
            className="w-full text-slate-100 bg-red-500 hover:bg-red-600 flex items-center justify-center py-2 transition-colors font-bold border-r border-red-600" 
            onClick={retornar}
          >
            Não
          </button>
          <button 
            className="w-full text-slate-100 bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center py-2 transition-colors font-bold" 
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color="white" size={24} />
            ) : (
              'Sim'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria
