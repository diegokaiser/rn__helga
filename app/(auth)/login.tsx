import { loginWithEmail } from "@/services/auth";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const onSubmit = async () => {
		if (loading) return;

		if (!email.trim() || !password) {
			Alert.alert("Error", "Please fill in all fields");
			return;
		}

		try {
			setLoading(true);
			await loginWithEmail(email.trim(), password);
			router.replace("/(tabs)/home");
		} catch (error: any) {
			Alert.alert("Error", error?.message ?? "Invalid email or password");
		} finally {
			setLoading(false);
		}
	};

	return (
		<View className="bg-[#f0eee9] flex-1 pt-32 px-10">
			<Text className="font-bold text-4xl">Iniciar sesión</Text>

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

			<View className="w-full mt-6">
				<Pressable
					onPress={() => router.replace("/(auth)/forgot-password")}
					disabled={loading}
					accessibilityRole="button"
				>
					<Text className="font-bold text-[#2853aa] text-right">
						¿Olvidaste tu contraseña?
					</Text>
				</Pressable>
			</View>

			<View className="w-full mt-6">
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
						{loading ? "Entrando..." : "Iniciar sesión"}
					</Text>
				</Pressable>
			</View>

			<View className="w-full mt-6">
				<Text className="font-bold text-center">O</Text>
			</View>

			<View className="w-full mt-6">
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
						Iniciar sesión con Google
					</Text>
				</Pressable>
			</View>

			<View className="w-full mt-8">
				<View className="flex-row items-center justify-center gap-2">
					<Text>¿No tienes cuenta?</Text>
					<Pressable
						onPress={() => router.replace("/(auth)/register")}
						disabled={loading}
						accessibilityRole="button"
					>
						<Text className="font-bold text-[#2853aa]">Regístrate</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}
