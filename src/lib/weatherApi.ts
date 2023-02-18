const baseUrl = "https://api.openweathermap.org/data/2.5";
const api_key = "f27e7d776404d9248d30e66caf3a1778";

export interface Error {
	cod: number,
	message: string
};

export interface Location {
	"name": string
	"lat": number,
	"lon": number,
	"country": string,
	"state": string
}

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

export interface DayOfWeek {
	"dt": number,
	"main": {
		"temp": number,
		"feels_like": number,
		"temp_min": number,
		"temp_max": number,
		"pressure": number,
		"sea_level": number,
		"grnd_level": number,
		"humidity": number,
		"temp_kf": number
	},
	"weather": [
		{
		"id": number,
		"main": string,
		"description": string,
		"icon": string
		}
	],
	"clouds": {
		"all": number
	},
	"wind": {
		"speed": number,
		"deg": number,
		"gust": number
	},
	"visibility": number,
	"pop": number,
	"rain": {
		"3h": number
	},
	"sys": {
		"pod": string
	},
	"dt_txt": string
}

export interface Week {
	"cod": string,
	"message": number,
	"cnt": number,
	"list": DayOfWeek[],
	"city": {
		"id": number,
		"name": string,
		"coord": {
			"lat": number,
			"lon": number
		},
		"country": string,
		"population": number,
		"timezone": number,
		"sunrise": number,
		"sunset": number
	}
};

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

export function degToName(deg: number): string {
	if (deg >= 348.75 || deg < 11.25) {
		// Nord
		return "N";
	} else if (deg < 33.75) {
		// Nord-Nord-Est
		return "NNE";
	} else if (deg < 56.25) {
		// Nord-Est par Nord
		return "NEbN";
	} else if (deg < 78.75) {
		// Nord-Est
		return "NE";
	} else if (deg < 101.25) {
		// Nord-Est par Est
		return "NEbE";
	} else if (deg < 123.75) {
		// Est-Nord-Est
		return "ENE";
	} else if (deg < 146.25) {
		// Est par Nord
		return "EbN";
	} else if (deg < 168.75) {
		// Est par Sud
		return "EbS";
	} else if (deg < 191.25) {
		// Est-Sud-Est
		return "ESE";
	} else if (deg < 213.75) {
		// Sud-Est par Est
		return "SEbE";
	} else if (deg < 236.25) {
		// Sud-Est
		return "SE";
	} else if (deg < 258.75) {
		// Sud-Est par Sud
		return "SEbS";
	} else if (deg < 281.25) {
		// Sud-Sud-Est
		return "SSE";
	} else if (deg < 303.75) {
		// Sud par Est
		return "SbE";
	} else if (deg < 326.25) {
		// Sud par Ouest
		return "SbW";
	} else if (deg < 348.75) {
		// Sud-Ouest par Sud
		return "SWbS";
	} else {
		// Sud-Ouest
		return "SW";
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

function removeDateInList(week: Week): Week {
	const uniqueDates: string[] = [];
	const currentDate: string = new Date().toISOString().substr(0, 10);
	const filteredList: DayOfWeek[] = [];

	const tempsByDay: { [day: string]: { max: number, min: number } } = {};
  
	for (let day of week.list) {
	  const date: number = day.dt;
	  const dateWithoutTime: string = new Date(date * 1000).toISOString().substr(0, 10);
  
	  if (dateWithoutTime !== currentDate && !uniqueDates.includes(dateWithoutTime)) {
		uniqueDates.push(dateWithoutTime);
		let maxTemp: number = day.main.temp_max;
		let minTemp: number = day.main.temp_min;
  
		for (let day2 of week.list) {
		  const date2: number = day2.dt;
		  const dateWithoutTime2: string = new Date(date2 * 1000).toISOString().substr(0, 10);
		  if (dateWithoutTime2 === dateWithoutTime) {
			if (day2.main.temp_max > maxTemp) {
			  maxTemp = day2.main.temp_max;
			}
			if (day2.main.temp_min < minTemp) {
			  minTemp = day2.main.temp_min;
			}
		  }
		}
		
		tempsByDay[dateWithoutTime] = { max: maxTemp, min: minTemp };
		filteredList.push(day);
	  }
	}

	for (let day of filteredList) {
	  const dateWithoutTime: string = new Date(day.dt * 1000).toISOString().substr(0, 10);
	  day.main.temp_max = tempsByDay[dateWithoutTime].max;
	  day.main.temp_min = tempsByDay[dateWithoutTime].min;
	}
  
	week.list = filteredList;
	return week;
}

export function getWeek(lat: number, lon: number): Promise<Week|Error> {
	const url = `${baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`;
	return (
		fetch(url)
			.then(async (response) => {
				let ret = await response.json();
				return (removeDateInList(ret));
			})
			.catch(async (e) => {
				return await e.json();
			})
	);
}

export function searchCity(ville: string): Promise<Location[]|Error> {
	const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ville}&limit=5&appid=${api_key}`;
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
