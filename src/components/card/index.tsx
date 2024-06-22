import {
  ArrowCircleDownRight,
  ArrowCircleUpRight,
  CurrencyCircleDollar,
} from '@phosphor-icons/react';

import { Container } from './styles';
import { formatCurrency } from '../../utils/format-currency';

type CardProps = {
  variant?: 'balance' | 'incomes' | 'expenses';
  title: String;
  amount: number;
};

const iconsMap = {
  balance: <CurrencyCircleDollar />,
  incomes: <ArrowCircleUpRight />,
  expenses: <ArrowCircleDownRight />,
};

export function Card({ variant = 'balance', title, amount }: CardProps) {
  return (
    <Container $variant={variant}>
      {iconsMap[variant]}
      <span>{title}</span>
      <strong>{formatCurrency(amount)}</strong>
    </Container>
  );
}
