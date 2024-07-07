import {
  FaArrowRightArrowLeft,
  FaCircleDot,
  FaPenToSquare,
} from "react-icons/fa6";
import { TBrandFromdata, TBrandTableProps } from "../../types/brand.type";
import {
  useGetSingleBrandQuery,
  useUpdateStatusBrandMutation,
} from "../../redux/features/brand/brandApi";
import { useState } from "react";
import Modal from "../ui/Modal";
import CreateUpdateBrandForm from "../form/CreateUpdateBrandForm";
import Loading from "../ui/Loading";
import { toast } from "react-toastify";

const BrandTable = ({ brands }: TBrandTableProps) => {
  const [brandId, setBrandId] = useState<string | "">("");
  const { data: brand, isFetching } = useGetSingleBrandQuery(brandId, {
    skip: !brandId,
  });
  const [updateStatusBrand] = useUpdateStatusBrandMutation();

  const handleStatusUpdate = async (brandId: string, status: boolean) => {
    const updateData = {
      brandId: brandId,
      status: status,
    };
    const res = await updateStatusBrand(updateData).unwrap();
    console.log(res)
    toast.success(res.message);
  };
  const hanleCloseModal = () => {
    setBrandId("");
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table  bg-white rounded-none">
          {/* head */}
          <thead className="bg-violet-300 text-sm text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Status</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {brands?.map((brand: TBrandFromdata, index: number) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{brand.name}</td>
                <td>
                  <div className="flex gap-2 items-center justify-center">
                    <FaCircleDot
                      className={brand.status ? "text-success" : "text-warning"}
                    />
                    <span>{brand.status ? "Active" : "Inactive"}</span>
                    <button
                      className={`btn btn-sm btn-primary`}
                      onClick={() =>
                        handleStatusUpdate(
                          brand._id!,
                          brand.status ? false : true
                        )
                      }
                    >
                      <FaArrowRightArrowLeft />
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => {
                      setBrandId(brand._id!);
                    }}
                  >
                    <FaPenToSquare />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isFetching ? (
        <Loading />
      ) : (
        <Modal
          modalId={brandId}
          modalTitle="Edit Brand"
          hanleCloseModal={hanleCloseModal}
        >
          <CreateUpdateBrandForm editableData={brand?.data} />
        </Modal>
      )}
    </>
  );
};

export default BrandTable;
