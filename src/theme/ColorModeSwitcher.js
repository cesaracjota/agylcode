import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// eslint-disable-next-line react/prop-types
export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      fontSize="lg"
      variant='ghost'
      colorScheme="blackAlpha"
      color={'white'}
      rounded={'full'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};
