import AsyncStorage from "@react-native-async-storage/async-storage";

const HAS_SEEN_WELCOME_KEY = "has_seen_welcome";

export async function getHasSeenWelcome(): Promise<boolean> {
	const value = await AsyncStorage.getItem(HAS_SEEN_WELCOME_KEY);
	return value === "1";
}

export async function setHasSeenWelcome(value: boolean): Promise<void> {
	await AsyncStorage.setItem(HAS_SEEN_WELCOME_KEY, value ? "1" : "0");
}
