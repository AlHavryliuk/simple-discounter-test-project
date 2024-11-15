import { useMemo, useState } from "react";
import { Box, Flex } from "theme-ui";
import CalculatorInput from "../CalculatorInput/CalculatorInput";

const ClassicCalculator = () => {
  const [price, setPrice] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");

  const result = useMemo(() => {
    const priceValue = parseFloat(price.replace(/\s/g, ""));
    const discountValue = parseFloat(discount.replace(/\s/g, ""));

    if (isNaN(priceValue) || isNaN(discountValue)) return 0;

    return priceValue * (1 - discountValue / 100);
  }, [price, discount]);

  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "8px",
        maxWidth: "500px",
      }}
    >
      <h2>Класичний калькулятор</h2>
      <Flex sx={{ gap: "8px", flexDirection: "column" }}>
        <CalculatorInput title="Ціна:" setValue={setPrice} />
        <CalculatorInput title="Знижка (%):" setValue={setDiscount} />
      </Flex>

      <h2>Ціна зі знижкою: {result} грн.</h2>
    </Box>
  );
};

export default ClassicCalculator;
