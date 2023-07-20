export default function CardTask({ colorTag, name, projectName, description }) {
  return (
    <div className="p-3 m-1 rounded-2xl bg-white-100 ">
      <div
        className={`${colorTag} text-white rounded-xl px-2  inline-block my-1`}
      >
        <p className="text-white-100 font-semibold text-sm">{projectName}</p>
      </div>
      <div>
        <div className="font-medium my-2">
          <p>{name}</p>
        </div>
        <div className="font-normal text-slate-300 text-sm my-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
