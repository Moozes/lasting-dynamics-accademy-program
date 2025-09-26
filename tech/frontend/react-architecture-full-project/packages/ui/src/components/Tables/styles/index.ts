import { SxProps, Theme as MuiTheme } from "@mui/material";

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
export const TableHeadCellStyle: SxProps = { p: 1, fontWeight: 700 };
export const TableHeadCellStyle2: SxProps<MuiTheme> = {
    p: 1,
    fontWeight: 700,
    cursor: "pointer",
    color: (theme) => theme.color_system.text.primary,
};
export const TableHeadCellStyle3: SxProps<MuiTheme> = {
    p: 1,
    fontWeight: 700,
    color: (theme) => theme.color_system.text.secondary,
};

export const TableHeadCellTextStyle: SxProps<MuiTheme> = (theme) => ({
    color: theme.color_system.text.primary,
    ...theme.typography.body1,
});

export const TableBodyStyle2: SxProps<MuiTheme> = {
    border: (theme: MuiTheme) => `1px solid ${theme.color_system.divider.light_grey_20}`,
};

export const DataTableBodyStyle: SxProps<MuiTheme> = {
    borderWidth: "0",
};

export const TableFooterStyle: SxProps<MuiTheme> = {
    border: (theme: MuiTheme) => `1px solid ${theme.palette.divider}`,
};
export const TableFooterStyle2: SxProps<MuiTheme> = {
    border: (theme: MuiTheme) => `1px solid ${theme.color_system.divider.light_grey_20}`,
};

export const TableBodyCellStyle2: SxProps<MuiTheme> = (theme) => ({
    borderBottom: `1px solid ${theme.color_system.divider.light_grey_20}`,
    fontWeight: 500,
    whiteSpace: "nowrap",
    px: 1,
    color: theme.color_system.text.primary,
    ...theme.typography.h6,
});
export const TableBodyCellStyle3: SxProps<MuiTheme> = (theme) => ({
    borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
    fontWeight: 600,
    whiteSpace: "nowrap",
    px: 1,
    color: theme.color_system.text.secondary,
    ...theme.typography.h6,
});

export const TableBodyemptyCellStyle: SxProps = {
    border: "none",
};
export const TableFooterCellStyle: SxProps<MuiTheme> = {
    borderBottom: (theme: MuiTheme) => `1px solid ${theme.palette.divider}`,
};
export const TableFooterCellStyle2: SxProps<MuiTheme> = {
    borderBottom: (theme: MuiTheme) => `1px solid ${theme.color_system.divider.light_grey_20}`,
};
export const TablepaginationStyle: SxProps = { position: "sticky", right: 18 };
export const TableSelectMenuStyle: SxProps = {
    "& .MuiSelect-outlined": {
        px: 1,
        py: 0,
    },
};

export const TableHeadStyle2: SxProps<MuiTheme> = {
    bgcolor: (theme) => theme.color_system.divider.light_grey,
};

export const LoadMoreButtonStyles: SxProps<MuiTheme> = (theme) => ({
    color: theme.color_system.primary.dark,
});

/** Search Component */

export const SearchInputContainer2: SxProps<MuiTheme> = {
    border: (theme) => `.5px solid ${theme.color_system.divider.light_grey}`,
    background: (theme) => theme.color_system.divider.white,
    borderRadius: 2,
    boxShadow: (theme) => theme.color_system.boxShadow.gray,
    width: {
        xs: 300,
        md: 420,
    },
    height: 39,
    padding: 0.5,
};

export const SearchInputIconButton2: SxProps<MuiTheme> = {
    maxWidth: 42,
    "svg path": { stroke: (theme) => theme.color_system.divider.dark_grey },
};

export const SearchInput2: SxProps<MuiTheme> = {
    ml: "-2px",
    flex: 1,
    width: "calc(100% - 42px)",
    "& input": {
        p: 0,
    },
    "& input::placeholder": {
        fontWeight: "700",
        color: (theme) => theme.color_system.divider.light_grey,
    },
};
