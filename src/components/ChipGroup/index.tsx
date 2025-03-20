import { Chip, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Palette from "../../theme/palette";

type ChipColor = "primary" | "secondary" | "info" | "success" | "inherit";
type ChipVariant = "outlined" | "filled";

export interface ChipGroupProps {
  chipsData: { label: string; value: number; selected: boolean }[];
  setChipsData: (
    value: { label: string; value: number; selected: boolean }[]
  ) => void;
  color?: ChipColor;
  variant?: ChipVariant;
}

const ChipGroup = ({
  chipsData,
  setChipsData,
  color = "secondary",
  variant = "filled",
}: ChipGroupProps) => {
  const { palette } = Palette();
  const chipColors = {
    primary: {
      selected: palette.primary.main,
      unselected: palette.grey[200],
    },
    secondary: {
      selected: palette.secondary.dark,
      unselected: palette.grey[200],
    },
    info: {
      selected: palette.info.main,
      unselected: palette.grey[200],
    },
    success: {
      selected: palette.success.main,
      unselected: palette.grey[200],
    },
    inherit: {
      selected: palette.action.active,
      unselected: palette.grey[200],
    },
  };

  const updateChips = (value: number) => {
    setChipsData(
      chipsData.map((chip) => ({
        ...chip,
        selected: chip.value === value,
      }))
    );
  };

  const backgroundColor = (selected: boolean) =>
    selected && variant === "filled"
      ? chipColors[color].selected
      : chipColors[color].unselected;

  const colorChip = (selected: boolean) => {
    if (selected && variant === "outlined") return chipColors[color].selected;
    return selected && variant === "filled"
      ? palette.primary.contrastText
      : palette.text.secondary;
  };

  return (
    <Paper
      sx={{
        padding: "4px",
        width: "100%",
        gap: "4px",
        backgroundColor: "grey.200",
        borderRadius: "var(--12, 48px)",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} direction="row" alignItems="center">
        {chipsData.map((chip) => (
          <Chip
            key={chip.value}
            label={chip.label}
            variant={variant}
            size="small"
            sx={{
              backgroundColor: backgroundColor(chip.selected),
              color: colorChip(chip.selected),
              borderColor:
                variant === "outlined" ? colorChip(chip.selected) : "",
              display: "flex",
              padding: "3px 4px",
              justifyContent: "center",
              alignItems: "center",
              flex: "1 0 0",
              borderRadius: "100px",
              fontFamily: "Roboto",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "22px",
              letterSpacing: "0.46px",
            }}
            onClick={() => {
              updateChips(chip.value);
            }}
          />
        ))}
      </Stack>
    </Paper>
  );
};

export default ChipGroup;
