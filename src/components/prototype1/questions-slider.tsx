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

export default function QuestionSlider(props: SliderProps) {
    const trackStyle: React.CSSProperties = {
        height: '15px', 
        width: '100%',
        
    }

    return (
      <>
        <div className='flex'>
         <h3 className='pb-3 pt-3 text-neutral-500'>{props.title}</h3>
         <p className='ml-20 mt-4'>{props.values}</p>
        </div>
        <Range
          step={props.step}
          min={props.min}
          max={props.max}
          values={props.values}
          onChange={props.onChange}
          renderTrack={({ props, children }) => (
            <div
              className='rounded-3xl bg-yellow-500 max-w-md w-3/5'
              {...props}
              style={{
                ...props.style,
                height: '15px',
                width: '100%',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              className='bg-white border-2 border-gray-300 rounded-full'
              {...props}
              style={{
                ...props.style,
                height: '28px',
                width: '28px',
              }}
            />
          )}
        />
      </>
    );
  }
  