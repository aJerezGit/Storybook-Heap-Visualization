import * as React from 'react';

export interface ICardProps {
    color: string;
    fieldName: string | null;
    fieldStartAddress: number;
    fieldLength: number;
}

export function Card ({
    color, 
    fieldName, 
    fieldStartAddress, 
    fieldLength, 
    ...props}: ICardProps) {
  return (
      <div className="card" {...props}>
        <div className="colorHolder" style={{backgroundColor: color}} ></div>
        <div className="container">
            <h4><b>{fieldName ? fieldName : 'Empty'}</b></h4>
            <p>Start address:{fieldStartAddress}</p>
            <p>Lenght:{fieldLength}</p>
        </div>
      </div>
  );
}
