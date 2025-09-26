import { DevicesIcon, FirmwareIcon, OrganizationIcon, UserIcon, useTranslationV2 } from "ui";

import { r } from "@routes/routes";

export const useDrawerMenuList = () => {
    const t = useTranslationV2();

    return {
        drawerMenuList: [
            {
                text: t("organizations"),
                route: r.gar(r.routes.organizations.index),
                icon: OrganizationIcon,
                iconClassName: "fill",
            },
            {
                text: t("users"),
                route: r.gar(r.routes.users.index),
                icon: UserIcon,
                iconClassName: "stroke",
            },
            {
                text: t("devices"),
                route: r.gar(r.routes.devices.index),
                icon: DevicesIcon,
                iconClassName: "fill",
            },
            {
                text: t("firmwares"),
                route: r.gar(r.routes.firmwares.index),
                icon: FirmwareIcon,
                iconClassName: "fill stroke",
            },
        ],
    };
};
