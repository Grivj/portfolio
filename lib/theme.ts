import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      color: "white",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      background:
        "linear-gradient(45deg, #1f005c, #48005f, #680060, #830060, #9c155f, #b22c5e, #c5415d, #d5585c, #e36e5c, #ef865e, #f89d63, #ffb56b)",
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
