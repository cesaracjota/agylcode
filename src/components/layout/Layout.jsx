import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./Header";


function Layout({ children, image }) {

    const [isOpen, setIsOpen] = useState(() => {
        const isOpenValue = JSON.parse(localStorage.getItem("isOpen"));
        return isOpenValue ?? false;
    });

    function handleToggle() {
        setIsOpen((prevIsOpen) => {
            const newIsOpen = !prevIsOpen;
            localStorage.setItem("isOpen", JSON.stringify(newIsOpen));
            return newIsOpen;
        });
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            minH="100vh"
            _dark={{
                bgColor: "primary.1100",
                color: "white"
            }}
        >
            <Header onToggle={handleToggle} isOpen={isOpen} />
            {
                image && (
                    <Box
                        position="relative"
                        h="80vh"
                        w="100%"
                        overflow="hidden"
                    >
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            right="0"
                            bottom="0"
                            zIndex="1"
                            bgGradient="linear(to-b, primary.1500, rgba(0,0,0,0.8))"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            px={{
                                base: 6,
                                lg: 300
                            }}
                            color="white"
                            textAlign={'left'}
                        >
                            <Stack direction={'column'} spacing={6}>
                                <Heading as="h1" size="2xl" textAlign={'justify'}>
                                    Convierte tu visión en realidad digital
                                </Heading>
                                <Text fontSize="lg" textAlign={'justify'}>
                                    Desarrollo de software personalizado para potenciar tu negocio y superar tus metas
                                </Text>
                                <Button bg="#4725EA" _hover={{ bg: "#301A9B" }} size={{ base: 'md', lg: 'lg' }} color="white" textAlign={'start'}>Empieza a explorar</Button>
                            </Stack>
                        </Box>
                        <Box
                            position="relative"
                            bgImage={`url('${image}')`}
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            bgPosition="center"
                            h="100%"
                            w="100%"
                            zIndex="0"
                        />
                    </Box>
                )
            }
            <Container flex="1" maxW={'5xl'} mt={image ? '40px' : '100px'}>
                {children}
            </Container>
        </Box>
    );
}

export default Layout;