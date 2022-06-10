import { Heading } from './libs/constants/Heading';
import { Text } from './libs/Text';

export const App = () => {
  return (
    <>
      <Text text="true" />
      <Heading tag="h1">見出し</Heading>
      <Heading tag="h2">
        <span>hello, world!</span>
      </Heading>
    </>
  );
};
