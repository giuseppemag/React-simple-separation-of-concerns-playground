/*
Powered by GrandeOmega.com
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { Icon, IconComponent, RenderIcon } from './icons/Icons';
import { IconComponentProps, IconComponentType } from './icons/shared/IconComponent';
import { swapArgs } from './swapArgs';


export const main = () => {
  const rootElement = document.querySelector("#root")
  if (!rootElement) { alert("Cannot find root element!"); return }
  const root = createRoot(rootElement)


  root.render(
    <>
      <Method0 icon1="LivingIcecream" icon2="Ninja" />
      <Method1 />
      <Method2 icons={["Car", "Bed"]} />
      <Method3 icons={["Ninja", "Trash"]} />
    </>
  )
}

const Method0 = (props:{ icon1:Icon, icon2:Icon }) => {
  const Icon1 = RenderIcon(props.icon1)
  const Icon2 = RenderIcon(props.icon2)
  return <div>
    <h1>Method 0</h1>
    {/* method 0: render icons from fixed, pre-identified components
        note that the icon might can be dynamically picked if the name
        comes from props, but it can also be a constant
      */}
    <Icon1 zoom="3x" />
    <Icon2 zoom="3x" />
    <IconComponent icon="Bed" zoom="3x" />
  </div>;
}

const Method1 = (props:{}) => <div>
  <h1>Method 1</h1>
  {
    // method 1: render icons by calling the RenderIcon function
    // note that the icon name is type-safe
    [
      RenderIcon("LivingIcecream")({ zoom: "3x" }),
      RenderIcon("SolidUser")({ zoom: "3x" }),
      RenderIcon("Ninja")({ zoom: "3x" }),
      RenderIcon("Bed")({ zoom: "3x" }),
      RenderIcon("Trash")({ zoom: "3x" }),
      RenderIcon("Car")({ zoom: "3x" }),
    ]}
</div>;

function Method2(props:{ icons: Array<Icon> }) {
  return <div>
    <h1>Method 2</h1>
    {
      // method 2: render icons by calling the RenderIcon function over a parameter
      // note that the parameter name is type-safe
      props.icons.map(icon => RenderIcon(icon)({ zoom: "3x" })
    )}
  </div>;
}

function Method3(props:{ icons: Array<Icon> }) {
  return <div>
    <h1>Method 3</h1>
    {
        // method 3: like method 2 but with implicit parameter-passing through currying
        // note that this is just for functional-programming lovers and is a bit of pretty
        // intellectual wankery
        props.icons.map(swapArgs(RenderIcon)({ zoom: "3x" })
    )}
  </div>;
}


// BaseInputState.ts
type BaseInputProps = {
  param1:number,
  param2:string,
  startAdornment:AdornmentType
}
type AdornmentType = (size:number) => JSX.Element

// BaseInputTemplate.tsx
const BaseInput = (props:BaseInputProps) : JSX.Element =>
  <></>

const Foo = () => {
  <BaseInput
    param1={10}
    param2='something else'
    startAdornment={IconToAdornment(RenderIcon("Bed"))}
  />
}

const Foo2 = () => {
  <BaseInput
    param1={10}
    param2='something else'
    startAdornment={IconToAdornment(RenderIcon("OutlineNinja"))}
  />
}

function IconToAdornment(iconComponent: IconComponentType): AdornmentType {
  return size => iconComponent({ zoom:ICON_SIZES_TO_ZOOM(size) })
}

const ICON_SIZES_TO_ZOOM = (size:number) : IconComponentProps["zoom"] => 
  size <= 10 ? "1x" : size <= 50 ? "2x" : "3x"
