import { Text, View } from "react-native";

export default function Home() {
	return (
		<View className="flex-1 items-center justify-center bg-white p-4">
			<Text className="text-4xl font-bold text-blue-600 mb-4">Helga!</Text>
			<Text className="text-lg text-gray-500 mb-8 text-center">
				Gestiona tus gastos y presupuesto mensual con facilidad.
			</Text>
		</View>
	);
}
