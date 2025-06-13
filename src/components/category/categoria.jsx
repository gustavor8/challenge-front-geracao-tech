export default function DripStore() {
  return (
    <div className="font-sans bg-gray-100 m-0">
      <main className="container flex px-24 py-10">
        <aside className="sidebar w-64 bg-white p-5 mr-">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar tênis..."
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <h3 className="font-bold mb-4">Filtrar por</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Marcas</h4>
            <label className="block mb-1">
              <input type="checkbox" defaultChecked className="mr-2" /> Adidas
            </label>
            <label className="block mb-1">
              <input type="checkbox" defaultChecked className="mr-2" /> K-Swiss
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Puma
            </label>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Categoria</h4>
            <label className="block mb-1">
              <input type="checkbox" defaultChecked className="mr-2" /> Esporte
              e lazer
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Casual
            </label>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Gênero</h4>
            <label className="block">
              <input type="checkbox" defaultChecked className="mr-2" />
              Masculino
            </label>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Estado</h4>
            <label className="block">
              <input type="checkbox" defaultChecked className="mr-2" /> Novo
            </label>
          </div>
        </aside>
      </main>
    </div>
  );
}
