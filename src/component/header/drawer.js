import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { NavLink, Link } from "react-router-dom";
import Mode from '../mode';

export default function TemporaryDrawer() {
 const [open, setOpen] = useState(false) 

  return (
    <div>
        <IconButton onClick={() => setOpen(true)}>
            <MenuRoundedIcon className='drawer'/>
        </IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className='drawer-div'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies/popular">Popular</NavLink>
                <NavLink to="/movies/top_rated">Top Rated</NavLink>
                <NavLink to="/movies/upcoming">Upcoming</NavLink>
                <Mode/>
            </div>
           </Drawer>
    </div>
  );
}