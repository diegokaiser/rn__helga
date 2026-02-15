import { account } from "@/lib/appwrite";
import { ID } from "react-native-appwrite";

export async function loginWithEmail(email: string, password: string) {
	return account.createEmailPasswordSession(email, password);
}

export async function getCurrentUser() {
	return account.get();
}

export async function logout() {
	return account.deleteSession("current");
}

export async function register(email: string, password: string, name?: string) {
	return account.create(ID.unique(), email, password, name);
}
