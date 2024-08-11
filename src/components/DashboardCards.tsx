const DashboardCards = () => {
  return (
    <div className="max-w-7xl mx-auto  px-10 mt-12 mb-7 flex justify-between">
      <div className="bg-white w-96 h-24 rounded-lg p-6 flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#4C6FFF1A] flex justify-center items-center">
          <i className="icon-Group-20073 text-3xl"></i>
        </div>
        <div>
          <span className="text-[#7A7A9D]  font-SfProDisplay text-[14px]  font-normal">
            Jami to'langan summa
          </span>
          <h2 className="font-SfProDisplay font-bold text-[#2E384D] text-xl">
            1 684 325 000 <span className="text-[#B2B7C1]">UZS</span>
          </h2>
        </div>
      </div>
      <div className="bg-white w-96 h-24 rounded-lg p-6 flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#4C6FFF1A] flex justify-center items-center">
          <i className="icon-Group-20073-1 text-3xl"></i>
        </div>
        <div>
          <span className="text-[#7A7A9D]  font-SfProDisplay text-[14px]  font-normal">
            Jami so'ralgan summa
          </span>
          <h2 className="font-SfProDisplay font-bold text-[#2E384D] text-xl">
            1 684 325 000 <span className="text-[#B2B7C1]">UZS</span>
          </h2>
        </div>
      </div>
      <div className="bg-white w-96 h-24 rounded-lg p-6 flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#4C6FFF1A] flex justify-center items-center">
          <i className="icon-Group-20073-2 text-3xl"></i>
        </div>
        <div>
          <span className="text-[#7A7A9D]  font-SfProDisplay text-[14px]  font-normal">
            To'lanishi kerak summa
          </span>
          <h2 className="font-SfProDisplay font-bold text-[#2E384D] text-xl">
            1 684 325 000 <span className="text-[#B2B7C1]">UZS</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
