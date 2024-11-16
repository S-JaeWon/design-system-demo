import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";

// * Next.js의 layout.tsx와 비슷한 개념 => 공통 Preview 적용.
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      themes: {
        default: theme,
      },
      defaultTheme: "default",
    }),
  ],
};

export default preview;
