import RaceTrack from "./components/RaceTrack";
import { useRanking } from "./hooks/useRanking";

export default function App() {
  const ranking = useRanking(10);

  return (
    <div className="pixel-sky relative min-h-screen overflow-hidden text-white">
      <div className="scrolling-stars" aria-hidden />
      <div className="pixel-nebula" aria-hidden />
      <div className="pixel-grid-overlay" aria-hidden />

      <main className="relative max-w-6xl mx-auto px-6 py-12 space-y-10">
        <header className="glass-panel pixel-border p-6 flex flex-col gap-3">
          <p className="text-pixel-sm uppercase tracking-[0.4em] text-cyan-200">Liga retro</p>
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-black drop-shadow-[0_4px_0_rgba(0,0,0,0.35)]">
              Carrera Astral
            </h1>
            <span className="px-3 py-2 bg-pink-500/20 text-pink-100 rounded pixel-border text-pixel-sm">
              Motor: Ranking en tiempo real desde Redis
            </span>
          </div>
          <p className="text-sm md:text-base text-gray-200/80 max-w-3xl leading-relaxed">
            Observa cómo los pilotos avanzan según su puntaje. La pista está diseñada
            como un juego de 16 bits: píxeles marcando el carril, líneas de meta
            vibrantes y autos diminutos que dejan un rastro neón a cada actualización.
          </p>
        </header>

        <RaceTrack ranking={ranking} />
      </main>
    </div>
  );
}
