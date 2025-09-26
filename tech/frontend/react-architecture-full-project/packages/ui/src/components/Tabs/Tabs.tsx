import { FC } from "react";

import { Tab, Tabs as MuiTabs } from "@mui/material";
import Box from "@mui/material/Box";

import { useTranslationV2 } from "../../i18n/hooks/useTranslation";

import { TabsStyles2, TabStyles } from "./inlineStyles";
import { CustomTabsProps } from "./Tabs.types";

export const Tabs: FC<CustomTabsProps> = ({
    height = "39px",
    width = "auto",
    variant = "inline",
    TabsProps,
    items,
    children,
    selectedTab,
    onChangeHandler,
    onClickhandler,
}) => {
    const t = useTranslationV2();
    return (
        <Box>
            <Box display={variant === "inline" ? "inline-flex" : "initial"}>
                <MuiTabs
                    value={selectedTab}
                    onChange={onChangeHandler}
                    sx={{
                        minHeight: height,
                        height,
                        ...TabsStyles2,
                    }}
                    {...TabsProps}
                >
                    {items.map((item) => (
                        <Tab
                            onClick={() => {
                                if (onClickhandler) {
                                    onClickhandler(item);
                                }
                            }}
                            key={item.label}
                            label={t(item.label)}
                            value={item.label}
                            disableRipple
                            sx={(theme) => ({
                                minHeight: height,
                                height,
                                width,
                                ...(TabStyles(theme) as any),
                            })}
                            icon={item.icon}
                            iconPosition={item.iconPosition}
                            disabled={item.disabled}
                            {...item.TabProps}
                        />
                    ))}
                </MuiTabs>
            </Box>
            {children}
            {/* ||
                items.map((item) => (
                    <TabPanel key={item.label} value={selectedTab} id={item.label}>
                        {item.tabContent}
                    </TabPanel>
                )) */}
        </Box>
    );
};
