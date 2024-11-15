import { Flex } from "theme-ui";
import DiscountCalculator from "../components/Calculators/DiscountCalculator";
import ClassicCalculator from "../components/Calculators/ClassicCalculator";
import CursorTrail from "../components/CursorTrail/CursorTrail";

const Calculator = () => {
  return (
    <Flex
      sx={{
        p: "16px",
        gap: "12px",
        flexDirection: ["column", "row"],
        justifyContent: "center",

        "&>.calculator": {
          boxShadow: `0px 0px 6px 0px rgba(0, 0, 0, 0.12)`,
          p: "32px",
          zIndex: 1000,
        },
      }}
    >
      <DiscountCalculator />
      <ClassicCalculator />
      <CursorTrail />
    </Flex>
  );
};

export default Calculator;
