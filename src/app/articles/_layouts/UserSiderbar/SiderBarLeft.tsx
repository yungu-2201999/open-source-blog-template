"use client";
import React from 'react'
import { AiOutlineSearch, AiOutlineAlignRight, AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { textAlignMap } from './map'


interface InitialConfig {
  textAlign: 0 | 1 | 2;
};
let initialConfig: InitialConfig = {
  textAlign: 0,// 0: left, 1: center, 2: right
};

type Action =
  | { type: "changeTextAlign", textAlign: 0 | 1 | 2 }

function reducer(state: InitialConfig, action: Action) {
  switch (action.type) {
    case "changeTextAlign":
      return { ...state, textAlign: action.textAlign };
    default:
      throw new Error();
  }
}

export default function SiderBarLeft() {
  const [config, dispatch] = React.useReducer(reducer, initialConfig);
  const changeTextAlign = (textAlign: 0 | 1 | 2) => dispatch({ type: 'changeTextAlign', textAlign });
  return (
    <ul className="relative text-white h-[100%] dark:bg-blue-600/20 bg-cyan-100 dark:bg-slack-bg-dark w-[200px] px-2 pt-3">
      <div>
        <div className='bg-white/50 m-2 mx-0 rounded flex shadow'>
          <input type="text" className="bg-transparent outline-none w-full h-8 pl-3 text-black" />
          <button className="m-1 p-1 rounded bg-white/10 bg-black/10 hover:bg-black/20 text-black/40 dark:hover:text-black dark:hover:bg-white/70 hover:bg-black/10 hover:text-black/60"><AiOutlineSearch /></button>
        </div>
        <div>
          <button className="cursor-pointer text-black/40 dark:text-white/60 dark:hover:text-white hover:text-black" onClick={() => { changeTextAlign([1, 2, 0][config.textAlign] as 0 | 1 | 2) }}>
            {[<AiOutlineAlignLeft />, <AiOutlineAlignCenter />, <AiOutlineAlignRight />][config.textAlign]}
          </button>
        </div>
      </div>
      <div className=' w-8 h-8 absolute top-[10%] right-[-7%] dark:bg-white/5 bg-black/5 dark:hover:bg-white/40 hover:bg-black/20 text-black flex justify-center items-center rounded-full'><AiOutlineDoubleLeft /></div>
      <li className={[
        textAlignMap[config.textAlign],
        'text-slate-400 dark:hover:text-slate-200 hover:text-black/70 w-full cursor-pointer dark:hover:bg-white/20 hover:bg-black/10 rounded py-1 text-base px-1',
      ].join(' ')}>1</li>
    </ul>
  )
}
