import PropTypes from "prop-types";
// @mui
import { MenuItem, TextField } from "@mui/material";

// ----------------------------------------------------------------------

BlogPostsSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func,
};

export default function BlogPostsSort({ options, onSort }: any) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
