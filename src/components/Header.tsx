import { Divider, Box, AbsoluteCenter } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box position='relative' top="0" paddingY='3' width="100%" height="fit-content" bg='white'>
      <Divider />
      <AbsoluteCenter bg='white' fontSize="s" px='4' color='black'>
        My Login Page
      </AbsoluteCenter>
    </Box>
  );
};
