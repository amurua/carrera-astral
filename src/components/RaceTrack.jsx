import Car from "./Car";

export default function RaceTrack({ ranking }) {
  const maxPuntaje = ranking.length > 0 ? ranking[0].puntaje : 1;
  const palette = [
    "#ff6b6b",
    "#8ef3c5",
    "#f9c74f",
    "#9fa5ff",
    "#ff8fab",
    "#6dd3ff",
  ];

  return (
    <section className="neon-card pixel-border p-6 md:p-8 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-pixel-sm text-emerald-200 uppercase tracking-[0.25em]">Pista retro</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.35)]">
            🏁 Carrera en tiempo real
          </h2>
          <p className="text-xs text-lime-100/80 mt-2 max-w-xl">
            Recta principal con bordes rojo/blanco, césped pixelado y autos diminutos avanzando según el puntaje.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 bg-black/60 border border-cyan-500/50 px-4 py-3 rounded-lg pixel-border shadow-[0_0_20px_rgba(34,211,238,0.35)]">
            <span className="text-pixel-sm text-gray-200/90">Puntaje máximo</span>
            <strong className="text-2xl text-cyan-200 font-black">{maxPuntaje}</strong>
          </div>
          <div className="retro-hud">
            <div className="hud-chip">
              <span className="label">Lap</span>
              <span className="value">1/6</span>
            </div>
            <div className="hud-chip">
              <span className="label">Tiempo</span>
              <span className="value">00:12:15</span>
            </div>
            <div className="hud-chip">
              <span className="label">Recta</span>
              <span className="value">Detrás de boxes</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 mt-8">
        {ranking.length === 0 && (
          <div className="text-center text-gray-200/70 text-sm px-4 py-6 bg-black/40 rounded-lg pixel-border">
            Aún no hay datos en el ranking. Cuando lleguen puntajes, los autos comenzarán a moverse.
          </div>
        )}

        {ranking.map((v, i) => (
          <Car
            key={v.id}
            id={v.id}
            nombre={v.nombre ?? "Sin nombre"}
            puntaje={v.puntaje}
            maxPuntaje={maxPuntaje}
            color={palette[i % palette.length]}
            position={i + 1}
          />
        ))}
      </div>
    </section>
  );
}
