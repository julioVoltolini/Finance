import { Console } from "console";
import { ValueTransformer } from "typeorm";

export class SimNaoTransformer implements ValueTransformer {
	from(value: string) {
		if (value == null || value == undefined) return false;
		else return value === this.Sim;
	}
	to(value: boolean): String {
		if (value == null || value == undefined) return this.Nao;
		else return value ? this.Sim : this.Nao;
	}

	constructor(private Sim: string = "SIM", private Nao: string = "NAO") {}
}
