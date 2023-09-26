import { Stack } from '@mui/material';
import { categories } from '../utils/Constant'; 
import { Category } from '@mui/icons-material';



const LeftSide = ({selectedcategory, setselectedcategory}) => 
   (
    <Stack
    direction='row'
    sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%'},
        flexDirection: { md: 'column'}
    }}
    >
        {categories.map((Category) =>(
            <button className='category-btn'
             onClick={() => setselectedcategory (Category.name)}
            style={{
                background: Category.name === selectedcategory && '#fc1503',
                color: 'white'
            }}
            key={Category.name}
            >
                <span style={{ color: Category.name === selectedcategory ? 'white' : 'red', marginRight: '15px'}}>{Category.icon}</span>
                <span style={{ opacity: Category.name === selectedcategory ? '1' : '0.8'}}>{Category.name}</span>
            </button>
        ))}
    </Stack>
  )


export default LeftSide