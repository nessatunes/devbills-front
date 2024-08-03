import { ReactNode } from 'react';

import { Content, Overlay, Portal, Root, Trigger, Title } from './styles';

type DialogProps = {
  children: ReactNode;
  trigger: JSX.Element;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Dialog({ children, trigger, open, onOpenChange }: DialogProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger>{trigger}</Trigger>
      <Portal>
        <Overlay />
        <Title />
        <Content>{children}</Content>
      </Portal>
    </Root>
  );
}
