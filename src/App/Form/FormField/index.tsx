import { PropsWithChildren } from "react";
import { Paragraph } from "../Paragraph";
import { Field, Text } from "./styled";

type FormFieldProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  text: string;
  asSelect: boolean;
  required: boolean;
};

const FormField = ({
  children,
  onChange,
  value,
  text,
  asSelect,
  required,
}: PropsWithChildren<FormFieldProps>) => {
  return (
    <Paragraph>
      <label>
        <Text>{text}</Text>
        <Field
          as={asSelect ? "select" : "input"}
          required={required}
          type="number"
          step="0.01"
          value={value}
          onChange={onChange}
        >
          {children}
        </Field>
      </label>
    </Paragraph>
  );
};

export default FormField;
