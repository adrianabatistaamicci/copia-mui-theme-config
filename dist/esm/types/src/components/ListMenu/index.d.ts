import { ReactElement } from "react";
import { SvgIconComponent } from "@mui/icons-material";
interface IMenuItem {
    title: string;
    name: string;
    icon: ReactElement<SvgIconComponent>;
}
interface IListMenuProps {
    items: IMenuItem[];
    selectedIndex: number;
    onSelect: (index: number) => void;
}
declare const ListMenu: ({ items, selectedIndex, onSelect }: IListMenuProps) => import("react/jsx-runtime").JSX.Element;
export default ListMenu;
