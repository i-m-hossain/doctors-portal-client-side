import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

const TestimonialItem = ({ testimonial }) => {
    return (
        <Card>
            <CardContent style={{ textAlign: "left" }}>
                <Typography variant="body2" color="text.secondary">
                    {testimonial.comment}
                </Typography>
            </CardContent>
            <CardActions sx={{ pl: 2 }}>
                <Avatar alt="Remy Sharp" src={testimonial.avatar} />
                <Box style={{ textAlign: "left" }}>
                    <Typography gutterBottom variant="p" component="div">
                        {testimonial.name}
                    </Typography>
                    <Typography gutterBottom variant="p" sx={{ color: 'text.disabled' }} component="div">
                        {testimonial.address}
                    </Typography>

                </Box>
            </CardActions>
        </Card>
    );
};

export default TestimonialItem;