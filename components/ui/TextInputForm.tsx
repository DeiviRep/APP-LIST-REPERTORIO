import React from "react";
import {
  useForm,
  Controller,
  FieldValues,
  Path,
  Control,
  RegisterOptions,
  PathValue,
} from "react-hook-form";
import { TextInput, Button, View, Text } from "react-native";

type FormInputTextProps<T extends FieldValues> = {
  id: string;
  name: Path<T>;
  control: Control<T, object>;
  label: string;
  size?: "small" | "medium";
  // type?: InputHTMLAttributes<unknown>['type']
  rules?: RegisterOptions;
  disabled?: boolean;
  // onChange?: StandardInputProps['onChange']
  // InputProps?: Partial<OutlinedInputProps>
  // inputProps?: InputBaseProps['inputProps']
  onEnter?: () => void;
  clearable?: boolean;
  variant?: "standard" | "outlined" | "filled";
  rows?: number;
  multiline?: boolean;
  bgcolor?: string;
  // labelVariant?: Variant
  placeholder?: string;
};

export const TextInputForm = <T extends FieldValues>({
  id,
  name,
  control,
  label,
  size = "small",
  //   type,
  rules,
  disabled,
  //   onChange,
  //   InputProps,
  //   inputProps,
  onEnter,
  clearable,
  variant,
  rows = 1,
  multiline = false,
  bgcolor,
  //   labelVariant = "subtitle2",
  placeholder = "",
}: FormInputTextProps<T>) => {
  return (
    <View>
      <Text style={{ color: "text.primary" }}>{label}</Text>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <View>
            <TextInput
              // onBlur={onBlur}
              // onChangeText={(value) => onChange(value)}
              onChangeText={(event) => {
                //   if (onChange) {
                //     onChange(event);
                //   }
                field.onChange(event);
              }}
              value={field.value}
            />
            {error && <Text>This field is required.</Text>}
          </View>
        )}
        // rules={{ required: true }}
        defaultValue={"" as PathValue<T, Path<T>>}
        rules={rules}
      />
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};
