import { ButtonContainer, type ButtonVariant } from './Button.styles';

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps): JSX.Element {
  return <ButtonContainer variant={variant}>Send</ButtonContainer>;
}
