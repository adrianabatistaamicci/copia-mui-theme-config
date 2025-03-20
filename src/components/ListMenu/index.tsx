import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
  } from "@mui/material";
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
  
  const ListMenu = ({ items, selectedIndex, onSelect }: IListMenuProps) => (
    <List disablePadding dense>
      {items.map((item, index) => (
        <ListItem key={item.name} disableGutters>
          <ListItemButton
            selected={selectedIndex === index}
            onClick={() => onSelect(index)}
          >
            <ListItemIcon
              sx={{
                paddingRight: 4,
                minWidth: "auto",
                color: selectedIndex === index ? "primary.main" : "grey.400",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight={500} color="text.primary">
                  {item.title}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
  
  export default ListMenu;
