export default function Car({ id, nombre, puntaje, maxPuntaje, color, position }) {
  const porcentaje = maxPuntaje > 0 ? puntaje / maxPuntaje : 0;
  const clamped = Math.min(Math.max(porcentaje, 0), 1);
  const leftPercent = 8 + clamped * 84; // deja un margen para ver el movimiento

  return (
    <div className="pixel-lane relative overflow-hidden rounded-xl px-4 py-5">
      <div className="lane-overlay" aria-hidden />
      <div className="lane-objects" aria-hidden />

      <div className="flex items-center justify-between text-pixel-sm text-gray-100 mb-3 relative z-20">
        <div className="flex items-center gap-3 bg-black/60 px-3 py-2 rounded pixel-border shadow-[0_4px_0_rgba(0,0,0,0.45)]">
          <span className="px-2 py-1 bg-amber-500/90 text-black rounded-sm font-black">#{position}</span>
          <div className="flex flex-col leading-tight">
            <span className="text-white text-xs md:text-sm">{nombre ?? "Sin nombre"}</span>
            <span className="text-lime-100/80 text-[10px] uppercase tracking-wide">ID: {id}</span>
          </div>
        </div>
        <div className="bg-cyan-400/20 text-cyan-50 px-3 py-2 rounded pixel-border font-semibold shadow-[0_4px_0_rgba(0,0,0,0.35)]">
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

      <div className="road">
        <div className="curb curb-left" aria-hidden />
        <div className="curb curb-right" aria-hidden />
        <div className="center-line" aria-hidden />
        <div className="asphalt-texture" aria-hidden />
      </div>
    </div>
  );
}
