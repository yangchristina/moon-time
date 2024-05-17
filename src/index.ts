import { calculate } from "./calculate";
import { GregorianDate } from "./types";

export default function moonTime(solarDate: GregorianDate) {
    return calculate(solarDate)
};

export type { GregorianDate };