import { Box, TextField } from "@mui/material"

const CustomForm = (props) => {
    return (
        <>
            {props.values.map((value, index) => (
                <Box key={index}>
                    <TextField fullWidth id={value.label} label={value.label} variant="filled"></TextField>
                </Box>
            ))}
        </>
    )
}

export default CustomForm