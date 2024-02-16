// want to have menu that moves as you scroll on page
import React, { useEffect, useState } from 'react';
import { PiArrowCircleUpDuotone } from "react-icons/pi";
import { Box, Button } from '@chakra-ui/react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <Box
                    onClick={scrollToTop}
                    position='fixed'
                    bottom='20px'
                    right={['16px', '84px']}
                    zIndex={3}>
                    <Button
                        variant='outline'
                        size={'sm'}
                        rightIcon={<PiArrowCircleUpDuotone />}
                        colorScheme='telegram'
                    >
                        Scroll To Top
                    </Button>
                </Box>
            )}
        </>
    );
}
