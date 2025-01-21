import { IconButton, Popover } from "@mui/material";
import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

interface DateRangePickerProps {
  onSave: (value: [Dayjs | null, Dayjs | null]) => void;
  children?: ({
    handleClick,
  }: {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }) => React.ReactNode;
  defaultValue?: [Dayjs | null, Dayjs | null];
}

const actionButtonStyles = {
  minWidth: "fit-content",
  width: "fit-content",
  height: "28px",
  paddingLeft: "8px",
  paddingRight: "8px",
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onSave,
  children,
  defaultValue = [null, null],
}) => {
  const [dateRange, setDateRange] =
    useState<[Dayjs | null, Dayjs | null]>(defaultValue);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const hasDate = dateRange[0] !== null || dateRange[1] !== null;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateChange = (index: number, value: Dayjs | null) => {
    const newDateRange = [...dateRange] as [Dayjs | null, Dayjs | null];
    newDateRange[index] = value;
    setDateRange(newDateRange);
  };

  const popover = (
    <Popover
      id="date-range-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box p={2}>
          <Box display="flex" columnGap={"8px"}>
            <DatePicker
              label="Start date"
              value={dateRange[0]}
              onChange={(newValue) => handleDateChange(0, newValue)}
              slotProps={{
                textField: {
                  label: "",
                  placeholder: "Start date",
                },
              }}
            />
            <DatePicker
              label="End date"
              value={dateRange[1]}
              onChange={(newValue) => handleDateChange(1, newValue)}
              slotProps={{
                textField: {
                  label: "",
                  placeholder: "End date",
                },
              }}
            />
          </Box>
          <Stack direction="row" spacing={1} justifyContent="flex-end" mt={2}>
            <Button
              onClick={() => {
                setDateRange([null, null]);
                onSave([null, null]);
              }}
              sx={actionButtonStyles}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                onSave(dateRange);
                handleClose();
              }}
              sx={actionButtonStyles}
            >
              OK
            </Button>
          </Stack>
        </Box>
      </LocalizationProvider>
    </Popover>
  );

  return (
    <>
      {children ? (
        children({ handleClick })
      ) : (
        <IconButton onClick={handleClick}>
          <DateRangeOutlinedIcon
            sx={{
              color: hasDate ? "primary.main" : "#64748B",
            }}
          />
        </IconButton>
      )}
      {popover}
    </>
  );
};

export default DateRangePicker;
