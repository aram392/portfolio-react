import React, { useState } from "react";
import {
  Flex,
  Box,
  VStack,
  Text,
  extendTheme,
  ColorModeScript,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  ChakraProvider,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";

import "react-multi-carousel/lib/styles.css";
import BackgroundCarousel from "./BackgroundCarousel";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md"; // This is just an example icon, you can choose any

const projects = [
  {
    id: 1,
    title: "MesoHealth",
    description: "Healthcare Staffing Web Service: Golang & Vue.js",
    modalContent: "Detailed information about Project 1",
    imagePath: `${process.env.PUBLIC_URL}/projects/iphonex15-collection.png`,
    customModalContent: (
      <div>
        <p>This is a custom div for Project 1.</p>
        {/* Add more icons as needed */}
        <p>test 5e</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "University Finder",
    description: "Vue.js-Powered Search Upgrade",
    modalContent:
      "The CSUN Class Search project emerged as a transformative initiative aimed at revamping the existing class search interface of our university. This venture was fueled by the collective dissatisfaction voiced by users regarding the current interface, sparking a movement towards a more efficient and user-friendly solution.",
    imagePath: `${process.env.PUBLIC_URL}/projects/macbook11-cl.png`,
    customModalContent: (
      <Box color="whiteAlpha.500">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          fontFamily="heading"
          color="whiteAlpha.500"
        >
          Vue.js-Powered Search Upgrade
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Leveraging Vue.js, the project introduced a contemporary and
            intuitive user interface.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Ensured the search engine is accessible to all users by adhering to
            the latest accessibility standards.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Significantly reduced the loading times by optimizing the backend
            and frontend components.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Simplified the interface and made functionalities more intuitive,
            enhancing the overall user experience.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Served as a proof of concept for using modern web technologies like
            Vue.js in transforming legacy systems.
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    id: 3,
    title: "University Finder",
    description: "Vue.js-Powered Search Upgrade",
    modalContent: "Detailed information about Project 2",
    imagePath: `${process.env.PUBLIC_URL}/projects/macbook11-cl.png`,
    customModalContent: (
      <div>
        {/* Custom HTML/JSX for Project 2 */}
        <p>This is a custom div for Project 2, with more details.</p>
        {/* Include different content as needed */}
      </div>
    ),
  },
  {
    id: 4,
    title: "University Finder",
    description: "Vue.js-Powered Search Upgrade",
    modalContent: "Detailed information about Project 2",
    imagePath: `${process.env.PUBLIC_URL}/projects/macbook11-cl.png`,
    customModalContent: (
      <div>
        {/* Custom HTML/JSX for Project 2 */}
        <p>This is a custom div for Project 2, with more details.</p>
        {/* Include different content as needed */}
      </div>
    ),
  },
  // Add more projects as needed
];

// Extend the theme to include custom colors, fonts, etc.
const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  shadows: {
    myShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Custom shadow
  },
  colors: {
    blueGray: {
      500: "#2B3A67", // Deep blue-gray, good for backgrounds
      600: "#1E2A48", // Darker blue-gray, for hover states or active elements
      700: "#161D35", // Even darker, for accents or focused elements
    },
    cyan: {
      500: "#00BCD4", // Bright cyan for buttons or highlights
      600: "#00ACC1", // Slightly darker cyan for hover states
    },
    gray: {
      100: "#1A202C", // Dark shade for backgrounds
      200: "#2D3748", // Lighter gray for card backgrounds or surfaces
    },
    whiteAlpha: {
      500: "rgba(255, 255, 255, 0.87)", // For primary text
      600: "rgba(255, 255, 255, 0.74)", // For secondary text
    },
    brand: {
      500: "#ff63c3", // A creative pink color for highlights
      600: "#e53e3e", // A strong red for important text
    },
  },
});

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openProjectId, setOpenProjectId] = useState(null);

  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="gray.100"
        color="whiteAlpha.500"
        boxShadow="myShadow"
        direction={{ base: "column", md: "row" }} // Adjust direction based on screen size
        position="fixed" // Keep the nav bar fixed at the top of the screen
        top="0" // Position it at the very top
        left="0" // Stretch it across the screen from the left
        right="0" // Stretch it across the screen to the right
        zIndex="banner" // Ensure it stays on top of other content
      >
        <Box display={{ base: "block", md: "none" }}>
          <Flex justifyContent="space-between" alignItems="center" width="full">
            <Button variant="ghost" color="white">
              Aram Balayan
            </Button>
            <Image
              m={4}
              src={`${process.env.PUBLIC_URL}/avatar3.png`}
              boxSize="45px"
              display="inline-block"
              verticalAlign="middle"
              borderRadius="full"
            />
            <Button
              m={4}
              bg="blueGray.500"
              color="white"
              _hover={{ bg: "cyan.600" }}
              onClick={onOpen}
            >
              Menu
            </Button>
          </Flex>
          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg="blueGray.500">
              <DrawerCloseButton color="whiteAlpha.500" />
              <DrawerHeader color="whiteAlpha.500">Menu</DrawerHeader>

              <DrawerBody>
                <Button
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  color="whiteAlpha.500"
                  _hover={{ bg: "blueGray.600", color: "white" }}
                  onClick={onClose}
                >
                  Experience
                </Button>
                <Button
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  color="whiteAlpha.500"
                  _hover={{ bg: "blueGray.600", color: "white" }}
                  onClick={onClose}
                >
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  color="whiteAlpha.500"
                  _hover={{ bg: "blueGray.600", color: "white" }}
                  onClick={onClose}
                >
                  About Me
                </Button>
                <Button
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  color="whiteAlpha.500"
                  _hover={{ bg: "blueGray.600", color: "white" }}
                  onClick={onClose}
                >
                  Contact
                </Button>
              </DrawerBody>

              <DrawerFooter>
                {/* Optional: Any footer content here */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          width="full"
          justifyContent="space-between"
        >
          <Button variant="ghost" color="white">
            Aram Balayan{" "}
            <Image
              m={4}
              src={`${process.env.PUBLIC_URL}/avatar3.png`}
              boxSize="50px"
              display="inline-block"
              verticalAlign="middle"
              borderRadius="full"
            />
          </Button>
          <Flex>
            <Button variant="ghost" color="whiteAlpha.500">
              Experience
            </Button>
            <Button variant="ghost" color="whiteAlpha.500">
              Projects
            </Button>
            <Button variant="ghost" color="whiteAlpha.500">
              About Me
            </Button>
            <Button variant="ghost" color="whiteAlpha.500" bg="gray.200">
              Contact
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Box
        maxH={{ base: "90%", md: "lg" }}
        p={{ base: "4", md: "4" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        position="relative"
      >
        <VStack
          spacing={1}
          maxW={{ base: "90%", md: "lg" }}
          align="center"
          pt={{ base: "110px", md: "55px" }}
        >
          <Text
            fontSize="4xl"
            fontWeight="extrabold"
            bgGradient="linear(to-l, whiteAlpha.600, whiteAlpha.500)"
            bgClip="text"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Aram Balayan
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            fontFamily="heading"
            color="whiteAlpha.500"
          >
            Software Engineer{" "}
          </Text>
          <Text
            fontSize="lg"
            fontWeight="normal"
            fontFamily="body"
            color="whiteAlpha.500"
            textAlign="center"
          >
            {" "}
            I focus on making complex cloud software simple and efficient. My
            work involves building and improving services that many people rely
            on, using tools like Java, Python, and various AWS technologies. But
            first, let me get my coffee 😁☕.
          </Text>
        </VStack>
        <BackgroundCarousel />
      </Box>
      <Box bg="gray.100" p={4} pl={0} pr={0}>
        <BackgroundCarousel></BackgroundCarousel>
      </Box>
      <Box bg="gray.100" p={2} pl={0} pr={0}>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          fontFamily="heading"
          color="whiteAlpha.500"
          textAlign="center"
        >
          Professional Experience
        </Text>
        <Flex direction={{ base: "column", md: "row" }} mt={4} mb={0} gap={1}>
          <Box flex={1} display={{ base: "none", md: "block" }} />

          <Box flex="1" p={{ base: "0", md: "4" }}>
            <Center flexDirection="column">
              <Text
                fontSize="2xl"
                fontWeight="bold"
                fontFamily="heading"
                color="whiteAlpha.500"
                textAlign="center"
              >
                Amazon Web Services
              </Text>
              <Image
                src={`${process.env.PUBLIC_URL}/1.png`}
                boxSize="60%"
                objectFit="cover"
              />
              <Text textAlign="center" color="whiteAlpha.500">
                Year 2022 - Present
              </Text>
            </Center>
          </Box>

          <Box
            flex="2"
            p={{ base: "4", md: "4" }}
            pb={{ base: "0", md: "4" }}
            pt={{ base: "0", md: "4" }}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="heading"
              color="whiteAlpha.500"
            >
              Software Development Engineer
            </Text>
            <Box color="whiteAlpha.500">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  My role centers around Java development, operational
                  management, and writing integration tests for new features.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Led the development and launch of a new AWS API. Utilized
                  Java, DynamoDB, EC2, S3, and Elasticsearch to ensure top-notch
                  integration and product functionality.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Excelled in a fast-paced setting, balancing coding with
                  operational and leadership responsibilities.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Testing Expertise: Integration Testing, AWS-based Testing
                  Automation
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Collaboration and Leadership: Agile Practices, Stand-up
                  Meetings, Demonstrating New Features
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Technologies on the Job: Java (Backend Development),
                  Elasticsearch, AWS (DynamoDB, EC2, S3, SQS, SWF, CloudWatch,
                  IAM), Python, CD/CI Pipelines
                </ListItem>
              </List>
            </Box>
          </Box>

          <Box flex={1} display={{ base: "none", md: "block" }} />
        </Flex>
        <Box
          height="75px" // Adjust the height as needed for the transition space
          width="full"
          bgGradient="linear(to-b, gray.100 70%, whiteAlpha.500)"
        />

        <Box bg="whiteAlpha.500" p={2} width="full">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            fontFamily="heading"
            color="gray.100"
            textAlign="center"
          >
            Projects
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: "5", md: "10" }}
            p={10}
          >
            {projects.map((project) => (
              <Box
                key={project.id}
                bg="gray.200"
                height={{ base: "200px", md: "300px" }}
                borderRadius="md"
                p={{ base: "2", md: "4" }}
                boxShadow="md"
                onClick={() => setOpenProjectId(project.id)}
                cursor="pointer"
              >
                <Flex alignItems="center" height="100%">
                  <Center>
                    <Image
                      src={project.imagePath}
                      maxH={{ base: "100px", md: "200px" }}
                      objectFit="contain"
                    />
                  </Center>
                  <Box pl={4}>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color="whiteAlpha.500"
                    >
                      {project.title}
                    </Text>
                    <Text color="whiteAlpha.500">{project.description}</Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
          {projects.map((project) => (
            <Modal
              isOpen={openProjectId === project.id}
              onClose={() => setOpenProjectId(null)}
              key={project.id}
            >
              <ModalOverlay />
              <ModalContent bg="gray.700" color="whiteAlpha.900">
                <ModalHeader>{project.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Box>{project.customModalContent}</Box>
                </ModalBody>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => setOpenProjectId(null)}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          ))}
        </Box>

        <Box
          height="50px" // Adjust the height as needed for the transition space
          width="full"
          bgGradient="linear(to-b,whiteAlpha.500, gray.100)"
        />
      </Box>

      <Box
        maxH={{ base: "90%", md: "lg" }}
        p={{ base: "4", md: "4" }}
        pt={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
        position="relative"
      >
        <VStack spacing={1} maxW={{ base: "90%", md: "lg" }} align="center">
          <Text
            fontSize="4xl"
            fontWeight="extrabold"
            bgGradient="linear(to-l, whiteAlpha.600, whiteAlpha.500)"
            bgClip="text"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            fontFamily="heading"
            color="whiteAlpha.500"
          >
            Software Engineer{" "}
          </Text>
          <Text
            fontSize="lg"
            fontWeight="normal"
            fontFamily="body"
            color="whiteAlpha.500"
            textAlign="center"
          >
            {" "}
            I focus on making complex cloud software simple and efficient. My
            work involves building and improving services that many people rely
            on, using tools like Java, Python, and various AWS technologies. But
            first, let me get my coffee 😁☕.
          </Text>
        </VStack>
      </Box>

      <Box
        height="50px" // Adjust the height as needed for the transition space
        width="full"
        bgGradient="linear(to-b, gray.100 70%, whiteAlpha.500)"
      />

      <Box bg="whiteAlpha.500" p={4} width="full">
        <Text
          fontSize="4xl"
          fontWeight="bold"
          fontFamily="heading"
          color="gray.100"
          textAlign="center"
        >
          Contact
        </Text>
        {/* Project items or cards go here */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
