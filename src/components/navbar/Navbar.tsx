import { MagnifyingGlass, User, ShoppingCart, FirstAid } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full bg-indigo-900 text-white flex justify-between items-center py-4 px-8 shadow-md">
      
      <Link to="/home" className="flex items-center gap-2 text-2xl font-bold cursor-pointer">
        <FirstAid size={32} weight="fill" className="text-red-500" />
        <span>PHARMACIA</span>
      </Link>

      <div className="flex flex-1 justify-center px-8">
        <div className="flex w-full max-w-2xl bg-white rounded-lg overflow-hidden">
          <input 
            type="text" 
            placeholder="Procurar" 
            className="w-full px-4 py-1 text-gray-800 focus:outline-none" 
          />
          <button className="bg-blue-500 px-6 flex items-center justify-center hover:bg-blue-600 transition-colors">
            <MagnifyingGlass size={20} weight="bold" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6 font-medium">
        <Link to="/categorias" className="hover:text-blue-200 transition-colors">Categorias</Link>
        <Link to="/cadastrarcategoria" className="hover:text-blue-200 transition-colors">Cadastrar Categoria</Link>
        <User size={28} className="cursor-pointer hover:text-blue-200 transition-colors" />
        <ShoppingCart size={28} className="cursor-pointer hover:text-blue-200 transition-colors" />
      </div>
    </nav>
  )
}

export default Navbar