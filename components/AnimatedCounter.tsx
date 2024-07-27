'use client';
import CountUp from 'react-countup';
import { formatAmount } from '@/lib/utils';

const AnimatedCounter = ({ amount }: {amount: number}) => {
  return (
    <div>
        <CountUp
            duration={2}
            decimal='2'
            suffix=' kr.'
            end = {amount} 
        />
    </div>
  )
}

export default AnimatedCounter