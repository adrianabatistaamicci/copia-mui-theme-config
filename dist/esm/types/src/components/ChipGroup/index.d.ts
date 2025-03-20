type ChipColor = "primary" | "secondary" | "info" | "success" | "inherit";
type ChipVariant = "outlined" | "filled";
export interface ChipGroupProps {
    chipsData: {
        label: string;
        value: number;
        selected: boolean;
    }[];
    setChipsData: (value: {
        label: string;
        value: number;
        selected: boolean;
    }[]) => void;
    color?: ChipColor;
    variant?: ChipVariant;
}
declare const ChipGroup: ({ chipsData, setChipsData, color, variant, }: ChipGroupProps) => import("react/jsx-runtime").JSX.Element;
export default ChipGroup;
