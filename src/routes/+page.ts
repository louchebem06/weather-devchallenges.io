import { getWeather } from "$lib/weatherApi";

export async function load() {
	return await getWeather(48.8534951, 2.3483915);
}
