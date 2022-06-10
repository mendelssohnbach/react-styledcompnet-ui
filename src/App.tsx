import { AlertButton, Button } from './libs/Button';
import { Heading } from './libs/Heading';
import { Input } from './libs/Input';
import { PasswordForm } from './libs/PasswordForm';
import { Text } from './libs/Text';
import { TextArea } from './libs/TextArea';

export const App = () => {
  return (
    <>
      <Text text="手を動かしながら学ぶTypeScript" />
      <Heading tag="h1">見出し</Heading>
      <Heading tag="h2">
        <span>hello, world!</span>
      </Heading>
      <Button
        onClick={() => console.log('clicked')}
        title="Button"
        type="primary"
        width={96}
      />
      <Button
        onClick={() => console.log('clicked')}
        title="Button"
        type="secondary"
      />
      <Button
        onClick={() => console.log('clicked')}
        title="Button"
        type="error"
      />
      <AlertButton
        onClick={() => alert('alert')}
        title="alert"
        width={140}
      />
      <hr />
      <TextArea
        width={200}
        maxLength={100}
      />
      <Input type="text" />
      <Input type="password" />
      <hr />
      <PasswordForm onSubmit={(password) => console.log(password)} />
    </>
  );
};
