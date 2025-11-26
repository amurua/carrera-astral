import RaceTrack from "./components/RaceTrack";
import { useRanking } from "./hooks/useRanking";

export default function App() {
  const ranking = useRanking(10);

  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-10 flex justify-center">
    <div className="w-full max-w-6xl">
      <RaceTrack ranking={ranking} />
    </div>
  </div>
);

}
