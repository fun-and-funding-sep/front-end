import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CheckIcon from '@mui/icons-material/Check';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Button, Card, CardContent, Chip, CircularProgress, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AiFillProject } from "react-icons/ai";
import Background from "../../assets/images/background-pattern.png";
import Confetti from "../../assets/images/confetti-background.png";
import Devices from '../../assets/images/devices.png';
import Logo from "../../assets/images/logo-text.png";
import BannerCarousel from '../../components/BannerCarousel';
import HomeFundingCardList from '../../components/HomeFundingCardList';
import HomeMarketingCardList from '../../components/HomeMarketingCardList';
import TopBackerList from '../../components/TopBackerList';
import TopTestimonialList from '../../components/TopTestimonialList';
import './index.css';

function HomePage() {
    const [mailSending, isMailSending] = useState(false);
    const [sendingSuccess, isSendingSuccess] = useState(false);
    const handleSendEmail = () => {
        isMailSending(true);
        setTimeout(() => {
            isMailSending(false);
            isSendingSuccess(true);
        }, 5000);
    }
    return (
        <div className='mt-[-6.4rem]'>
            <BannerCarousel />
            <div className='flex flex-col justify-center px-[6rem] pt-[7.5rem] pb-[3.75rem]'>
                <div className='flex justify-between gap-[4rem] mb-[2.5rem]'>
                    <img
                        src={Devices}
                        alt="devices"
                        style={{ width: "40.25rem", height: "29.625rem" }}
                    />
                    <div>
                        <Typography sx={{ fontWeight: '700', marginBottom: '3.75rem', fontSize: '2.5rem', color: '#2F3645' }}>
                            <span style={{ color: '#1BAA64' }}>Available</span> for purchasing
                            and crowdfunding on <span style={{ color: '#1BAA64' }}>BOTH</span> PC <span style={{ color: '#1BAA64' }}>AND</span> mobile!
                        </Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: '1.5rem', color: '#2F3645' }}>
                            Whether you're on PC or mobile, our platform offers a <span style={{ color: '#1BAA64', fontWeight: 600 }}>seamless,
                                user-friendly</span> interface to support or raise funds for your next big game project.
                        </Typography>
                    </div>
                </div>
                <Paper elevation={2} sx={{ backgroundColor: '#F5F7F8', px: '4rem', py: '2rem', mx: '18.125rem', boxShadow: '1rem' }}>
                    <Typography sx={{ fontWeight: '400', fontSize: '1.5rem', color: '#2F3645', textAlign: 'center', mb: '1.5rem' }}>
                        Discover guides on calling for investment and our policy straight to your inbox
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', borderRadius: '0.625rem', width: '100%', backgroundColor: '#EAEAEA' }}>
                        <TextField
                            placeholder="Enter your email here"
                            fullWidth
                            variant="standard"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineIcon style={{ color: '#2F3645', marginRight: '1.25rem', marginLeft: '1.5rem', height: '3.875rem' }} />
                                        </InputAdornment>
                                    ),
                                    disableUnderline: true,
                                    style: {
                                        height: '3.875rem',
                                        fontSize: '1.25rem',
                                        paddingRight: '1.25rem'
                                    }
                                },
                            }}
                            sx={{ height: '3.875rem' }}
                        />
                        <Button
                            sx={{
                                borderTopRightRadius: '0.625rem',
                                borderBottomRightRadius: '0.625rem',
                                borderTopLeftRadius: '0',
                                borderBottomLeftRadius: '0',
                                textTransform: 'none',
                                fontSize: '1.5rem',
                                padding: '0.813rem 2.25rem',
                                width: '8.375rem',
                                fontWeight: '600',
                                height: '3.875rem',
                                backgroundColor: '#1BAA64',
                                boxShadow: 'none',
                                color: '#F5F7F8'
                            }}
                            onClick={() => handleSendEmail()}
                            disabled={mailSending || sendingSuccess}
                        >
                            {mailSending ? (
                                <CircularProgress size={24} sx={{ color: '#F5F7F8' }} />
                            ) : sendingSuccess ? (
                                <CheckIcon sx={{ color: '#F5F7F8', fontSize: '2rem' }} />
                            ) : (
                                'Send'
                            )}
                        </Button>
                    </div>
                </Paper>
            </div>
            <div className='flex flex-col justify-center px-[6rem] py-[3.75rem] '>
                <Typography sx={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '2.5rem', color: '#2F3645', textAlign: 'center' }}>
                    Latest popular crowdfunding projects
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '1.5rem', color: '#2F3645', textAlign: 'center', marginBottom: '4.5rem' }}>
                    Support the latest crowdfunding game and help bring the next big hit to life!
                </Typography>
                <HomeFundingCardList />
                <Button
                    sx={{
                        borderRadius: '0.625rem',
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        padding: '0.813rem 3.5rem',
                        width: 'fit-content',
                        fontWeight: '600',
                        height: '3.875rem',
                        backgroundColor: '#1BAA64',
                        boxShadow: 'none',
                        color: '#F5F7F8',
                        marginTop: '4.5rem',
                        mx: 'auto'
                    }}
                    endIcon={<ArrowForwardOutlinedIcon sx={{ fontSize: '1.5rem !important', marginLeft: '0.6rem', strokeWidth: '1', stroke: '#F5F7F8' }} />}
                >
                    See more opportunities
                </Button>
            </div>
            <div className='flex flex-col justify-center px-[6rem] py-[3.75rem]'>
                <Typography sx={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '2.5rem', color: '#2F3645', textAlign: 'center' }}>
                    Popular selling games
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '1.5rem', color: '#2F3645', textAlign: 'center', marginBottom: '4.5rem' }}>
                    Discover and buy the latest games directly from our platform!
                </Typography>
                <HomeMarketingCardList />
                <Button
                    sx={{
                        borderRadius: '0.625rem',
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        padding: '0.813rem 3.5rem',
                        width: 'fit-content',
                        fontWeight: '600',
                        height: '3.875rem',
                        backgroundColor: '#1BAA64',
                        boxShadow: 'none',
                        color: '#F5F7F8',
                        marginTop: '4.5rem',
                        mx: 'auto'
                    }}
                    endIcon={<ArrowForwardOutlinedIcon sx={{ fontSize: '1.5rem !important', marginLeft: '0.6rem', strokeWidth: '1', stroke: '#F5F7F8' }} />}
                >
                    See more games
                </Button>
            </div>
            <div className='flex flex-col mt-[3.75rem] h-[56rem] justify-between bg-[#F5F7F8] relative pb-[3.75rem]'>
                <div className="achievement-background">
                    <img src={Confetti} alt="footer" border="0" style={{ height: '58rem', objectFit: 'cover', width: '100%' }} />
                    <div className="achievement-overlay"></div>
                </div>
                <div className='z-10'>
                    <Typography sx={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '2.5rem', color: '#2F3645', textAlign: 'center' }}>
                        Take a look at our statistics!
                    </Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '1.5rem', color: '#2F3645', textAlign: 'center', marginBottom: '4.5rem', px: '18rem' }}>
                        Join us as we fund groundbreaking games, grow our player community, and reach new crowdfunding milestones!
                    </Typography>
                    <div className='flex flex-row justify-between gap-[2rem] mt-[4.5rem] px-[6.875rem]'>
                        <Card sx={{ width: '21.063rem', borderRadius: '3.125rem !important', height: 'fit-content', backgroundColor: '#F5F7F8' }}>
                            <CardContent sx={{ py: '2rem !important', px: '2.5rem !important' }}>
                                <Chip label="Platform users" sx={{ borderRadius: '0.313rem', fontSize: '1rem', mb: '1rem' }} />
                                <Typography sx={{ fontWeight: '700', marginBottom: '1rem', fontSize: '3.5rem', color: '#2F3645' }}>
                                    300+
                                </Typography>
                                <div className='flex justify-between align-bottom'>
                                    <Typography sx={{ fontWeight: '500', fontSize: '1rem', color: '#2F3645', textAlign: 'left', alignSelf: 'flex-end' }}>
                                        Next target: <br /><span style={{ fontWeight: '700' }}>1000 users</span>
                                    </Typography>
                                    <PeopleAltIcon style={{ color: '#2F3645', fontSize: '4rem' }} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ width: '30.125rem', borderRadius: '3.125rem !important', mt: '10rem', height: 'fit-content', backgroundColor: '#F5F7F8' }}>
                            <CardContent sx={{ py: '2rem !important', px: '2.5rem !important' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Chip label="Platform revenue" sx={{ borderRadius: '0.313rem', fontSize: '1rem', mb: '1rem', fontWeight: '600' }} />
                                </div>
                                <Typography sx={{ fontWeight: '500', fontSize: '1rem', color: '#2F3645', textAlign: 'center' }}>
                                    VND
                                </Typography>
                                <Typography sx={{ fontWeight: '700', marginBottom: '1rem', fontSize: '3.5rem', color: '#2F3645', textAlign: 'center' }}>
                                    10.000.000
                                </Typography>
                                <Typography sx={{ fontWeight: '500', fontSize: '1.25rem', color: '#2F3645', textAlign: 'center', alignSelf: 'flex-end' }}>
                                    Next target: <span style={{ fontWeight: '700' }}>100.000.000 VND</span>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ width: '21.063rem', borderRadius: '3.125rem !important', height: 'fit-content', backgroundColor: '#F5F7F8' }}>
                            <CardContent sx={{ py: '2rem !important', px: '2.5rem !important' }}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Chip label="Platform projects" sx={{ borderRadius: '0.313rem', fontSize: '1rem', mb: '1rem' }} />
                                </div>
                                <Typography sx={{ fontWeight: '700', marginBottom: '1rem', fontSize: '3.5rem', color: '#2F3645', textAlign: 'right' }}>
                                    300+
                                </Typography>
                                <div className='flex justify-between align-bottom'>
                                    <AiFillProject style={{ color: '#2F3645', fontSize: '4rem' }} />
                                    <Typography sx={{ fontWeight: '500', fontSize: '1rem', color: '#2F3645', textAlign: 'right', alignSelf: 'flex-end' }}>
                                        Next target: <br /><span style={{ fontWeight: '700' }}>1000 projects</span>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className='mx-auto z-10'>
                    <img
                        src={Logo}
                        alt="logo"
                        style={{ width: "15.25rem", height: "3.2rem", marginBottom: '1rem' }}
                    />
                </div>
            </div>
            <div className='flex flex-col justify-center mb-[3.75rem] h-[22.125rem] bg-[#2F3645] relative'>
                <div className="mission-background">
                    <img src={Background} alt="footer" border="0" style={{ height: '22.125rem', objectFit: 'cover', width: '100%' }} />
                    <div className="mission-overlay"></div>
                </div>
                <Typography sx={{ fontWeight: '700', marginBottom: '2rem', fontSize: '2.5rem', color: '#F5F7F8', zIndex: 2, mx: '6rem', textAlign: 'center' }}>
                    "Our mission is to <span style={{ color: '#1BAA64' }}>EMPOWER</span> creators and gamers to discover, fund, and purchase of innovative games."
                </Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '1.5rem', color: '#F5F7F8', zIndex: 2, mx: '6rem', textAlign: 'center' }}>
                    - The Fun & Funding Team -
                </Typography>
            </div>
            <div className='flex flex-col justify-center px-[6rem] py-[3.75rem]'>
                <Typography sx={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '2.5rem', color: '#2F3645', textAlign: 'center' }}>
                    Our top backers
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '1.5rem', color: '#2F3645', textAlign: 'center', marginBottom: '4.5rem' }}>
                    Meet our top backers: the champions fueling our project's success!
                </Typography>
                <TopBackerList />
            </div>
            <div className='flex flex-col justify-center px-[6rem] py-[3.75rem]'>
                <Typography sx={{ fontWeight: '700', marginBottom: '4.5rem', fontSize: '2.5rem', color: '#2F3645', textAlign: 'center' }}>
                    Get your trust from our users
                </Typography>
                <TopTestimonialList />
            </div>
        </div >
    )
}

export default HomePage