import * as React from 'react';
import Box from '@mui/material/Box';
import '../assets/css/style.scss'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Journey from './journey';



export default function Banner() {
  return (
    <div className='container'>
      <div className='header'>
      <Typography variant="h1" gutterBottom className='title'>
          Bora de Metrô?
          <Typography variant="h5" gutterBottom className='description'>
        Calcule o melhor trajeto até seu destino
      </Typography>
        </Typography>
        
       
      </div>
      <div className='form'>
        <Autocomplete
          className='inputEmbarque'
      disablePortal
          id="combo-box-demo"
      options={top100Films}
          sx={{ width: 300, borderColor:'#8cffcb', color:'#8cffcb' }}
      renderInput={(params) => <TextField color="warning" {...params} label="Embarque" />}
        />
        
        <Autocomplete
          className='inputDesembarque'
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Desembarque" />}
        />
        
        <Button variant="outlined">Buscar</Button>
      </div>
      <div className='journey'>
      <Journey />
      </div>
  
    </div>
  );


}

const top100Films = [
  { label: 'Patriarca', year: 1994 },
  { label: 'Consolação', year: 1994 }
]

