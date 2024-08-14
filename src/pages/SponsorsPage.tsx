import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SponsorCard from "../components/SponsorCard";
import ReactPaginate from "react-paginate";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import { fetchSponsors } from "../redux/sponsorsSlice";
import { RootState, AppDispatch } from "../redux/store";
import Loading from "../components/Loading";
import { useTranslation } from "react-i18next";

const SponsorsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    parseInt(searchParams.get("page_size") || "10", 10)
  );

  const dispatch = useDispatch<AppDispatch>();
  const { sponsors, status } = useSelector(
    (state: RootState) => state.sponsors
  );

  const { t, i18n } = useTranslation();
  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage");
    if (storedLang) {
      const { locale } = JSON.parse(storedLang);
      i18n.changeLanguage(locale);
    }
  }, [i18n]);

  useEffect(() => {
    dispatch(fetchSponsors({ page, pageSize: itemsPerPage }));
  }, [dispatch, page, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setSearchParams({ page: newPage, page_size: itemsPerPage });
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setSearchParams({ page: 1, page_size: newItemsPerPage });
  };

  useEffect(() => {
    setItemsPerPage(parseInt(searchParams.get("page_size") || "10", 10));
  }, [searchParams]);

  if (status === "loading") return <Loading />;
  if (status === "failed") return <p>Error loading sponsors</p>;

  const total = sponsors?.count || 0;
  const pageCount = Math.ceil(total / itemsPerPage);
  const displayedItemsCount = Math.min(page * itemsPerPage, total);

  return (
    <div className="max-w-7xl mx-auto px-10 mt-12 pb-28">
      <div className="mb-3 flex items-center">
        <span className="font-SfProDisplay tracking-[1.13px] text-[#B1B1B8] font-medium uppercase text-xs ml-6">
          #
        </span>
        <span className="font-SfProDisplay tracking-[1.13px] text-[#B1B1B8] font-medium uppercase text-xs ml-[50px]">
          f.i.sh.
        </span>
        <span className="font-SfProDisplay tracking-[1.13px] text-[#B1B1B8] font-medium uppercase text-xs ml-[212px] w-[150px] text-center">
          {t("phoneNumber")}
        </span>
        <span className="font-SfProDisplay tracking-[1.13px] text-[#B1B1B8] font-medium uppercase text-xs ml-[15px] w-[170px] text-center">
          {t("SponsorshipAmount")}
        </span>
        <span className="font-SfProDisplay tracking-[1.13px] text-[#B1B1B8] font-medium uppercase text-xs w-[160px] text-center">
          {t("AmountSpent")}
        </span>
        <span className="font-SfProDisplay tracking-[1.13px] text-[#B1B1B8] font-medium uppercase text-xs ml-9">
          {t("date")}
        </span>
        <span className="font-SfProDisplay tracking-[1.13px] text-[#B1B1B8] font-medium uppercase text-xs ml-[95px]">
          {t("Status")}
        </span>
        <span className="font-SfProDisplay tracking-[1.13px] text-[#B1B1B8] font-medium uppercase text-xs ml-[65px] w-[70px] text-center">
          {t("Actions")}
        </span>
      </div>
      <div className="mb-6">
        {sponsors?.results.map((item, i) => (
          <SponsorCard
            key={item.id}
            order={(page - 1) * itemsPerPage + i + 1}
            sponsor={item}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        {t("ShowDetail", {
          all: total,
          first: 1 + (page - 1) * itemsPerPage,
          latest: displayedItemsCount,
        })}
        <div className="flex items-center">
          <span className="text-[#1D1D1F] font-Rubik font-normal">
            {t("Show")}
          </span>
          <select
            className="select select-sm mx-3 text-[#1D1D1F] font-SfProDisplay border border-[#DFE3E8]"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
          </select>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<ArrowRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel={<ArrowLeft />}
            containerClassName="pagination"
            activeClassName="active"
            forcePage={page - 1}
          />
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-SfProDisplay text-2xl">Filter</h3>
            <hr className="my-7" />
            {/* <div className="mb-7">
              <label
                htmlFor=""
                className="text-[#1D1D1F] text-xs font-SfProDisplay uppercase font-semibold tracking-[1.13px]"
              >
                Ariza holati
              </label>
              <select
                // value={status}
                // onChange={(e) => setStatus(e.target.value)}
                className="select select-bordered  w-full mt-2 text-[#2E384D] font-SfProDisplay"
              >
                <option value="Barchasi">Barchasi</option>
                <option value="Tasdiqlangan">Tasdiqlangan</option>
                <option value="Yangi">Yangi</option>
                <option value="Taqiqlangan">Taqiqlangan</option>
                <option value="Moderatsiyada">Moderatsiyada</option>
              </select>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-[#1D1D1F] text-xs font-SfProDisplay uppercase font-semibold tracking-[1.13px]"
              >
                Homiylik summasi
              </label>
            </div> */}
            <h1 className="text-3xl">Coming Soon...</h1>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SponsorsPage;
