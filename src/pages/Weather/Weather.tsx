import React from "react";
import useWeather from "../../Hooks/useWeather";
import { detailItems, sunItems } from "../../Utils/weatherData";

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
        <div 
            id="tempo" 
            className="w-full px-4 py-10 md:py-16 flex justify-center items-center flex-col bg-white" 
        >
            <h1 className="text-3xl md:text-5xl text-center text-[var(--color-primary-700)] mb-6 md:mb-10">
                Previsão do Tempo
            </h1>
            <div 
                className="rounded-2xl max-w-md sm:max-w-lg w-full 
                overflow-hidden font-sans bg-[var(--color-primary-50)]"> 
                
                {weather && (
                <>
                    <div
                        className=" p-4 md:p-6 text-center rounded-t-2xl"
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
                            className="w-12 h-12 mx-auto" 
                        />
                        <p className="text-4xl md:text-5xl text-[var(--color-primary-50)] m-0">
                            {weather.main.temp.toFixed(0)}°C
                        </p>
                        <p className="capitalize text-base text-[var(--color-primary-50)] md:text-lg m-0">
                            {weather.weather[0].description}
                        </p>
                    </div>
                    <div className="p-4 md:p-6">
                        {/* Título Detalhes do Clima: Tag ajustada para h3, tamanho aumentado para lg:text-base */}
                        <h3
                            className="text-sm lg:text-base text-[var(--color-primary-900)] 
                            mb-2">
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

                        <hr className="my-3 border-t border-[var(--color-primary-800)]" />

                        <h3 className="text-sm lg:text-base text-[var(--color-primary-900)] mb-2">Ciclo Solar</h3>

                        {sunItems(weather).map(item => (
                            <div
                                key={item.label} 
                                className="flex justify-between text-sm md:text-base py-1"
                            >
                                <p className="text-[var(--color-primary-600)]">
                                     {item.label}
                                </p> 
                                <p className="font-bold text-[var(--color-primary-800)]">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default Weather;