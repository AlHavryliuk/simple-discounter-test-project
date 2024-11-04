/** @jsxImportSource theme-ui */

import { ThemeUIProvider } from "theme-ui";
import { theme } from "./helpers/theme";
import Discount from "./pages/Discount";

export const App = () => (
  <ThemeUIProvider theme={theme}>
    <Discount />
  </ThemeUIProvider>
);

export default App;
