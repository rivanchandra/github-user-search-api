import { ChangeEvent } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';

import IconButton from '@mui/material/IconButton';

interface SearchTextFieldProps {
  searchText: string;
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchFunction: () => void;
  searchLoading: boolean;
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
              {props.searchLoading?
                <CircularProgress size={18}/>
              :
                <IconButton color="primary" aria-label="upload picture" component="label" onClick={props.searchFunction}>
                  <SearchIcon />
                </IconButton>
              }
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  )
}