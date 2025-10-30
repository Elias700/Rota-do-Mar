
export const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return new Intl.DateTimeFormat('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    }).format(date);
};

// Interface simplificada para o tipo de item de detalhe/sol 
interface WeatherItem {
    icon: string;
    label: string;
    value: string;
}

export const detailItems = (weather: any): WeatherItem[] => [
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

export const sunItems = (weather: any): WeatherItem[] => [
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