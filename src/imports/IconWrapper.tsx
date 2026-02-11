import imgSetting from "figma:asset/d3cb19c0a69c0dc2445bb8e7c73edd99c09aef09.png";
import imgFredrik1 from "figma:asset/8d8f99b7e2d6a1a509c6db4695bf79b4cede52f1.png";

function Setting() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Setting">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[1000px] size-full" src={imgSetting} />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="fredrik 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFredrik1} />
      </div>
    </div>
  );
}

export default function IconWrapper() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-center justify-center pr-[8px] relative size-full" data-name="Icon-Wrapper">
      <Setting />
    </div>
  );
}