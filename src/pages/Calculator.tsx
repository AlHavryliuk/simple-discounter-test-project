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
      }}
    >
      <DiscountCalculator />
      <ClassicCalculator />
    </Flex>
  );
};

export default Calculator;
