import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, Pressable, ScrollView, Text, View } from "react-native";

export default function ResetPasswordSend() {
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
					<Text className="font-bold text-4xl">
						Solicitud para cambio de contraseña enviado
					</Text>

					<Text className="font-semibold mt-6 text-2xl text-[#B3B3B3]">
						Hemos enviado las instrucciones detalladas a tu correo electrónico
						✉️
					</Text>

					{/* Botón de continuar */}
					<View className="w-full mt-8">
						<Pressable
							onPress={onSubmit}
							disabled={loading}
							className={[
								"box-border border-[2px] border-[#2853aa] px-6 py-4 rounded-[10px]",
								loading ? "bg-[#f0eee9]/70" : "bg-[#f0eee9]",
							].join(" ")}
							accessibilityRole="button"
						>
							<Text className="font-semibold text-center text-[#2853aa] uppercase">
								{loading ? "Entrando..." : "Identificarte"}
							</Text>
						</Pressable>
					</View>

					{/* Temporal, eliminar luego */}
					<View className="w-full mt-8">
						<View className="flex-row items-center justify-center gap-2">
							<Pressable
								onPress={() => router.push("/(auth)/verify-email")}
								disabled={loading}
								accessibilityRole="button"
							>
								<Text className="font-bold text-[#2853aa]">
									OTP Verification
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</ScrollView>
		</Pressable>
	);
}
