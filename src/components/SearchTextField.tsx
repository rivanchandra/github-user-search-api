import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import IconButton from '@mui/material/IconButton';

export const SearchTextField = () => {
  return(
    <FormControl variant="standard" fullWidth >
      <TextField
        size="small"
        variant="outlined"
        // onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" aria-label="upload picture" component="label">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  )
}