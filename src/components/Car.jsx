export default function Car({ nombre, puntaje, maxPuntaje, color, position }) {
  const porcentaje = maxPuntaje > 0 ? puntaje / maxPuntaje : 0;
  const clamped = Math.min(Math.max(porcentaje, 0), 1);
  const leftPercent = 8 + clamped * 84; // deja un margen para ver el movimiento

  return (
    <div className="pixel-lane relative overflow-hidden rounded-lg px-4 py-5">
      <div className="lane-grid" aria-hidden />
      <div className="lane-dashes" aria-hidden />
      <div className="lane-glow" aria-hidden />

      <div className="flex items-center justify-between text-pixel-sm text-gray-100/80 mb-4">
        <div className="flex items-center gap-2 bg-black/60 px-3 py-2 rounded pixel-border">
          <span className="text-gray-400">#{position}</span>
          <span className="text-white">{nombre}</span>
        </div>
        <div className="bg-cyan-500/20 text-cyan-100 px-3 py-2 rounded pixel-border">
          {puntaje} pts
        </div>
      </div>

      <div
        className="car-wrapper"
        style={{ left: `${leftPercent}%` }}
      >
        <div className="pixel-shadow" aria-hidden />
        <div className="pixel-car" style={{ "--car-color": color }} aria-label={`Auto de ${nombre}`} />
        <div className="exhaust" aria-hidden />
      </div>
    </div>
  );
}
