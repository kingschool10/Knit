import { KnitShared } from "./KnitShared";

const RunService = game.GetService("RunService");

export class KnitClient implements KnitShared {
	IsStudio = RunService.IsStudio();
	IsServer = false;

	constructor() {}
}
