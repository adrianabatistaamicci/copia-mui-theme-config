import { useState } from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';

export type ImageType = {
  id: number;
  image: string | null;
};

type ImageViewerProps = {
  images: ImageType[];
};

const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
  const [selectedMedia, setSelectedMedia] = useState<ImageType | null>(
    images[0] || null
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minWidth={332}
      width="332px">
      <Box
        component="img"
        src={selectedMedia?.image || ''}
        alt="Imagem Selecionada"
        sx={{
          width: '100%',
          height: '202px',
          borderRadius: 1,
          boxShadow: 3,
          mb: 2,
          objectFit: 'cover',
        }}
      />

      <ImageList
        cols={6}
        gap={8}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}>
        {images.map(({ id, image }) => (
          <ImageListItem
            key={id}
            onClick={() => setSelectedMedia({ id, image })}>
            <Box
              component="img"
              src={image || ''}
              alt={`Thumbnail ${id}`}
              sx={{
                width: '61px',
                height: '56px',
                cursor: 'pointer',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider',
                opacity: selectedMedia?.image === image ? 1 : 0.6,
                '&:hover': { opacity: 1 },
                objectFit: 'cover',
                position: 'relative',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default ImageViewer;
