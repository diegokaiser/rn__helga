import { router } from "expo-router";
import { useState } from "react";
import {
	Keyboard,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	View,
} from "react-native";

export default function NewPassword() {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		setLoading(true);
	};

	return (
		<Pressable onPress={Keyboard.dismiss} className="flex-1">
			<ScrollView
				className="flex-1 bg-[#f0eee9]"
				contentContainerStyle={{ paddingBottom: 24 }}
				keyboardShouldPersistTaps="handled"
			>
				<View className="bg-[#f0eee9] flex-1 pt-32 px-10">
					<Text className="font-bold text-4xl">Nueva contraseña</Text>

					<Text className="font-semibold mt-6 text-2xl text-[#B3B3B3]">
						Vamos a crear una nueva contraseña fuerte y segura para tu cuenta 🤫
					</Text>

					{/* Contraseña */}
					<View className="w-full">
						<Text className="mt-8 mb-2 font-semibold">Contraseña</Text>
						<TextInput
							value={password}
							onChangeText={setPassword}
							secureTextEntry
							placeholder="*********"
							className="border border-gray-300	bg-transparent rounded-[10px] px-4 py-4 focus:border-[#2853aa] focus:bg-white"
						/>
					</View>

					{/* Confirmar contraseña */}
					<View className="w-full">
						<Text className="mt-8 mb-2 font-semibold">
							Confirmar contraseña
						</Text>
						<TextInput
							value={password}
							onChangeText={setPassword}
							secureTextEntry
							placeholder="*********"
							className="border border-gray-300	bg-transparent rounded-[10px] px-4 py-4 focus:border-[#2853aa] focus:bg-white"
						/>
					</View>

					{/* Botón de continuar */}
					<View className="w-full mt-8">
						<Pressable
							onPress={onSubmit}
							disabled={loading}
							className={[
								"box-border border-[2px] border-[#2853aa] px-6 py-4 rounded-[10px]",
								loading ? "bg-[#2853aa]/70" : "bg-[#2853aa]",
							].join(" ")}
							accessibilityRole="button"
						>
							<Text className="font-semibold text-center text-white uppercase">
								{loading ? "Entrando..." : "Cambiar contraseña"}
							</Text>
						</Pressable>
					</View>

					{/* Temporal, eliminar luego */}
					<View className="w-full mt-8">
						<View className="flex-row items-center justify-center gap-2">
							<Pressable
								onPress={() => router.push("/(auth)/reset-password-send")}
								disabled={loading}
								accessibilityRole="button"
							>
								<Text className="font-bold text-[#2853aa]">
									reset password send
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</ScrollView>
		</Pressable>
	);
}
