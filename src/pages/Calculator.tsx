import { Flex } from "theme-ui";
import DiscountCalculator from "../components/Calculators/DiscountCalculator";
import ClassicCalculator from "../components/Calculators/ClassicCalculator";

const Calculator = () => {
  return (
    <Flex
      sx={{
        p: "16px",
        gap: "12px",
        flexDirection: ["column", "row"],

        "&>div": {
          boxShadow: `0px 0px 6px 0px rgba(0, 0, 0, 0.12)`,
          p: "32px",
        },
      }}
    >
      <DiscountCalculator />
      <ClassicCalculator />
    </Flex>
  );
};

export default Calculator;
