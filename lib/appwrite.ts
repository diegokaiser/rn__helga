import { Account, Client } from "react-native-appwrite";

const endpoint = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT;
const projectID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID;

if (!endpoint || !projectID) {
	throw new Error(
		"Please provide APPWRITE_ENDPOINT and APPWRITE_PROJECT_ID in the environment variables",
	);
}

const client = new Client().setEndpoint(endpoint).setProject(projectID);

export const account = new Account(client);
