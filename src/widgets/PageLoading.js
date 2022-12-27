import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useRecoilValue } from 'recoil';
import { showLoading } from '../RecoilStates';

export default function PageLoading() {
    const open = useRecoilValue(showLoading)
    console.log(open)

  return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        //open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  );
}
