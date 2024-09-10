
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Section</Typography>
                <Text variant="h5">Welcome to our blog, where insights meet inspiration. <br />
                 We're dedicated to sharing thought-provoking articles and captivating stories <br />
                 across a spectrum of topics. From the latest trends to timeless wisdom, our goal is to engage and enrich your mind. <br />
                  Let's embark on a quest to broaden horizons and spark meaningful conversations.
                </Text>
                <Text variant="h5">
                Join us on this journey of exploration and enlightenment, as we delve into the realms of knowledge and creativity.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;