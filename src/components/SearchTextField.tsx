import { ChangeEvent } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import IconButton from '@mui/material/IconButton';

interface SearchTextFieldProps {
  searchText: string;
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchFunction: () => void;
}

export const SearchTextField: React.FC<SearchTextFieldProps> = (props) => {
  return(
    <FormControl variant="standard" fullWidth >
      <TextField
        size="small"
        variant="outlined"
        value={props.searchText}
        onChange={props.handleChangeSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary" aria-label="upload picture" component="label" onClick={props.searchFunction}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  )
}