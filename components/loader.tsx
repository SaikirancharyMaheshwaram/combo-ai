import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="relative h-20 w-20 animate-spin">
        <Image alt="logo" src={"/logo.png"} fill />
      </div>
      <p>Loading....</p>
    </div>
  );
};
