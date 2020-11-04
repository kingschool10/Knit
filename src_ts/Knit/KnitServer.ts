import { KnitShared } from "./KnitShared";

const RunService = game.GetService("RunService");

export class KnitServer implements KnitShared {
	IsStudio = RunService.IsStudio();
	IsServer = true;

	constructor() {}
}
