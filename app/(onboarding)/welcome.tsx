import { setHasSeenWelcome } from "@/storage/onboarding";
import { WelcomeSlide } from "@/types/welcomeSlide";
import { router } from "expo-router";
import { useMemo, useRef, useState } from "react";
import {
	Dimensions,
	FlatList,
	Image,
	ListRenderItemInfo,
	Pressable,
	Text,
	View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Welcome() {
	const slides = useMemo<WelcomeSlide[]>(
		() => [
			{
				key: "slide-1",
				title: "Easy Process",
				description: "Gestiona tus gastos y presupuesto mensual con facilidad.",
				image: require("@/assets/images/welcomeScreen/ws-1.avif"),
			},
			{
				key: "slide-2",
				title: "Easy Process",
				description: "Gestiona tus gastos y presupuesto mensual con facilidad.",
				image: require("@/assets/images/welcomeScreen/ws-2.avif"),
			},
			{
				key: "slide-3",
				title: "Easy Process",
				description: "Gestiona tus gastos y presupuesto mensual con facilidad.",
				image: require("@/assets/images/welcomeScreen/ws-3.avif"),
			},
		],
		[],
	);

	const listRef = useRef<FlatList<WelcomeSlide>>(null);
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [isLeaving, setIsLeaving] = useState<boolean>(false);

	const onMomentumEnd = (e: any) => {
		const x = e.nativeEvent.contentOffset.x;
		const nextIndex = Math.round(x / width);
		setActiveIndex(nextIndex);
	};

	const renderItem = ({ item }: ListRenderItemInfo<WelcomeSlide>) => {
		return (
			<View style={{ width }} className="">
				<Image
					source={item.image}
					resizeMode="cover"
					className="h-96 rounded-[21px] w-full"
					accessible
					accessibilityLabel={item.title}
				/>
				<View className="px-6">
					<Text className="mt-8 text-3xl font-bold text-center">
						{item.title}
					</Text>
					<Text className="leading-6 mt-4 text-base text-center">
						{item.description}
					</Text>
				</View>
			</View>
		);
	};

	const isLast = activeIndex === slides.length - 1;

	return (
		<View className="bg-[#f0eee9] flex-1">
			<View className="flex-[7]">
				<FlatList
					ref={listRef}
					data={slides}
					keyExtractor={(item) => item.key}
					renderItem={renderItem}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					onMomentumScrollEnd={onMomentumEnd}
					decelerationRate="fast"
					snapToInterval={width}
					snapToAlignment="start"
				/>
			</View>
			<View className="flex-[1.5] items-center justify-center">
				<View className="flex-row items-center gap-2">
					{slides.map((s, i) => (
						<View
							key={s.key}
							className={[
								"h-2 rounded-full",
								i === activeIndex ? "w-8 bg-[#2853aa]" : "w-2 bg-[#797979]",
							].join(" ")}
							accessibilityState={{ selected: i === activeIndex }}
						/>
					))}
				</View>
			</View>
			<View className="flex-[1.5] px-6">
				<Pressable
					disabled={isLeaving}
					onPress={async () => {
						await setHasSeenWelcome(true);
						router.replace("/(auth)/login");
					}}
					className={[
						"px-6 py-4 rounded-[10px]",
						isLeaving ? "bg-[#2853aa]/70" : "bg-[#2853aa]",
					].join(" ")}
					accessibilityRole="button"
					accessibilityLabel="Saltar"
				>
					<Text className="font-semibold text-white/90 text-center text-base uppercase">
						Saltar
					</Text>
				</Pressable>
			</View>
		</View>
	);
}
