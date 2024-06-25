import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to TravelNow</Heading>
        <Text fontSize="lg" textAlign="center">Your one-stop solution for booking flights, hotels, and car rentals.</Text>
        <Box display="flex" justifyContent="space-around" width="100%">
          <Link to="/search-flights">
            <Button leftIcon={<FaPlane />} colorScheme="teal" variant="solid" size="lg">
              Book a Flight
            </Button>
          </Link>
          <Button leftIcon={<FaHotel />} colorScheme="teal" variant="solid" size="lg">
            Book a Hotel
          </Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" variant="solid" size="lg">
            Rent a Car
          </Button>
        </Box>
        <Image src="/images/travel-banner.jpg" alt="Travel Banner" borderRadius="md" boxShadow="md" />
      </VStack>
    </Container>
  );
};

export default Index;