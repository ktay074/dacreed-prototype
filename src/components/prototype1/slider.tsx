import * as React from 'react';
import { Range } from 'react-range';

type SliderProps = {
  title: string;
  min: number;
  max: number;
  step: number;
  values: number[];
  onChange: (values: number[]) => void;
};

export default function Slider(props: SliderProps) {
  return (
    <>
    <div className='flex items-center justify-center'>

      <h3 className='pb-3 pt-3 text-black-500 mr-4'>{props.title}</h3>
      <Range
        step={props.step}
        min={props.min}
        max={props.max}
        values={props.values}
        onChange={props.onChange}
        renderTrack={({ props, children }) => (
          <div
            className='rounded-3xl bg-indigo-100 max-w-md w-3/5'
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '300px',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            className='bg-[#979BFF] rounded-full'
            {...props}
            style={{
              ...props.style,
              height: '20px',
              width: '20px',
            }}
          />
        )}
      />
    </div>
    </>
  );
}