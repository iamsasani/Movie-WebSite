


function TvCart({address , name , rate}) {

  return (
    <>

      <div className="border-2   relative rounded-sm overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
        <a href="#">
        <img
          src={address}
          className="object-cover aspect-2/3 opacity-100 group-hover:opacity-70"
        />
        <div className="absolute lg:text-lg w-full h-full text-xs  group-hover:top-2 transition-all duration-400 left-1 ">
          <h1>{name}</h1>
          <span>{rate} /10 ⭐</span>
        </div>
        </a>
      </div>


    </>
  );
}

export default TvCart;
