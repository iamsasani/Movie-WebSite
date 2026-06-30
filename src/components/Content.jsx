import Cart from "./Cart";
import { Context } from "../data/Context";
import { useContext } from "react";

function Content() {

  const {images} = useContext(Context);
  return (

    <main className="text-white container mx-auto  grid grid-cols-4  gap-4 my-10 px-3 sm:p-0">
      {images.map(({ id, address, name }) => (
        <Cart key={id} address={address} name={name} />
      ))}
    </main>

  )

}

export default Content;
