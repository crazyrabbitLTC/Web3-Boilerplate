import { routes } from '@redwoodjs/router'
import { Flex, Text, Link } from '@chakra-ui/react'
import Web3Connect from '../../components/Web3Connect'

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex flexDirection="column" height="100vh">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="1.5em"
          minHeight="3em"
        >
          <Link to={routes.home()}>
            <Text fontSize="2xl" fontWeight="bold">
              Web3 Boiler
            </Text>
          </Link>
          <Web3Connect />
        </Flex>

        <Flex
          flexDirection="column"
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="1.5em"
          minHeight="3em"
        >
          <Text fontSize="sm">
            Web3 Boiler by{' '}
            <Link href="http://www.dennisonbertram.com" isExternal>
              Dennison Bertram
            </Link>
            .
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

export default MainLayout
