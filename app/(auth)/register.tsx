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

export default function Register() {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [acceptTerms, setAcceptTerms] = useState(false);
	const [loading, setLoading] = useState(false);

	const onSubmit = () => {
		setLoading(true);
	};

	return (
		<Pressable onPress={Keyboard.dismiss} className="flex-1">
			<ScrollView
				className="flex-1 bg-[#f0eee9]"
				contentContainerStyle={{ paddingBottom: 40 }}
				keyboardShouldPersistTaps="handled"
			>
				<View className="pt-32 px-10">
					<Text className="font-bold text-4xl">Registro</Text>

					<Text className="font-semibold mt-6 text-2xl text-[#B3B3B3]">
						Parece que eres nuevo por aquí, vamos a crearte un perfil 😌
					</Text>

					{/* Nombre */}
					<View className="w-full">
						<Text className="mt-8 mb-2 font-semibold">Nombre</Text>
						<TextInput
							value={name}
							onChangeText={setName}
							autoCapitalize="none"
							placeholder="John"
							className="border border-gray-300 bg-transparent rounded-[10px] px-4 py-4 focus:border-[#2853aa] focus:bg-white"
						/>
					</View>

					{/* Apellido */}
					<View className="w-full">
						<Text className="mt-8 mb-2 font-semibold">Apellido</Text>
						<TextInput
							value={lastName}
							onChangeText={setLastName}
							autoCapitalize="none"
							placeholder="Doe"
							className="border border-gray-300 bg-transparent rounded-[10px] px-4 py-4 focus:border-[#2853aa] focus:bg-white"
						/>
					</View>

					{/* Email */}
					<View className="w-full">
						<Text className="mt-8 mb-2 font-semibold">Email</Text>
						<TextInput
							value={email}
							onChangeText={setEmail}
							autoCapitalize="none"
							keyboardType="email-address"
							placeholder="john.doe@example.com"
							className="border border-gray-300 bg-transparent rounded-[10px] px-4 py-4 focus:border-[#2853aa] focus:bg-white"
						/>
					</View>

					{/* Teléfono */}
					<View className="w-full">
						<Text className="mt-8 mb-2 font-semibold">Teléfono</Text>
						<TextInput
							value={phone}
							onChangeText={setPhone}
							autoCapitalize="none"
							keyboardType="numeric"
							placeholder="+00 987 65 43 21"
							className="border border-gray-300 bg-transparent rounded-[10px] px-4 py-4 focus:border-[#2853aa] focus:bg-white"
						/>
					</View>

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

					{/* Acepto términos y condiciones */}
					<View className="w-full">
						<View className="mt-6">
							<Pressable
								onPress={() => setAcceptTerms((v) => !v)}
								className="flex-row items-center"
								accessibilityRole="checkbox"
								accessibilityState={{ checked: acceptTerms }}
							>
								<View
									className={[
										"h-5 w-5 rounded border",
										acceptTerms
											? "bg-[#2853aa] border-[#2853aa]"
											: "bg-transparent border-gray-400",
									].join(" ")}
								/>
								<View className="ml-3">
									<Text>Al crear una cuenta, estás aceptando nuestros</Text>
									<Text className="font-bold text-[#2853aa]">
										Términos y Condiciones
									</Text>
								</View>
							</Pressable>
						</View>
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
								{loading ? "Entrando..." : "Continuar"}
							</Text>
						</Pressable>
					</View>

					{/* Botón de identificarse */}
					<View className="w-full mt-8">
						<View className="flex-row items-center justify-center gap-2">
							<Text>¿Ya tienes cuenta?</Text>
							<Pressable
								onPress={() => router.push("/(auth)/login")}
								disabled={loading}
								accessibilityRole="button"
							>
								<Text className="font-bold text-[#2853aa]">Identifícate</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</ScrollView>
		</Pressable>
	);
}
