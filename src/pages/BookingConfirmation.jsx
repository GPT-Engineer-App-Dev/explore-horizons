import { Container, VStack, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { departure, arrival, departureDate, returnDate, passengers } = location.state || {};

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" textAlign="center">Booking Confirmation</Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <Text fontSize="lg"><strong>Departure:</strong> {departure}</Text>
          <Text fontSize="lg"><strong>Arrival:</strong> {arrival}</Text>
          <Text fontSize="lg"><strong>Departure Date:</strong> {departureDate}</Text>
          <Text fontSize="lg"><strong>Return Date:</strong> {returnDate}</Text>
          <Text fontSize="lg"><strong>Passengers:</strong> {passengers}</Text>
        </Box>
        <Text fontSize="lg" textAlign="center" color="green.500">Your booking has been confirmed!</Text>
        <Button colorScheme="teal" size="lg" onClick={() => navigate("/")}>Go to Home</Button>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;