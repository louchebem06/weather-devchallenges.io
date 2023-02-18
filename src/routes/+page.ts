import { getWeather, getWeek } from "$lib/weatherApi";

export async function load() {
	let weather = getWeather(48.8534951, 2.3483915);
	let week = getWeek(48.8534951, 2.3483915);
	return (
		{
			weather: await weather,
			week: await week
		}
	);
}
