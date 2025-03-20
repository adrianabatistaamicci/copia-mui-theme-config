import { ArrowUpwardOutlined } from "@mui/icons-material";
import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

interface AmicciFooterProps {
  supportUrl: string;
}
const AmicciFooter = ({ supportUrl }: AmicciFooterProps) => {
  const iconButtonStyle = {
    minWidth: 44,
    width: 44,
    height: 44,
    backgroundColor: "#10C2C0",
    color: "white",
    "&:hover": {
      backgroundColor: "#10C2C0",
      color: "#6FE0DC",
    },
  };

  const textButtonHoverStyle = {
    "&:hover .MuiTypography-root": {
      color: "#10C2C0",
    },
  };

  return (
    <Box bgcolor="#062630">
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 3, sm: 6, md: 8 },
        }}
      >
        <Grid container spacing={6}>
          <Grid item md={6} xs={12} mt={6}>
            <Typography
              color="primary.200"
              variant="subtitle2"
              mb={6}
              paragraph
            >
              Sobre Amicci
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="white"
              width="70%"
            >
              Unimos tecnologia e expertise para que varejistas e fábricas
              construam marcas próprias fortes.
            </Typography>
            <Stack direction="row" spacing={4} mt={8}>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                href="https://blog.amicci.com.br/"
                target="_blank"
                sx={{
                  height: 42,
                  backgroundColor: "#10C2C0",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#10C2C0",
                    color: "#6FE0DC",
                  },
                }}
              >
                Blog Amicci
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                href="https://www.linkedin.com/company/amicci"
                target="_blank"
                sx={iconButtonStyle}
              >
                <LinkedInIcon />
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                href="https://www.instagram.com/amicci_pl/"
                target="_blank"
                sx={iconButtonStyle}
              >
                <InstagramIcon />
              </Button>
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                href="https://www.facebook.com/amiccipl"
                target="_blank"
                sx={iconButtonStyle}
              >
                <FacebookOutlinedIcon />
              </Button>
            </Stack>
          </Grid>

          <Grid item md={3} xs={12} mt={6}>
            <Stack alignItems="flex-start">
              <Typography
                color="primary.200"
                variant="subtitle2"
                mb={6}
                paragraph
              >
                Conteúdos
              </Typography>
              <Stack gap={4} alignItems="flex-start">
                <Button
                  variant="text"
                  href="https://amicci.com.br/"
                  target="_blank"
                  sx={{ ...textButtonHoverStyle }}
                >
                  <Typography variant="subtitle1" color="white" width="100%">
                    Institucional
                  </Typography>
                </Button>
                <Button
                  variant="text"
                  href="https://blog.amicci.com.br/"
                  target="_blank"
                  sx={{ ...textButtonHoverStyle }}
                >
                  <Typography variant="subtitle1" color="white" width="100%">
                    Blog
                  </Typography>
                </Button>
                <Button
                  variant="text"
                  href="https://plconnection.com.br/"
                  target="_blank"
                  sx={{ ...textButtonHoverStyle }}
                >
                  <Typography variant="subtitle1" color="white" width="100%">
                    Pl Connection
                  </Typography>
                </Button>
                <Button
                  variant="text"
                  href="https://www.privatelabelplus.com.br/"
                  target="_blank"
                  sx={{ ...textButtonHoverStyle }}
                >
                  <Typography variant="subtitle1" color="white" width="100%">
                    Pl Plus
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item md={3} xs={12} mt={6}>
            <Typography
              color="primary.200"
              variant="subtitle2"
              mb={6}
              paragraph
            >
              Atualizações & Suporte
            </Typography>
            <Stack gap={4} alignItems="flex-start">
              <Button
                variant="text"
                href="http://updates.amicci.com.br/"
                target="_blank"
                sx={{ ...textButtonHoverStyle }}
              >
                <Typography variant="subtitle1" color="white" width="100%">
                  Atualizações da plataforma
                </Typography>
              </Button>
              <Button
                variant="text"
                href="https://updates.amicci.com.br/legislacoes-de-produtos/"
                target="_blank"
                sx={{ ...textButtonHoverStyle }}
              >
                <Typography variant="subtitle1" color="white" width="100%">
                  Legislações de produtos
                </Typography>
              </Button>
              <Button
                variant="text"
                href={supportUrl}
                target="_blank"
                sx={{ ...textButtonHoverStyle }}
              >
                <Typography variant="subtitle1" color="white" width="100%">
                  Central de suporte
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "#033538",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        />

        <Stack
          direction="row"
          pb={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            <Typography variant="caption" color="white">
              Copyright © 2023 Amicci. All Rights Reserved.
            </Typography>
            <Button
              variant="text"
              href="https://amicci.com.br/termos-de-uso"
              target="_blank"
              sx={textButtonHoverStyle}
            >
              <Typography variant="caption" color="white" fontWeight={500}>
                Termos de uso
              </Typography>
            </Button>
            <Button
              variant="text"
              href="https://amicci.com.br/politica-de-privacidade"
              target="_blank"
              sx={textButtonHoverStyle}
            >
              <Typography variant="caption" color="white" fontWeight={500}>
                Política de privacidade
              </Typography>
            </Button>
            <Button
              variant="text"
              href="https://amicci.com.br/politica-de-cookies"
              target="_blank"
              sx={textButtonHoverStyle}
            >
              <Typography variant="caption" color="white" fontWeight={500}>
                Política de cookies
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AmicciFooter;
