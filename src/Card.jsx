export default function Card(props) {
  return (
    <a class="group p-2 lg:p-5 text-center w-[130px] md:w-[120px] bg-[#3e434c] rounded-xl flex justify-center items-center hover:bg-[#22C55E]" href="/home/hindi"><div>
      <div class="text-white text-xl md:text-5xl group-hover:scale-125 transition ease-in-out duration-300 font-normal">{props.symbol}</div>
      <div class="text-gray-200 text-base md:text-xl font-normal md:mt-4 mt-2">{props.name}</div>
    <div>
    </div>
    </div></a>
  );
}
