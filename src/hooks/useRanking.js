import { useState, useEffect } from "react";
import { fetchTopRanking } from "../api/api";

export function useRanking(cantidad = 10) {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const update = async () => {
      try {
        const data = await fetchTopRanking(cantidad);
        setRanking(data);
      } catch (e) {
        console.error("Error cargando ranking", e);
      }
    };

    update();
    const interval = setInterval(update, 500);

    return () => clearInterval(interval);
  }, [cantidad]);

  return ranking;
}
