interface HeaderProps {
    title: string;
    titleLeft?: JSX.Element;
    titleRight?: JSX.Element;
    breadcrumbs?: Array<{
        title: string;
        route: string;
    }>;
    maxBreadcrumbs?: number;
    loading?: boolean;
    showReturn?: boolean;
    onReturn?: () => void;
}
declare const Header: ({ title, titleLeft, titleRight, breadcrumbs, maxBreadcrumbs, loading, showReturn, onReturn, }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
