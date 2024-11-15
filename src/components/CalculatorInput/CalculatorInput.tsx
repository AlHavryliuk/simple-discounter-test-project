import IMask from "imask";
import { useEffect, useRef } from "react";
import { Flex, Input, Text } from "theme-ui";

type TCalculatorInput = {
  title: string;
  setValue: (value: string) => void;
};

const CalculatorInput = ({ title, setValue }: TCalculatorInput) => {
  const element = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!element.current) return;

    const maskOptions = {
      mask: Number,
      min: 0,
      thousandsSeparator: " ",
    };

    const createdMask = IMask(element.current!, maskOptions);

    createdMask.on("accept", () => {
      setValue(createdMask.unmaskedValue);
    });

    return () => {
      createdMask.destroy();
    };
  }, [element, setValue]);

  return (
    <Flex sx={{ gap: 2, alignItems: "center" }}>
      <Text sx={{ fontSize: "18px" }}>{title}</Text>
      <Input
        ref={element}
        type="text"
        placeholder="0"
        sx={{
          border: "none",
          borderBottom: "1px solid lightgray",
          borderRadius: "0px",
          px: "16px",
          width: "fit-content",
        }}
      />
    </Flex>
  );
};

export default CalculatorInput;
