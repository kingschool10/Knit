import { KnitServer } from "./KnitServer";
import { KnitClient } from "./KnitClient";

const RunService = game.GetService("RunService");

let server: KnitServer;
let client: KnitClient;

export function GetServer(): KnitServer {
	assert(RunService.IsServer(), "Cannot get Knit server from client");
	if (!server) {
		server = new KnitServer();
	}
	return server;
}

export function GetClient(): KnitClient {
	assert(RunService.IsClient(), "Cannot get Knit client from server");
	if (!client) {
		client = new KnitClient();
	}
	return client;
}
