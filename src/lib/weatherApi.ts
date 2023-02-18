const baseUrl = "https://api.openweathermap.org/data/2.5";
const api_key = "f27e7d776404d9248d30e66caf3a1778";

export interface Error {
	cod: number,
	message: string
};

export interface Weather {
	"coord": {
	  "lon": number,
	  "lat": number
	},
	"weather": [
	  {
		"id": number,
		"main": string,
		"description": string,
		"icon": string
	  }
	],
	"base": string,
	"main": {
	  "temp": number,
	  "feels_like": number,
	  "temp_min": number,
	  "temp_max": number,
	  "pressure": number,
	  "humidity": number,
	  "sea_level": number,
	  "grnd_level": number
	},
	"visibility": number,
	"wind": {
	  "speed": number,
	  "deg": number,
	  "gust": number
	},
	"rain": {
	  "1h": number
	},
	"clouds": {
	  "all": number
	},
	"dt": number,
	"sys": {
	  "type": number,
	  "id": number,
	  "country": string,
	  "sunrise": number,
	  "sunset": number
	},
	"timezone": number,
	"id": number,
	"name": string,
	"cod": number
}

export function idToImg(id: number): string {
	// Clear
	if (id == 800) {
		return ("/Clear.png");
	} 
	// Clouds
	else if (id > 800) {
		return ("/HeavyCloud.png");
	}
	// Brouillard
	else if (id >= 700) {
		return ("/Hail.png");
	}
	// snow
	else if (id >= 600) {
		return ("/Snow.png");
	}
	// rain pluis
	else if (id >= 500) {
		return ("/HeavyRain.png");
	}
	// Drizzle brume
	else if (id >= 300) {
		return ("/Shower.png");
	}
	// Thunderstorm orage
	else {
		return ("/Thunderstorm.png");
	}
}

export function kTof(k: number): number {
	return Math.round(((k - 273.15) * 1.8) + 32);
}

export function kToc(k: number): number {
	return Math.round((k - 273.15));
}

export function getWeather(lat: number, lon: number): Promise<Weather|Error> {	
	const url = `${baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
	return (
		fetch(url)
			.then(async (response) => {
				return await response.json();
			})
			.catch(async (e) => {
				return await e.json();
			})
	);
}
