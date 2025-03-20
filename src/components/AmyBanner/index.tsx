import { Divider, Stack, Typography } from '@mui/material';
import { AutoAwesomeOutlined } from '@mui/icons-material';
import amy from '~/assets/img/amy.svg';

interface AmyBannerProps {
  title: string;
  description?: string;
  textAlert?: string;
  iconMarginBottom?: number;
}

const AmyBanner = ({
  title,
  description = '',
  textAlert,
  iconMarginBottom = 0,
}: AmyBannerProps) => (
  <Stack
    bgcolor="magenta.50"
    border="1px solid"
    borderColor="magenta.200"
    borderRadius={1}
    paddingY={4}
    paddingX={6}
    gap={4}>
    <Stack direction="row" alignItems="center" gap={2} width="100%">
      <img src={amy} alt="amy" />
      <Stack width="100%">
        <Typography variant="subtitle2" fontWeight={500}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Stack>
      <AutoAwesomeOutlined
        sx={{
          height: 20,
          widht: 20,
          color: 'magenta.500',
          mb: iconMarginBottom,
        }}
      />
    </Stack>
    {textAlert && (
      <>
        <Divider sx={{ backgroundColor: 'grey.300' }} />
        <Typography variant="caption" color="text.secondary">
          {textAlert}
        </Typography>
      </>
    )}
  </Stack>
);

export default AmyBanner;
