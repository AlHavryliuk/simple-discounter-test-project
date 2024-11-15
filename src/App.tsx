/** @jsxImportSource theme-ui */

import { Box, ThemeUIProvider } from "theme-ui";
import { theme } from "./helpers/theme";
import Calculator from "./pages/Calculator";

export const App = () => (
  <ThemeUIProvider theme={theme}>
    <Box sx={{ width: "100%", height: "100vh", bg: "#fffcfc" }}>
      <Calculator />
    </Box>
  </ThemeUIProvider>
);

export default App;
