import Card from "./Card";

export default function Gallery(props) {
  const cardList = props.list;

  return (
   <div class = "bg-[#272A30] rounded-xl w-full lg:p-12 py-5 text-white">
     <div class="font-normal">Listen to audiobooks in</div>
      <div class="font-bold mt-2">7 Regional Languages</div>
   
    <div class="flex justify-center flex-wrap gap-6">
     
        {cardList.map((item, index) => (
      <Card key={index} name={item.name} symbol={item.symbol} />
    ))}
    </div>
    </div>
  );
}
