import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  cursor:pointer;

  > img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const PlatformLogo = `/images/logo${useColorModeValue('', '')}.png`
    return (
        <Link>
            <LogoBox>
                <img
                    src={PlatformLogo}
                    width={20}
                    height={20}
                />
                <Text
                    color={useColorModeValue('black', 'white.800')}
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
