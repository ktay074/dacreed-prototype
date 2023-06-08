import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';

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
          renderTrack={({ props: renderTrackProps, children }) => (
            <div
              className='rounded-3xl bg-indigo-200 border-2 border-gray-300 max-w-md w-3/5'
              {...renderTrackProps}
              style={{
                ...renderTrackProps.style,
                height: '15px',
                width: '100%',
                background: getTrackBackground({
                  colors: ["#FAC01E", "#ECF1F4"],
                  values: props.values,
                  min:props.min,
                  max:props.max
                  
                })
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              className='bg-white border-2 border-gray-400 rounded-full'
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
  