import { useMemo, useState } from "react";
import { Box, Flex, Text } from "theme-ui";

const Discount = () => {
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [desiredPrice, setDesiredPrice] = useState<string>("");

  const discount = useMemo(() => {
    const total = parseFloat(totalPrice.replace(/\s/g, "")); 
    const desired = parseFloat(desiredPrice.replace(/\s/g, "")); 

    if (isNaN(desired) || desired <= 0 || isNaN(total) || total <= 0) {
      return "unknown";
    }
    if (desired > total) {
      return "Desired price is greater than total";
    }

    const result = ((total - desired) / total) * 100;
    return `${result.toFixed(2)}%`;
  }, [desiredPrice, totalPrice]);

  const formatNumber = (value: string) => {
    return value.replace(/\s/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
  };

  const handleTotalPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalPrice(formatNumber(e.target.value)); 
  };

  const handleDesiredPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesiredPrice(formatNumber(e.target.value)); 
  };

  return (
    <Flex sx={{ m: "20px", p: "16px", flexDirection: "column", gap: "8px" }}>
      <h2>Know the discount</h2>
      <Flex sx={{ gap: 2 }}>
        <Text>Enter the cost of the course:</Text>
        <input
          min={0}
          type="text" 
          value={totalPrice}
          onChange={handleTotalPriceChange}
          placeholder="0"
        />
      </Flex>
      <Flex sx={{ gap: 2 }}>
        <Text>Enter the desired price:</Text>
        <input
          min={0}
          type="text" 
          value={desiredPrice}
          onChange={handleDesiredPriceChange}
          placeholder="0"
        />
      </Flex>
      <Box>
        <Text>
          Percentage of discount: <b>{discount}</b>
        </Text>
      </Box>
    </Flex>
  );
};

export default Discount;
