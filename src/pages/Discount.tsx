import { useMemo, useState } from "react";
import { Flex, Text } from "theme-ui";

const Discount = () => {
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [desiredPrice, setDesiredPrice] = useState<string>("");

  const discountPercentage = useMemo(() => {
    const total = parseFloat(totalPrice.replace(/\s/g, ""));
    const desired = parseFloat(desiredPrice.replace(/\s/g, ""));

    if (isNaN(desired) || desired <= 0 || isNaN(total) || total <= 0) {
      return null; // Return null for unknown discount
    }
    if (desired > total) {
      return null; // Indicate invalid case for desired price being higher
    }

    const result = ((total - desired) / total) * 100;
    return result; // Return the discount as a number
  }, [desiredPrice, totalPrice]);

  const resultPrice = useMemo(() => {
    const total = parseFloat(totalPrice.replace(/\s/g, ""));
    if (discountPercentage === null) return ""; // If discount is invalid, return empty
    const discountValue = +discountPercentage.toFixed(2) / 100;
    const discount = total * discountValue; // Calculate and format the final price

    return total - discount;
  }, [totalPrice, discountPercentage]);

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
    <Flex
      sx={{
        m: "20px",
        p: "16px",
        flexDirection: "column",
        gap: "8px",
        width: "max-content",
        borderRadius: "8px",
        bg: "#eaeaea",
      }}
    >
      <h2>Калькулятор знижок:</h2>
      <Flex sx={{ gap: 2 }}>
        <Text>Початкова ціна курса:</Text>
        <input
          min={0}
          type="text"
          value={totalPrice}
          onChange={handleTotalPriceChange}
          placeholder="0"
        />
      </Flex>
      <Flex sx={{ gap: 2 }}>
        <Text>Бажана ціна курса:</Text>
        <input
          min={0}
          type="text"
          value={desiredPrice}
          onChange={handleDesiredPriceChange}
          placeholder="0"
        />
      </Flex>
      <h2>Результати:</h2>
      <Flex sx={{ flexDirection: "column" }}>
        <Text>
          Знижка (з округленням):{" "}
          <b>
            {discountPercentage !== null
              ? discountPercentage.toFixed(2) + "%"
              : "невідомо"}
          </b>
        </Text>
        <Text>
          Фактична ціна з округленною знижкою:{" "}
          <b>{resultPrice || "невідомо"}</b>
        </Text>
        <Text sx={{ mt: "8px" }}>
          Знижка (без округлення):{" "}
          <b>
            {discountPercentage !== null
              ? discountPercentage + "%"
              : "невідомо"}
          </b>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Discount;
