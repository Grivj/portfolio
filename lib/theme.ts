import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      fontFamily: "Segoe UI",
      fontSize: "18px",
      bgGradient: "linear(to-tl, #7928CA, #FF0080)",
      minHeight: "100vh",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
    },
    ":not(.chakra-dont-set-collapse) > .chakra-collapse": {
      overflow: "auto !important",
    },
    "&::-webkit-scrollbar": {
      borderRadius: "10px",
      height: "10px",
      backgroundColor: `#2D2D2D`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: `#424242`,
      borderRadius: "10px",
    },
  },
};

const theme = extendTheme({ styles });
export default theme;
