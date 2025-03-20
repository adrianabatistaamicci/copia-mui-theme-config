type ChipVariant = 'primary' | 'secondary' | 'info' | 'success' | 'inherit';
export interface ChipGroupedProps {
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
    variant: ChipVariant;
}
declare const ChipGrouped: ({ chipsData, setChipsData, variant, }: ChipGroupedProps) => import("react/jsx-runtime").JSX.Element;
export default ChipGrouped;
