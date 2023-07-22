import { Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, useDisclosure, Text, Stack, DrawerCloseButton, HStack, Button, ButtonGroup, Container, useBreakpointValue, Divider, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../theme/ColorModeSwitcher";
// import logoYTDark from "../../../assets/img/youtube-dark.png";
// import logoYTlight from "../../../assets/img/youtube-light.png";

function Header() {

    const sidebar = useDisclosure();

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex
            as="nav"
            role="navigation"
            pos={{ base: "fixed", lg: "fixed" }}
            bg="primary.1500"
            color="white"
            top="0"
            left="0"
            right="0"
            zIndex="sticky"
            alignSelf={'center'}
            justify="space-between"
        >
            <Container maxW={'5xl'} py={'8px'}>
                <HStack spacing="10" justify="space-between">
                    {isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <Link as={NavLink} to="/" alignSelf={'center'} _hover={{ textDecoration: 'none' }}>
                                    <Text
                                        fontSize="28px"
                                        alignSelf={'center'}
                                        fontWeight={'500'}
                                    >
                                        agylcode
                                    </Text>
                            </Link>
                            <HStack spacing="3">
                                <ButtonGroup 
                                    variant="link"
                                    colorScheme="gray" 
                                    spacing="4" 
                                    display={{
                                        base: "none",
                                        lg: "inline-flex"
                                    }}
                                >
                                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                                        <Button 
                                            key={item} 
                                            fontSize={'14px'} 
                                            _hover={{ textDecoration: 'none' }} 
                                            color={'white'} 
                                            fontWeight={'normal'}
                                        >
                                            {item}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                                <Divider orientation='vertical' h={6} bg={'white'} _dark={{ bg: 'white' }} />
                                <ColorModeSwitcher />
                            </HStack>
                        </Flex>
                    ) : (
                        <Flex justify="space-between" flex="1">
                            <Link as={NavLink} to="/" alignSelf={'center'} _hover={{ textDecoration: 'none' }}>
                                    <Text
                                        fontSize="20px"
                                        alignSelf={'center'}
                                        fontWeight={'500'}
                                    >
                                        agylcode
                                    </Text>
                            </Link>
                            <HStack spacing={1} alignSelf={'center'}>
                                <ColorModeSwitcher />
                                <Divider orientation='vertical' h={6} bg={'white'} _dark={{ bg: 'white' }} />
                                <IconButton
                                    aria-label="Menu"
                                    onClick={sidebar.onOpen}
                                    display={{
                                        base: "inline-flex",
                                        lg: "none"
                                    }}
                                    fontSize="xl"
                                    alignSelf={'center'}
                                    variant='ghost'
                                    colorScheme="blackAlpha"
                                    color={'white'}
                                    rounded={'full'}
                                    icon={<HamburgerIcon />}
                                />
                                <Drawer
                                    isOpen={sidebar.isOpen}
                                    onClose={sidebar.onClose}
                                    placement="right"
                                    size="full"
                                >
                                    <DrawerOverlay />
                                    <DrawerContent
                                        _dark={{
                                            bg: 'primary.1500',
                                        }}
                                    >
                                        <DrawerCloseButton
                                            size={'lg'}
                                        />
                                        <Stack
                                            spacing={0}
                                            align="center"
                                            justify="center"
                                            direction="column"
                                            h="100%"
                                            w="100%"
                                            p={10}
                                        >
                                            <Text>
                                                Dashboard
                                            </Text>
                                        </Stack>
                                    </DrawerContent>
                                </Drawer>
                            </HStack>
                        </Flex>
                    )}
                </HStack>
            </Container>
        </Flex>
    );
}

export default Header;