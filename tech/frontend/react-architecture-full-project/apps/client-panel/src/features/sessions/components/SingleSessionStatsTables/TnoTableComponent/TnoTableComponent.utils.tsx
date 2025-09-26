import { TNOAnglesEnum } from "@features/sessions/types";

export function generateTNOText(timeData: any[], limb: string): { color: string; result: string } {
    let maxStatic = 0;
    let maxDynamic = 0;

    /* eslint-disable no-restricted-syntax */
    for (const item of timeData) {
        maxStatic = Math.max(maxStatic, item.static);
        maxDynamic = Math.max(maxDynamic, item.dynamic);
    }

    let biggestValueLabel: string;
    if (maxStatic > maxDynamic) {
        biggestValueLabel = "static";
    } else {
        biggestValueLabel = "dynamic";
    }

    let risk = "";
    let advice = "";
    let color = "#F24E1E";

    /* eslint-disable no-restricted-syntax */
    for (const item of timeData) {
        if (item[biggestValueLabel] > 0) {
            const label = item.label;

            if (label === TNOAnglesEnum._10_to_20 || label === TNOAnglesEnum.lt0_or_gt20) {
                risk = "No risk";
                advice = "Keep it up";
                color = "#0ACF83";
            } else if (label === TNOAnglesEnum._20_to_60) {
                risk = "Medium risk";
                advice = "Consider reducing that mouvement";
                color = "#FF9B26";
            } else {
                risk = "Increased risk";
                advice = "Consider stoping that mouvement";
                color = "#F24E1E";
            }

            break;
        }
    }

    return { color, result: `Result: ${risk} due to ${biggestValueLabel} in ${limb}. ${advice}.` };
}
