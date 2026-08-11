import { Box, Text } from "@chakra-ui/react"

var info = 
    {
    "name" : "Ms. Jeena KK",
    "role" : "Panel Incharge",
    };

function Nameblock() {
  return (
    <div>
        <Box pos="fixed" top="70px" left="20px" bg="#080E2C" h="95px" w="230px" 
         borderWidth ="2px" borderColor="#44EABB" py="10px" borderRadius="15">
            <stack>
            <Text fontSize="20" fontWeight="bold" textAlign="center" color="#FFFFFF">
            {info.name}
            </Text>
            <Text fontSize="16" fontWeight="normal" textAlign="center" color="#44EABB">
            {info.role}
            </Text> 
            </stack>
        </Box>
    </div>
  );
}

export default Nameblock;