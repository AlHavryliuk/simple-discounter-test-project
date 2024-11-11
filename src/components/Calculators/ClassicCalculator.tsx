import { useMemo, useState } from "react";
import { Box, Flex } from "theme-ui";
import CalculatorInput from "../CalculatorInput/CalculatorInput";

const ClassicCalculator = () => {
  const [price, setPrice] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");

  const formatNumber = (value: string) => {
    return value.replace(/\s/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(formatNumber(e.target.value));
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(formatNumber(e.target.value));
  };

  const result = useMemo(() => {
    const priceValue = parseFloat(price.replace(/\s/g, ""));
    const discountValue = parseFloat(discount.replace(/\s/g, ""));
    if (isNaN(priceValue) || isNaN(discountValue)) return 0;

    // Calculate the discounted price
    return priceValue * (1 - discountValue / 100);
  }, [price, discount]);

  return (
    <Box
      sx={{
        background: "lightgray",
        borderRadius: "8px",
        p: "16px",
        width: "500px",
      }}
    >
      <h2>Класичний калькулятор</h2>
      <Flex sx={{ gap: "8px", flexDirection: "column" }}>
        <CalculatorInput
          title="Ціна:"
          value={price}
          setValue={handlePriceChange}
        />
        <CalculatorInput
          title="Знижка (%):"
          value={discount}
          setValue={handleDiscountChange}
        />
      </Flex>

      <h2>Ціна зі знижкою: {result} грн.</h2>
    </Box>
  );
};

export default ClassicCalculator;
