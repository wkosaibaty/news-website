import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface PreferenceSelectProps {
  label: string;
  entities: { id: number; name: string }[];
  values: number[];
  onValuesChange: (values: number[]) => void;
}

const PreferenceSelect: React.FC<PreferenceSelectProps> = ({
  label,
  entities,
  values,
  onValuesChange,
}) => {
  const handleValuesChange = (event: SelectChangeEvent<number[]>) => {
    const {
      target: { value },
    } = event;

    if (typeof value === "string") {
      onValuesChange(value.split(",").map((v) => Number(v)));
    } else {
      onValuesChange(value);
    }
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        multiple
        value={values}
        onChange={handleValuesChange}
        input={
          <OutlinedInput label={label} sx={{ backgroundColor: "#ffffff" }} />
        }
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {entities
              ?.filter((c) => selected.find((v) => v == c.id))
              .map((c) => (
                <Chip key={c.id} label={c.name} />
              ))}
          </Box>
        )}
      >
        {entities?.map((c) => (
          <MenuItem key={c.id} value={c.id}>
            {c.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PreferenceSelect;
