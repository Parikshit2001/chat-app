import { LoaderPinwheel } from "lucide-react";

function LoadingState({ classname }: { classname?: string }) {
  return (
    <div className={`h-full max-h-[80vh] ${classname}`}>
      <div className="bg-black my-2 mx-4 py-3 rounded-lg text-white text-center px-6 flex items-center space-x-1">
        <LoaderPinwheel />
        <p>Loading ...</p>
      </div>
    </div>
  );
}

export default LoadingState;
