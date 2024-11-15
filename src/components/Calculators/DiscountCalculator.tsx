import { useMemo, useState } from "react";
import { Flex, Text } from "theme-ui";
import CalculatorInput from "../CalculatorInput/CalculatorInput";

const DiscountCalculator = () => {
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [desiredPrice, setDesiredPrice] = useState<string>("");

  const discountPercentage = useMemo(() => {
    const total = parseFloat(totalPrice.replace(/\s/g, ""));
    const desired = parseFloat(desiredPrice.replace(/\s/g, ""));

    if (isNaN(desired) || desired <= 0 || isNaN(total) || total <= 0) {
      return null;
    }
    if (desired > total) {
      return null;
    }

    const result = ((total - desired) / total) * 100;
    return result;
  }, [desiredPrice, totalPrice]);

  const resultPrice = useMemo(() => {
    const total = parseFloat(totalPrice.replace(/\s/g, ""));
    if (discountPercentage === null) return "";
    const discountValue = +discountPercentage.toFixed(2) / 100;
    const discount = total * discountValue;

    return total - discount;
  }, [totalPrice, discountPercentage]);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        gap: "24px",
        width: ["100%", null, "600px"],
        borderRadius: "8px",
        bg: "white",
      }}
    >
      <Flex sx={{ flexDirection: "column", gap: "8px" }}>
        <Text as="h2" sx={{ my: "0", pb: "16px" }}>
          Калькулятор знижок
        </Text>

        <CalculatorInput
          title="Початкова ціна курса:"
          setValue={setTotalPrice}
        />
        <CalculatorInput
          title="Бажана ціна курса:"
          setValue={setDesiredPrice}
        />
      </Flex>

      <Flex sx={{ height: "1px", width: "100%", bg: "lightgray" }}></Flex>

      <Flex sx={{ flexDirection: "column", gap: "8px", fontSize: "18px" }}>
        <Text as="h2" sx={{ my: "0", pb: "16px" }}>
          Результати:
        </Text>

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
    </Flex>
  );
};

export default DiscountCalculator;
