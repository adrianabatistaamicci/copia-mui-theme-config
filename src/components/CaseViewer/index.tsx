import {
  Box,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  CheckCircle,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import ImageViewer from "./imageViewer";

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

const CaseViewer = ({ sellerCases, loading }: CaseViewerProps) => {
  const [caseSelected, setCaseSelected] = useState(0);
  const handleCaseToShow = (source: string) => {
    if (source === "next") {
      if (caseSelected < sellerCases.length - 1) {
        setCaseSelected(caseSelected + 1);
      } else {
        setCaseSelected(0);
      }
    }

    if (source === "prev") {
      if (caseSelected > 0) {
        setCaseSelected(caseSelected - 1);
      } else {
        setCaseSelected(sellerCases.length - 1);
      }
    }
  };

  return (
    <Stack bgcolor="background.paper" p={6} id="about-area" mt={6}>
      <Typography variant="h6" color="text.primary">
        Cases
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={10}
      >
        <Box>
          <IconButton
            onClick={() => {
              handleCaseToShow("prev");
            }}
            sx={{ borderRadius: 1, bgcolor: "#EAEFF0" }}
          >
            <KeyboardArrowLeft />
          </IconButton>
        </Box>
        <Stack width="100%">
          {sellerCases.map((caseItem: ICase, index) => (
            <Stack>
              {caseSelected === index && (
                <Stack direction="row" py={12} gap={12}>
                  {caseItem.images?.length > 0 && (
                    <ImageViewer images={caseItem.images} />
                  )}
                  {!loading ? (
                    <Stack direction="row" py={4}>
                      <Stack gap={8}>
                        <Stack>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            {caseItem.client_name}
                          </Typography>
                          <Typography variant="h5" color="text.primary">
                            {caseItem.name}
                          </Typography>
                        </Stack>
                        <Stack gap={4}>
                          <Stack gap={2} direction="row" alignItems="center">
                            <CheckCircle
                              fontSize="small"
                              sx={{
                                color: "#ACE0DD",
                              }}
                            />
                            <Typography
                              variant="body1"
                              color="text.primary"
                              alignItems="center"
                            >
                              {" "}
                              {caseItem.first_topic}
                            </Typography>
                          </Stack>
                          <Stack gap={2} direction="row" alignItems="center">
                            <CheckCircle
                              fontSize="small"
                              sx={{
                                color: "#ACE0DD",
                              }}
                            />
                            <Typography variant="body1" color="text.primary">
                              {caseItem.second_topic}
                            </Typography>{" "}
                          </Stack>
                          {caseItem.third_topic && (
                            <Stack gap={2} direction="row" alignItems="center">
                              <CheckCircle
                                fontSize="small"
                                sx={{
                                  color: "#ACE0DD",
                                }}
                              />
                              <Typography variant="body1" color="text.primary">
                                {caseItem.third_topic}
                              </Typography>
                            </Stack>
                          )}{" "}
                          {caseItem.fourth_topic && (
                            <Stack gap={2} direction="row" alignItems="center">
                              <CheckCircle
                                fontSize="small"
                                sx={{
                                  color: "#ACE0DD",
                                }}
                              />
                              <Typography variant="body1" color="text.primary">
                                {caseItem.fourth_topic}
                              </Typography>
                            </Stack>
                          )}
                        </Stack>
                      </Stack>
                    </Stack>
                  ) : (
                    <Grid container spacing={2} direction="column">
                      {[...Array(5)].map((item) => (
                        <Grid key={item} item md={3} lg={2}>
                          <Skeleton
                            variant="rectangular"
                            width={400}
                            height={40}
                            sx={{ borderRadius: 2 }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Stack>
              )}
            </Stack>
          ))}
        </Stack>
        <Box>
          <IconButton
            onClick={() => {
              handleCaseToShow("next");
            }}
            sx={{ borderRadius: 1, bgcolor: "#EAEFF0" }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CaseViewer;
