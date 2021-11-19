import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bgGradient: "linear(to-tl, #7928CA, #FF0080)",
    },
  },
};

const theme = extendTheme({ styles });
export default theme;
