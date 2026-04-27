import homeLogo from '../../assets/home.png'

function Home() {
  return (
    <div className="bg-cyan-50 flex justify-center grow">
      
      <div className="container grid grid-cols-1 md:grid-cols-2 text-gray-800 p-8">
        
        <div className="flex flex-col gap-4 justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900">Seja bem vindo!</h1>
          <p className="text-xl font-medium">Aqui você encontra Medicamentos e Cosméticos!</p>
          
          <div className="mt-4">
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-800 transition-colors shadow-md">
              Cadastrar Produto
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={homeLogo}
            alt="Ilustração de Farmácia"
            className="w-2/3 max-w-md"
          />
        </div>
        
      </div>
    </div>
  )
}

export default Home