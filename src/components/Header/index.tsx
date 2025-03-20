import { useHistory, Link as RouterLink } from "react-router-dom";
import {
  Breadcrumbs,
  Card,
  Link,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

interface HeaderProps {
  title: string;
  titleLeft?: JSX.Element;
  titleRight?: JSX.Element;
  breadcrumbs?: Array<{ title: string; route: string }>;
  maxBreadcrumbs?: number;
  loading?: boolean;
  showReturn?: boolean;
  onReturn?: () => void;
}

const Header = ({
  title,
  titleLeft,
  titleRight,
  breadcrumbs,
  maxBreadcrumbs = 2,
  loading = false,
  showReturn = false,
  onReturn,
}: HeaderProps) => {
  const history = useHistory();
  return (
    <Stack spacing={2} direction="row" width="100%">
      {showReturn && (
        <Card sx={{ minWidth: 56, minHeight: 56 }}>
          <button
            type="button"
            style={{
              border: 0,
              padding: 0,
              margin: 0,
              background: "transparent",
              width: "100%",
              height: "100%",
            }}
            onClick={() => {
              if (onReturn) {
                onReturn();
              } else {
                history.goBack();
              }
            }}
            data-testid="return-button"
          >
            <Stack justifyContent="center" alignItems="center" height="100%">
              <ArrowBackIosNew />
            </Stack>
          </button>
        </Card>
      )}
      <Card sx={{ width: "100%" }}>
        <Stack
          px={4}
          py={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack spacing={4} direction="row" alignItems="center">
            {titleLeft}
            {loading ? (
              <Skeleton
                variant="rectangular"
                width={200}
                height={28}
                data-testid="header-skeleton"
              />
            ) : (
              <Typography variant="h5" data-testid="header-title">
                {title}
              </Typography>
            )}
            {titleRight}
          </Stack>
          <Breadcrumbs
            maxItems={maxBreadcrumbs}
            data-testid="header-breadcrumbs"
          >
            <Link component={RouterLink} to="/home" color="text.secondary">
              <Typography variant="body2" color="text.secondary">
                Home
              </Typography>
            </Link>
            {breadcrumbs &&
              breadcrumbs.map((bc) => (
                <Link
                  key={bc.route}
                  component={RouterLink}
                  to={bc.route}
                  color="text.secondary"
                  aria-label={`header-breadcrumb-${bc.title}`}
                >
                  <Typography variant="body2" color="text.secondary">
                    {bc.title}
                  </Typography>
                </Link>
              ))}
            <Typography variant="body2" color="text.primary">
              {title}
            </Typography>
          </Breadcrumbs>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Header;
