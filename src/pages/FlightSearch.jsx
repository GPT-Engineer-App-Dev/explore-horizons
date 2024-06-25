import { Container, VStack, Heading, Box, Button, Input, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FlightSearch = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    const bookingDetails = { departure, arrival, departureDate, returnDate, passengers };
    navigate("/booking-confirmation", { state: bookingDetails });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" textAlign="center">Search for Flights</Heading>
        <FormControl id="departure">
          <FormLabel>Departure Location</FormLabel>
          <Input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
        </FormControl>
        <FormControl id="arrival">
          <FormLabel>Arrival Location</FormLabel>
          <Input type="text" value={arrival} onChange={(e) => setArrival(e.target.value)} />
        </FormControl>
        <FormControl id="departure-date">
          <FormLabel>Departure Date</FormLabel>
          <Input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </FormControl>
        <FormControl id="return-date">
          <FormLabel>Return Date</FormLabel>
          <Input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </FormControl>
        <FormControl id="passengers">
          <FormLabel>Number of Passengers</FormLabel>
          <Select value={passengers} onChange={(e) => setPassengers(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </Select>
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSearch}>Search Flights</Button>
      </VStack>
    </Container>
  );
};

export default FlightSearch;