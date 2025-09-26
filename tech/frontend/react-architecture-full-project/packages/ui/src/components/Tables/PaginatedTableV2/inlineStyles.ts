import { SxProps, Theme } from "@mui/material";

export const tableRowStyles = (isRowDisabled: boolean): SxProps<Theme> => ({
    opacity: isRowDisabled ? 0.3 : 1,
    background: (theme) => theme.color_system.background.paper,
    // this makes the row non clickable
    // pointerEvents: row.values.invitation_pending ? "none" : "all",
});

export const TableLinearProgressStyle: SxProps = { height: "2px" };
export const TableStyle: SxProps = {
    borderRadius: "10px",
    overflow: "auto",
};
export const TableContainerStyle: SxProps = {
    maxWidth: "100%",
    overflowX: "auto",
    mb: 2,
};
export const TableHeadCellStyle: SxProps<Theme> = {
    p: 1,
    fontWeight: 700,
    position: "sticky",
    right: 0,
    bgcolor: (theme) => theme.color_system.divider.light_grey,
};
export const TableHeadCellStyle2: SxProps<Theme> = {
    p: 1,
    fontWeight: 700,
    cursor: "pointer",
    color: (theme) => theme.color_system.text.primary,
};

export const TableHeadCellTextStyle: SxProps<Theme> = (theme) => ({
    color: theme.color_system.text.primary,
    ...theme.typography.body1,
});

export const TableBodyStyle2: SxProps<Theme> = {
    border: (theme: Theme) => `1px solid ${theme.color_system.divider.light_grey_20}`,
};

export const TableFooterStyle2: SxProps<Theme> = {
    border: (theme: Theme) => `1px solid ${theme.color_system.divider.light_grey_20}`,
};

export const TableBodyStickyCellStyle: SxProps<Theme> = (theme) => ({
    borderBottom: `1px solid ${theme.color_system.divider.light_grey_20}`,
    fontWeight: 500,
    whiteSpace: "nowrap",
    px: 1,
    color: theme.color_system.text.primary,
    ...theme.typography.h6,
    position: "sticky",
    right: 0,
    bgcolor: theme.color_system.background.paper,
});
export const TableBodyCellStyle2: SxProps<Theme> = (theme) => ({
    borderBottom: `1px solid ${theme.color_system.divider.light_grey_20}`,
    fontWeight: 500,
    whiteSpace: "nowrap",
    px: 1,
    color: theme.color_system.text.primary,
    ...theme.typography.h6,
});

export const TableFooterCellStyle2: SxProps<Theme> = {
    borderBottom: (theme: Theme) => `1px solid ${theme.color_system.divider.light_grey_20}`,
};
export const TableFooterCellStyle3: SxProps<Theme> = {
    borderBottom: (theme: Theme) => `1px solid ${theme.color_system.divider.light_grey_20}`,
    padding: "10px 16px",
    textAlign: "center",
};
export const TablepaginationStyle: SxProps = { position: "sticky", right: 18 };
export const TableSelectMenuStyle2: SxProps<Theme> = (theme) => ({
    "& .MuiSelect-outlined": {
        px: 1,
        py: 0,
        color: theme.color_system.text.primary,
    },
    fieldset: {
        border: `1px solid ${theme.color_system.primary.dark}`,
    },
});
export const TableSelectMenuItemStyle: SxProps<Theme> = (theme) => ({
    "&:hover": { bgcolor: theme.color_system.divider.light_grey },
    "&.Mui-selected": {
        bgcolor: theme.color_system.divider.light_grey,
        "&:hover": { bgcolor: theme.color_system.divider.light_grey },
    },
});

export const ChevronIconStyles: SxProps<Theme> = (theme) => ({ color: theme.color_system.primary.dark });

export const ActivePageNumberStyles: SxProps<Theme> = {
    color: (theme) => theme.color_system.background.paper,
    background: (theme) => theme.color_system.primary.dark,
    padding: "0px 6px",
    borderRadius: "5px",
};

export const TableHeadStyle2: SxProps<Theme> = {
    bgcolor: (theme) => theme.color_system.divider.light_grey,
};
