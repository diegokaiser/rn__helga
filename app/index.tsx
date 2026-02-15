import { getHasSeenWelcome } from "@/storage/onboarding";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef } from "react";

export default function Index() {
	const ranOne = useRef(false);

	useEffect(() => {
		if (ranOne.current) return;
		ranOne.current = true;

		const boot = async () => {
			try {
				const hasSeenWelcome = await getHasSeenWelcome();

				if (!hasSeenWelcome) {
					router.replace("/(onboarding)/welcome");
				} else {
					router.replace("/(auth)/login");
				}
			} finally {
				await SplashScreen.hideAsync();
			}
		};

		boot();
	}, []);

	return null;
}
