// src/hooks/useWeather.ts (Mantenha esta versão atualizada)
import { useState, useEffect, useCallback } from "react";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    temp_min: number; 
    temp_max: number; 
    pressure: number; 
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
}

interface WeatherHookResult {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const useWeather = (city: string, apiKey: string): WeatherHookResult => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async () => {
    // ⭐️ SEMPRE COMEÇA RESETANDO ESTADOS 
    setLoading(true); 
    setError(null);

    if (!apiKey || !city) {
      setError("Chave da API ou Cidade não configuradas corretamente.");
      setLoading(false);
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
      const response = await fetch(url);

      if (!response.ok) {
        // Se a resposta NÃO for OK (401, 404), lança o erro
        const status = response.status;
        let errorMessage = "Erro desconhecido ao buscar o clima.";
        
        if (status === 401) {
            errorMessage = "Erro 401: Chave da API inválida ou expirada.";
        } else if (status === 404) {
            errorMessage = `Erro 404: Cidade "${city}" não encontrada.`;
        } else {
            const errorData = await response.json();
            errorMessage = errorData.message || `Erro HTTP: ${status}`;
        }
        
        throw new Error(errorMessage);
      }

      const data: WeatherData = await response.json();
      setWeather(data);

    } catch (err: any) {
      // Captura o erro e garante que o estado de erro seja exibido
      console.error("Erro na busca do clima:", err.message);
      setError(err.message || "Não foi possível carregar o clima.");
    } finally {
      // ⭐️ GARANTE QUE O LOADING SEJA FALSE, independente de sucesso ou falha
      setLoading(false);
    }
  }, [city, apiKey]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return { weather, loading, error };
};

export default useWeather;