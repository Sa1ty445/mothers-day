import React, { useState } from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import confetti from 'canvas-confetti';

const YourComponent = () => {
  const [showConfetti, setShowConfetti] = useState(false);

const handleToggle = () => {
  setShowConfetti(!showConfetti);
  console.log('Button Clicked, showConfetti is now', !showConfetti);
  
  if (!showConfetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      duration: 2 * 1000,
    });
  }
};




  return (
    <div>
      {showConfetti && <div id="confetti"></div>}
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="150px"
        >
          <Flex direction="column" marginRight="100px" padding="10px">
            <Text fontSize="25px" fontWeight="bold" color="#C769AA">
              HAPPY MOTHERS DAY
            </Text>
            
            <Button
              width="150px"
              marginTop="10px"
              onClick={handleToggle}
              backgroundColor="#C769AA"
              color="white"
              _hover={{ bg: "#D287BB" }}
            >
              Click Me
            </Button>
            
          </Flex>
          <Image
            width="700px"
            height="700px"
            src="/mother.png"
            marginLeft="100px"
            padding="10px"
          />
        </Box>
      </main>
    </div>
  );
};

export default YourComponent

