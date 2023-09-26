import { useEffect, useState} from 'react';
import { Box, Stack, Typography} from '@mui/material'

import { FethFromAPI } from '../utils/FethFromAPI'; 

import { LeftSide, Videos} from './';



const Feed = () => {
  const [selectedcategory, setselectedcategory] = useState('New');
  const [videos, setvideos] = useState ([]);

  useEffect(() => {
    FethFromAPI(`search?part=snippet&q=${selectedcategory}`)
    .then( (data) => setvideos(data.items))
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'},
    borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2}}}>
     <LeftSide
     selectedcategory=
     {selectedcategory}
     setselectedcategory=
     {setselectedcategory}
     
     />

      <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
        copyright 2023
      </Typography>
      </Box>

      <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
          {selectedcategory}
          <span style={{ color: '#f31503'}}>
            Video
          </span>
        </Typography>
        <Videos video={videos} />
      </Box>

    </Stack>
  )
}

export default Feed