import { FaPlus, FaXmark } from "react-icons/fa6"

type THeadingSectionProps={
    headingTitle:string,
    contentHide:boolean,
    handleContentHide:()=>void
}
const HeadingSection = ({headingTitle,contentHide,handleContentHide}:THeadingSectionProps) => {
  return (
    <div className="flex items-center bg-violet-700 gap-2 py-2 px-4">
        <p className="font-bold text-white flex-1">{headingTitle}</p>
        <button
          onClick={() => handleContentHide()}
          className={`btn btn-sm btn-circle ${
            contentHide ? "btn-error" : " btn-info"
          }`}
        >
          {contentHide ? <FaXmark /> : <FaPlus />}{" "}
        </button>
        {/* <button
          onClick={() => setSoftDeletedData(!softDeletedData)}
          className="btn btn-sm text-white btn-outline btn-warning"
        >
          {softDeletedData === false ? <FaTrashCan /> : <RiMovie2Fill />}
          {softDeletedData === false ? "Trash" : "All"}
        </button> */}
      </div>
  )
}

export default HeadingSection
