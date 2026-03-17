import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                color: '#0c2',
                height: 4,
                padding: '13px 0',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '2px solid  #0c2',
                    '&:before': {
                        content: '""',
                        id: 'thumb-dot',
                        width: 6,
                        height: 6,
                        backgroundColor: '#0c2',
                        boxShadow: 'none',
                    }
                },
                '& .MuiSlider-track': {
                    border: 'none',
                    backgroundColor: '#0c2',
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                    opacity: 1,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
