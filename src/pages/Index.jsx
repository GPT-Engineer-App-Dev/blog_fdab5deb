// Complete the Index page component here
// Use chakra-ui
import { Box, Container, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaPenNib, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md">
      <VStack spacing={8} as="header">
        <Heading as="h1" size="2xl" fontFamily="serif" mt={10}>
          My Blog
        </Heading>
        <Stack direction="row" justify="center" spacing={4}>
          <Link href="#" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaPenNib />
            <Text ml={2}>Articles</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaUser />
            <Text ml={2}>About</Text>
          </Link>
        </Stack>
      </VStack>
      <Box as="section" p={5} mt={10} bg="gray.100" borderRadius="lg">
        <Heading as="h3" size="lg" fontFamily="serif">
          Welcome to My Blog
        </Heading>
        <Text mt={3} fontFamily="serif">
          Discover a wealth of knowledge on various topics through our curated articles. Dive into detailed discussions and insightful analyses crafted by our passionate writers.
        </Text>
        <Link href="#" color="teal.500" mt={3} display="inline-block">
          Read more...
        </Link>
      </Box>
    </Container>
  );
};

export default Index;
