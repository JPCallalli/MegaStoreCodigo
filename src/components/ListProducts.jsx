export default function ListProducts({ products }) {
  const totalCompra = products.reduce(
    (suma, product) => suma + product.precio * product.cantidad,
    0
  );

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {products.length > 0 &&
        products.map((product) => (
          <li key={product.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={product.imagen}
                alt={product.nombre}
              />
              <div className="min-w-0 flex-auto">
                <h3 className="font-semibold leading-6 text-gray-900">
                  {product.nombre}
                </h3>
                <div className="flex mt-1 text-sm leading-6 text-gray-600">
                  <p>Color seleccionado: </p>
                  <div
                    className="mt-1 ms-1 rounded-full w-4 h-4"
                    style={{ backgroundColor: product.colorSelected }}
                  ></div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 font-semibold text-gray-900">
                Total: S/ {product.precio * product.cantidad}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                P.U: S/ {product.precio}, Cant.: {product.cantidad} Unid.
              </p>
            </div>
          </li>
        ))}
      {/* Aquí aparte irá el total */}
      <li className="flex justify-between gap-x-6 py-5">
        <p className="font-bold text-lg">Total:</p>
        <p className="font-bold text-lg">S/ {totalCompra.toFixed(2)}</p>
      </li>
    </ul>
  );
}
