interface AmicciBrandProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    color?: 'default' | 'white';
    variant?: 'full' | 'mini';
}
declare const AmicciBrand: ({ color, variant, ...props }: AmicciBrandProps) => import("react/jsx-runtime").JSX.Element;
export default AmicciBrand;
