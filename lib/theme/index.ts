import { componentToken, referenceToken, systemToken } from "./colors";
import { typography } from "./typography";

/** styled-components, tailwindcss에서 import하여 사용. */
export const theme = {
  colors: {
    ref: referenceToken,
    sys: systemToken,
    comp: componentToken,
  },
  fontSize: typography,
};
