import { FacebookRounded } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { LanguageRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';

function SocialMediaIcons({ link }) {
    const [ghover, setGhover] = useState(false);
    const [fhover, setFhover] = useState(false);
    const [ihover, setIhover] = useState(false);
    const [lhover, setLhover] = useState(false);

    return (
        <>
            <div className="grid gap-3 grid-cols-4 h-[56px] w-[180px]">
                <IconButton
                    onMouseEnter={() => {
                        setGhover(true);
                    }}
                    onMouseLeave={() => {
                        setGhover(false);
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <a href={link.website} target="_blank" rel="nonreferrer">
                        <LanguageRounded
                            style={{
                                color: ghover ? '#242254' : '#B81342',
                                fontSize: 42,
                            }}
                        />
                    </a>
                </IconButton>
                <IconButton
                    onMouseEnter={() => {
                        setFhover(true);
                    }}
                    onMouseLeave={() => {
                        setFhover(false);
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <a
                        href={link.facebookLink}
                        target="_blank"
                        rel="nonreferrer"
                    >
                        <FacebookRounded
                            style={{
                                color: fhover ? '#242254' : '#B81342',
                                fontSize: 42,
                            }}
                        />
                    </a>
                </IconButton>
                <IconButton
                    onMouseEnter={() => {
                        setIhover(true);
                    }}
                    onMouseLeave={() => {
                        setIhover(false);
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <a
                        href={link.instagramLink}
                        target="_blank"
                        rel="nonreferrer"
                    >
                        <Instagram
                            style={{
                                color: ihover ? '#242254' : '#B81342',
                                fontSize: 42,
                            }}
                        />
                    </a>
                </IconButton>
                <IconButton
                    onMouseEnter={() => {
                        setLhover(true);
                    }}
                    onMouseLeave={() => {
                        setLhover(false);
                    }}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <a
                        href={link.linkedinLink}
                        target="_blank"
                        rel="nonreferrer"
                    >
                        <LinkedIn
                            style={{
                                color: lhover ? '#242254' : '#B81342',
                                fontSize: 42,
                            }}
                        />
                    </a>
                </IconButton>
            </div>
        </>
    );
}

export default SocialMediaIcons;
