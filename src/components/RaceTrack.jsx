import Car from "./Car";

export default function RaceTrack({ ranking }) {
  const maxPuntaje = ranking.length > 0 ? ranking[0].puntaje : 1;

  return (
    <div className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        🏁 Carrera Astral
      </h2>

      <div className="relative space-y-10">
        {ranking.map((v, i) => (
          <div
            key={v.id}
            className="flex items-center gap-4"
          >
            <div className="text-xl w-10 text-right opacity-70">{i + 1}.</div>

            <Car
              nombre={v.nombre ?? "Sin nombre"}
              puntaje={v.puntaje}
              maxPuntaje={maxPuntaje}
            />

            <div className="text-sm text-gray-300 ml-4">{v.puntaje} pts</div>
          </div>
        ))}
      </div>
    </div>
  );
}
