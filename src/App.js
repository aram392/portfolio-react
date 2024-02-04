import React, { useState, useRef } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

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
  HStack,
  Icon,
  Link,
  useClipboard,
  useToast,
  Input,
} from "@chakra-ui/react";

import { FaLinkedin, FaEnvelope } from "react-icons/fa";

import "react-multi-carousel/lib/styles.css";
import BackgroundCarousel from "./BackgroundCarousel";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md"; // This is just an example icon, you can choose any

import Confetti from "react-confetti";

const projects = [
  {
    id: 1,
    title: "MesoHealth",
    description: "Healthcare Staffing Web Service: Golang & Vue.js",
    modalContent: "Detailed information about Project 1",
    imagePath: `${process.env.PUBLIC_URL}/projects/iphonex15-collection.png`,
    customModalContent: (
      <Box color="whiteAlpha.500">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          fontFamily="heading"
          color="whiteAlpha.500"
        >
          MesoHealth: Streamlining Healthcare Workforce Management
        </Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Advanced Scheduling System & Job-Finding Tool for Healthcare
            Professionals.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Domain-Driven Design with a flexible and scalable architecture.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Golang Backend for robust performance and Vue.js Frontend for a
            user-friendly interface.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Docker Integration for efficient builds, testing, and deployment.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            User-Centric Development based on direct feedback from healthcare
            professionals.
          </ListItem>
        </List>
        <Text
          mt={4}
          fontSize="xl"
          fontWeight="bold"
          fontFamily="heading"
          color="whiteAlpha.500"
        >
          Tools & Technologies Used:
        </Text>
        <List spacing={2}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Golang - Backend Development
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Vue.js - Frontend (JavaScript) Framework
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Docker - Containerization and Deployment
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            PostgreSQL - Database
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Nuclino - Endpoint Documentation
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Git - Version Control System
          </ListItem>
        </List>
      </Box>
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
        <Text mt={4} fontSize="xl" color="whiteAlpha.500">
          Demo:
        </Text>
        <Link href="https://youtu.be/uGoxQaOuSi0" isExternal color="cyan.500">
          Watch the project demo
        </Link>
      </Box>
    ),
  },
  {
    id: 3,
    title: "Digital Collage Frame",
    description: "An Innovative Blend of Art and Technology",
    modalContent: "Detailed information about Project 2",
    imagePath: `${process.env.PUBLIC_URL}/projects/pf2.png`,
    customModalContent: (
      <Box color="whiteAlpha.500">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          fontFamily="heading"
          color="whiteAlpha.500"
        >
          The Digital Collage Frame Project
        </Text>
        <Text mt={4}>
          The Digital Collage Frame project represents a seamless fusion of
          hardware and software expertise, culminating in a unique and
          interactive piece of art.
        </Text>
        <List spacing={3} mt={4}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Custom-Built Frame: Crafted entirely from scratch, the frame
            embodies a personal touch in every aspect – from cutting to painting
            and polishing.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Raspberry Pi Integration: Utilizing multiple Raspberry Pi devices,
            known for their compact size and versatility, the frame can display
            a variety of images in a collage format. These devices are
            network-connected, enabling dynamic content updates and a responsive
            display experience.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Lightweight Linux Distribution: The choice of a lightweight Linux
            distribution for the Raspberry Pi’s enables rapid boot-up times and
            efficient operation.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Network Configuration for Privacy: While the devices are connected
            to a network, they operate on a separate local network, prioritizing
            privacy and security. This setup is crucial for maintaining the
            confidentiality of the displayed content.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Future-Proof Design: The system is designed with expandability in
            mind. Features like Google Drive syncing for image updates are
            anticipated, allowing for easy integration of new functionalities.
          </ListItem>
        </List>
      </Box>
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

const ThankYouPage = () => {
  return (
    <VStack spacing={4} mt={10}>
      <Text fontSize="2xl" fontWeight="bold">
        Thank You!
      </Text>
      <Text>Your submission has been received.</Text>
    </VStack>
  );
};

const MainPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openProjectId, setOpenProjectId] = useState(null);

  const email = "arambalayan1@gmail.com";
  const { onCopy } = useClipboard(email);
  const toast = useToast();
  const [showConfetti, setShowConfetti] = useState(false);

  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const [emailToStore, setEmailToStore] = useState("");

  // Helper function to calculate the top position of an element relative to the document
  const getTopPosition = (element) => {
    let yPos = 0;
    while (element) {
      yPos += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }
    return yPos;
  };

  // Scroll function that calculates the target's position and scrolls to it
  const scrollToSection = (ref) => {
    const yPos = getTopPosition(ref.current);
    window.scrollTo({ top: yPos, behavior: "smooth" });
  };

  // Adjusted scroll functions using scrollToSection
  const scrollToTop = () => scrollToSection(topRef);
  const scrollToExperience = () => scrollToSection(experienceRef);
  const scrollToProjects = () => scrollToSection(projectsRef);
  const scrollToAboutMe = () => scrollToSection(aboutMeRef);
  const scrollToContact = () => scrollToSection(contactRef);

  const handleCopyEmail = () => {
    onCopy();

    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds

    toast({
      title: "Email copied to clipboard.",
      description: "You can now paste the email address.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await fetch(process.env.REACT_APP_LAMBDA_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailToStore }),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "We've received your email. Thank you!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setEmailToStore(""); // Reset email input after successful submission
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // End loading
    }
  };

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
                  onClick={() => {
                    onClose();
                    scrollToExperience();
                  }}
                >
                  Experience
                </Button>
                <Button
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  color="whiteAlpha.500"
                  _hover={{ bg: "blueGray.600", color: "white" }}
                  onClick={() => {
                    onClose();
                    scrollToProjects();
                  }}
                >
                  Projects
                </Button>
                <Button
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  color="whiteAlpha.500"
                  _hover={{ bg: "blueGray.600", color: "white" }}
                  onClick={() => {
                    onClose();
                    scrollToAboutMe();
                  }}
                >
                  About Me
                </Button>
                <Button
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  color="whiteAlpha.500"
                  _hover={{ bg: "blueGray.600", color: "white" }}
                  onClick={() => {
                    onClose();
                    scrollToContact();
                  }}
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
          <Button variant="ghost" color="white" onClick={scrollToTop}>
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
            <Button
              variant="ghost"
              color="whiteAlpha.500"
              onClick={scrollToExperience}
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              color="whiteAlpha.500"
              onClick={scrollToProjects}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              color="whiteAlpha.500"
              onClick={scrollToAboutMe}
            >
              About Me
            </Button>
            <Button
              variant="ghost"
              color="whiteAlpha.500"
              bg="gray.200"
              onClick={scrollToContact}
            >
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
      <Box bg="gray.100" p={2} pl={0} pr={0} ref={experienceRef}>
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
          ref={projectsRef}
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
              <ModalContent
                bg="gray.700"
                color="whiteAlpha.900"
                maxW={{ base: "80%", md: "50%" }}
              >
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
        ref={aboutMeRef}
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
            fontSize="lg"
            fontWeight="normal"
            fontFamily="body"
            color="whiteAlpha.500"
          >
            My journey in technology is driven by a constant desire to learn and
            innovate.
          </Text>

          <Text
            fontSize="lg"
            fontWeight="normal"
            fontFamily="body"
            color="whiteAlpha.500"
          >
            Yet, it's the simple joys of life, like a scenic hike with my dog or
            the tranquility of nature, that keep me grounded and remind me of
            the world beyond the screen.
          </Text>

          <Text
            fontSize="lg"
            fontWeight="normal"
            fontFamily="body"
            color="whiteAlpha.500"
          >
            Each project, no matter how technical, is infused with a bit of the
            creativity and perseverance I've honed on my outdoor adventures. I
            believe that the best solutions come from a balanced perspective,
            and I strive to bring that balance into everything I do.
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
          ref={contactRef}
        >
          Contact
        </Text>

        <VStack spacing={4} align="center" justify="center" mt={6}>
          <HStack>
            <Icon as={FaLinkedin} w={6} h={6} color="cyan.500" />
            <Link
              href="https://www.linkedin.com/in/arambalayan/"
              isExternal
              color="cyan.500"
            >
              LinkedIn
            </Link>
          </HStack>
          <HStack>
            <Icon as={FaEnvelope} w={6} h={6} color="gray.100" />
            <Box
              as="button"
              onClick={handleCopyEmail}
              variant="ghost"
              color="gray.100"
              _hover={{ bg: "gray.200", color: "white" }}
              p={2} // Add padding to mimic button spacing
              borderRadius="md" // Add border radius to mimic button shape
              display="inline-flex" // Use flex to center content
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              <Text userSelect="text">{email}</Text>
            </Box>
          </HStack>
        </VStack>
        <Box mt={10}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            fontFamily="heading"
            color="gray.100"
            textAlign="center"
            pb={4}
          >
            If you're interested in discussing my work or potential
            opportunities, please enter your email address below and I'll be in
            touch soon.
          </Text>
          <form onSubmit={handleSubmit}>
            <Flex
              direction="column" // Stack children vertically
              align="center" // Center children horizontally
              justify="center" // Center children vertically (if needed)
              width="full" // Take full width of its parent to ensure centering
              mb={4} // Margin bottom for spacing
            >
              <Input
                placeholder="Enter your email"
                value={emailToStore}
                onChange={(e) => setEmailToStore(e.target.value)}
                type="email"
                bg="gray.700"
                mb={4} // Margin bottom for spacing between the Input and Button
                maxW={{ base: "90%", md: "lg" }} // Max width to control the size of the Input
              />
              <Button type="submit" colorScheme="blue" isLoading={isLoading}>
                Submit
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>

      {showConfetti && <Confetti />}
    </ChakraProvider>
  );
};

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/thanks" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
export default App;
