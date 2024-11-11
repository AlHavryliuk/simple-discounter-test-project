import { Flex, Text } from "theme-ui";

type TCalculatorInput = {
  title: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CalculatorInput = ({ title, value, setValue }: TCalculatorInput) => {
  return (
    <Flex sx={{ gap: 2 }}>
      <Text>{title}</Text>
      <input
        min={0}
        type="text"
        value={value}
        onChange={setValue}
        placeholder="0"
      />
    </Flex>
  );
};

export default CalculatorInput;
