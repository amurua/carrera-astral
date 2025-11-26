export default function Car({ nombre, puntaje, maxPuntaje }) {
  const porcentaje = maxPuntaje > 0 ? puntaje / maxPuntaje : 0;
  const distanciaPx = porcentaje * 800;

  return (
    <div className="flex items-center gap-4 h-16">
      <div
        className="transition-all duration-700 ease-out text-4xl"
        style={{ transform: `translateX(${distanciaPx}px)` }}
      >
        🚗
      </div>

      <div className="ml-4">
        <p className="text-lg font-bold">{nombre}</p>
        <p className="text-sm text-gray-400">{puntaje} pts</p>
      </div>
    </div>
  );
}
