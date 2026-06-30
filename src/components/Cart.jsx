


function Cart({address , name}) {

  return (
    <>

      <div className="border-2   relative rounded-sm overflow-hidden group cursor-pointer">
        <img
          src={address}
          className="object-cover aspect-2/3 opacity-100 group-hover:opacity-70"
        />
        <div className="absolute lg:text-lg w-full h-full text-xs  group-hover:top-2 transition-all duration-400 left-1 ">
          <h1>{name}</h1>
          <span>8.2/10 ⭐</span>
        </div>
      </div>


    </>
  );
}

export default Cart;
