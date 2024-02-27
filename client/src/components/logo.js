import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  cursor:pointer;

  > img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const PlatformLogo = `/favicon.png`
    return (
        <Link
            to="/exams"
        >
            <LogoBox>
                <img
                    alt="platformLogo"
                    src={PlatformLogo}
                    width={30}
                    height={30}
                />
                <Text
                    color='white.800'
                    fontWeight='bold'
                    ml={3}
                >
                    Radiology Reports
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo;
