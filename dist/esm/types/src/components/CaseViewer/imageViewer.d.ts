export type ImageType = {
    id: number;
    image: string | null;
};
type ImageViewerProps = {
    images: ImageType[];
};
declare const ImageViewer: React.FC<ImageViewerProps>;
export default ImageViewer;
