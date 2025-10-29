import React from "react";
import useWeather from "../../Hooks/useWeather";
const formatTime = (timestamp: number): string => {
 const date = new Date(timestamp * 1000);
 return new Intl.DateTimeFormat('pt-BR', { 
  hour: '2-digit', 
  minute: '2-digit' 
 }).format(date);
};

const detailItems = (weather: any) => [
    { 
        icon: '🌡️', 
        label: 'Máx/Mín', 
        value: `${weather.main.temp_max.toFixed(1)}°C / ${weather.main.temp_min.toFixed(1)}°C` 
    },
    { 
        icon: '💧', 
        label: 'Umidade', 
        value: `${weather.main.humidity}%` 
    },
    { 
        icon: '💨', 
        label: 'Vento', 
        value: `${weather.wind.speed} m/s` 
    },
    { 
        icon: '📏', 
        label: 'Pressão', 
        value: `${weather.main.pressure} hPa` 
    },
];

const sunItems = (weather: any) => [
    { 
        icon: '🌅', 
        label: 'Nascer do Sol', 
        value: formatTime(weather.sys.sunrise) 
    },
    { 
        icon: '🌇', 
        label: 'Pôr do Sol', 
        value: formatTime(weather.sys.sunset) 
    },
];


const Weather: React.FC = () => {
const API_KEY = "82a2f26366b0ada6dfa27729187f99dc"; 
const city = "Salvador, BR"; 

const { weather, loading, error } = useWeather(city, API_KEY);

if (loading) {
  return (
   <div className="text-center p-5">
    <p className="text-primary-700">Carregando clima de Salvador... ⏳</p>
   </div>
  );
}

if (error) {
  return (
   <div className="text-center p-5 text-[var(--color-error)]">
    <p>⚠️{error}</p>
   </div>
  );
}

return (
    <div id="tempo" className="w-full px-4 py-10 md:py-16 flex justify-center">
        <div className="rounded-2xl max-w-md sm:max-w-lg w-full shadow-xl overflow-hidden font-sans">
            <h1 className="text-3xl md:text-5xl text-center text-[var(--color-primary-700)] mb-6 md:mb-10" >
                Previsão do Tempo
            </h1>
            {weather && (
            <>
                <div
                    className="text-white p-4 md:p-6 text-center rounded-t-2xl"
                    style={
                        { 
                            backgroundImage: "linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-700) 100%)" 
                        }
                    } 
                >
                        <h2 className="text-lg text-[var(--color-primary-50)] md:text-xl font-normal mb-0.5">
                            {weather.name}, BA
                        </h2>
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                            className="w-12 h-12 mx-auto filter drop-shadow-md" 
                        />
                        <p className="text-4xl md:text-5xl text-[var(--color-primary-50)] m-0">
                            {weather.main.temp.toFixed(0)}°C
                        </p>
                        <p className="capitalize text-base text-[var(--color-primary-50)] md:text-lg m-0">
                            {weather.weather[0].description}
                        </p>
                </div>
                    <div className="p-4 md:p-6">
                        <h3 className="text-xs md:text-sm text-[var(--color-primary-900)] mb-2 border-b pb-1 border-[var(--color-primary-600)]">
                            Detalhes do Clima
                        </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {detailItems(weather).map(item => (
                                    <div key={item.label} className="text-left p-2 bg-primary-50 rounded-lg">
                                        <p className="m-0 text-lg md:text-xl">{item.icon}</p>
                                        <p className="m-0 text-[10px] md:text-xs text-[var(--color-primary-600)]">{item.label}</p>
                                        <p className="m-0 text-sm md:text-base font-bold text-[var(--color-primary-900)]">{item.value}</p>
                                    </div>
                                    ))}
                            </div>

                            <div className="my-3 border-b border-[var(--color-primary-800)]"></div> 

                            <h3 className="text-xs md:text-sm text-[var(--color-primary-900)] mb-2">Ciclo Solar</h3>

                            {sunItems(weather).map(item => (
                                <p 
                                    key={item.label} 
                                    className="flex justify-between text-sm md:text-base mx-2 my-1"
                                >
                                    <span className="text-[var(--color-primary-800)]">
                                        {item.icon} 
                                        {item.label}:
                                    </span> 
                                    <span className="font-bold text-[var(--color-primary-800)]">
                                        {item.value}
                                    </span>
                                </p>
                            ))}
                </div>
            </>
            )}
        </div>
    </div>
 );
};

export default Weather;