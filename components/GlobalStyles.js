import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&display=swap');
        body {
          background-color: ${theme.Colors.backgroundColor};
          font-family: ${theme.Fonts.primaryFont};
        }
      `}
    />
  );
}
