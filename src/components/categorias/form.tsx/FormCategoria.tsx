import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { atualizar, buscar, cadastrar } from '../../../services/Service'
import type Categoria from '../../../models/Categoria'

function FormCategoria() {
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    })
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar('/categorias', categoria, setCategoria)
        alert('Categoria atualizada com sucesso!')
      } catch (error) {
        console.error('Erro ao atualizar a categoria', error)
        alert('Erro ao atualizar a categoria.')
      }
    } else {
      try {
        await cadastrar('/categorias', categoria, setCategoria)
        alert('Categoria cadastrada com sucesso!')
      } catch (error) {
        console.error('Erro ao cadastrar a categoria', error)
        alert('Erro ao cadastrar a categoria.')
      }
    }

    setIsLoading(false)
    navigate('/categorias')
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto grow">
      <h1 className="text-4xl text-center my-8 font-bold text-gray-900">
        {id === undefined ? 'Cadastrar categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-medium text-gray-800">Categoria</label>
          <input
            type="text"
            placeholder="Nome da categoria"
            name="nome"
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-900"
            required
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-white bg-indigo-900 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center mt-4 transition-colors font-bold shadow-md"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="white" size={24} />
          ) : (
            id === undefined ? 'Cadastrar' : 'Atualizar'
          )}
        </button>
      </form>
    </div>
  )
}

export default FormCategoria