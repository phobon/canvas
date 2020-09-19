import { addDecorator, configure } from '@storybook/react';
import { theme } from '@phobon/tokens';
import { Box } from '@phobon/base';
import { ThemeProvider } from 'styled-components';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Box
      className="storybox"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      fullWidth
      css={{
        ul: {
          paddingInlineStart: 0,
        }
      }}>
      {story()}
    </Box>
  </ThemeProvider>
));
configure(require.context('../components/', true, /\.stories\.js$/), module);