import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [zoom, setZoom] = React.useState(60);

  const handleClickOpen = async () => {
   await setZoom(60);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleZoom = (status) => {
    if (status)
    {
        setZoom(zoom+10);
        return;
    }
    setZoom(zoom-10);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        height="50%"
        width="50%"

      >
        <DialogTitle id="alert-dialog-title">
          {"Image Popup"}
        </DialogTitle>
        <DialogContent>
        {console.log(props.imageUrl)}
         <img src = {props.imageUrl} width={zoom+"%"} height={zoom+"%"} alt="Popup" />

        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Close</Button>
          <Button onClick={()=>{handleZoom(true)}}>Zoom in</Button>
          <Button onClick={()=>{handleZoom(false)}} autoFocus>
            Zoom out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
