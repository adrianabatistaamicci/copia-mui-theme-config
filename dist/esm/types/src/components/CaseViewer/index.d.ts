interface ImageType {
    id: number;
    image: string | null;
}
interface ICase {
    id: number;
    name: string;
    client_name: string;
    first_topic: string;
    second_topic: string;
    third_topic: string;
    fourth_topic: string;
    images: ImageType[];
}
type CaseViewerProps = {
    sellerCases: Array<ICase>;
    loading: boolean;
};
declare const CaseViewer: ({ sellerCases, loading }: CaseViewerProps) => import("react/jsx-runtime").JSX.Element;
export default CaseViewer;
