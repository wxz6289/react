import { forwardRef, useImperativeHandle, useRef } from 'react';
import type { ComponentPropsWithoutRef, Ref } from 'react';

type Props = ComponentPropsWithoutRef<'input'>;

export type MyInputHandle = {
  focus: () => void;
  scrollIntoView: () => void;
};

const MyInput = forwardRef<MyInputHandle, Props>(function MyInput(props, ref: Ref<MyInputHandle>) {
  const innerRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus() {
      innerRef.current?.focus();
    },
    scrollIntoView() {
      innerRef.current?.scrollIntoView();
    },
  }), []);
  return (
    <div>
      <p>MyInput</p>
      <input {...props} ref={innerRef} type='text' />
    </div>
  )
});

function TestUseImperativeHandle() {
  const myRef = useRef<MyInputHandle>(null);
  const handleClick = () => {
    myRef?.current?.focus()
    console.log('MyInput:', myRef)
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <MyInput ref={myRef} onClick={handleClick} className="border-1 border-gray-300 rounded-md px-2 py-1" />
      <button className="rounded-md border-1 mt-2 px-2 py-1 border-gray-300 text-blue-500 hover:bg-gray-100" onClick={handleClick}>focus</button>
    </div>
  )
}

export default TestUseImperativeHandle;