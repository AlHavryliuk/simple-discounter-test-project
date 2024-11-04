import { useMemo, useState } from "react";
import { Box, Flex, Text } from "theme-ui";

const Discount = () => {
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [desiredPrice, setDesiredPrice] = useState<string>("");

  const discount = useMemo(() => {
    const total = parseFloat(totalPrice);
    const desired = parseFloat(desiredPrice);

    if (isNaN(desired) || desired <= 0 || isNaN(total) || total <= 0)
      return "unknown";
    if (desired > total) return "desired price bigger than total";

    const desiredPercentage = desired / total;
    const result = (1 - desiredPercentage) * 100;
    return `${result.toFixed(2)}%`;
  }, [desiredPrice, totalPrice]);

  const handleTotalPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalPrice(e.target.value);
  };

  const handleDesiredPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesiredPrice(e.target.value);
  };

  return (
    <Flex sx={{ m: "20px", p: "16px", flexDirection: "column", gap: "4px" }}>
      <h2>Know the discount</h2>
      <Flex sx={{ gap: 2 }}>
        <Text>Enter the cost of the course:</Text>
        <input
          min={0}
          type="number"
          value={totalPrice}
          onChange={handleTotalPriceChange}
          placeholder="0"
        />
      </Flex>
      <Flex sx={{ gap: 2 }}>
        <Text>Enter the desired price:</Text>
        <input
          min={0}
          type="number"
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
