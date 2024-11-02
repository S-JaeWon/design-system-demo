import { componentToken, referenceToken, systemToken } from "./colors";

/** styled-components, tailwindcss에서 import하여 사용. */
export const theme = {
  colors: {
    ref: referenceToken,
    sys: systemToken,
    comp: componentToken,
  },
  font: {},
};
