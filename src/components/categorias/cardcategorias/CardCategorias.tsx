import { Link } from 'react-router-dom'
import { Pencil, Trash } from '@phosphor-icons/react'
import type Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border-2 border-indigo-900 rounded-lg overflow-hidden flex flex-col bg-white shadow-md">
      <header className="bg-indigo-900 text-white py-2 px-4 font-bold text-lg">
        Categoria
      </header>
      
      <div className="p-6 text-xl grow font-medium text-gray-800">
        {categoria.nome}
      </div>
      
      <div className="flex bg-indigo-900 text-white">
        <Link 
          to={`/editarCategoria/${categoria.id}`} 
          className="w-full flex items-center justify-center py-2 hover:bg-indigo-800 border-r border-indigo-700 transition-colors"
        >
          <Pencil size={24} />
        </Link>
        
        <Link 
          to={`/deletarCategoria/${categoria.id}`} 
          className="w-full flex items-center justify-center py-2 hover:bg-indigo-800 transition-colors"
        >
          <Trash size={24} />
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias