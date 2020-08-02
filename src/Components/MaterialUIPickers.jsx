import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";


const MaterialUIPickers = (props) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="flex-end">
        <KeyboardDatePicker 
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={props.selectedDate}
          onChange={props.handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default  MaterialUIPickers;