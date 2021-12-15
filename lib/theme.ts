import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      backgroundColor: "#4158D0",
      backgroundImage:
        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    },
    ":not(.chakra-dont-set-collapse) > .chakra-collapse": {
      overflow: "auto !important",
    },
    "&::-webkit-scrollbar": {
      width: "5px",
      height: "5px",
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
