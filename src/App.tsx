/** @jsxImportSource theme-ui */

import { ThemeUIProvider } from "theme-ui";
import { theme } from "./helpers/theme";
import Calculator from "./pages/Calculator";

export const App = () => (
  <ThemeUIProvider theme={theme}>
    <Calculator />
  </ThemeUIProvider>
);

export default App;
