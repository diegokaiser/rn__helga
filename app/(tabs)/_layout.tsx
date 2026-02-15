import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					headerTitle: "Home",
				}}
			/>
			<Tabs.Screen
				name="estates"
				options={{
					title: "Mis Inmuebles",
					headerTitle: "Mis Inmuebles",
				}}
			/>
			<Tabs.Screen
				name="services"
				options={{
					title: "Servicios",
					headerTitle: "Servicios",
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Perfil",
					headerTitle: "Perfil",
				}}
			/>
		</Tabs>
	);
}
