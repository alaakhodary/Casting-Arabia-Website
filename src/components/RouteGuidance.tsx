import Button from "./Button";

interface IPropGuidance {
  text: string;
  subText: string;
  btnTitle: string;
  videoFile: string;
  left?: boolean;
}

const routeGuidance = (props: IPropGuidance) => {
  if (props.left === true) {
    return (
      <div className="flex items-center justify-between gap-10">
        <div>
          <video
            className="h-[200px] w-full rounded-3xl"
            controls
            autoPlay
            playsInline
          >
            <source src={props.videoFile} type="video/mp4" />
          </video>
        </div>
        <div className="mt-[-20px] grid w-[65%] gap-4">
          <h1 className="text-[26px] font-[700] text-[#6371E0]">
            {props.text}
          </h1>
          <p className="mb-2 mt-[-7px] text-[#3E4DB1]">{props.subText}</p>
          <Button
            text={props.btnTitle}
            className="h-[45px] w-[170px] cursor-pointer rounded-lg bg-[#6371E0] text-white hover:bg-[#3E4DB1]"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between gap-10">
        <div className="mt-[-20px] grid w-[65%] gap-4">
          <h1 className="text-[26px] font-[700] text-[#6371E0]">
            {props.text}
          </h1>
          <p className="mb-2 mt-[-7px] text-[#3E4DB1]">{props.subText}</p>
          <Button
            text={props.btnTitle}
            className="h-[45px] w-[170px] cursor-pointer rounded-lg bg-[#6371E0] text-white hover:bg-[#3E4DB1]"
          />
        </div>
        <div>
          <video
            className="h-[200px] w-full rounded-3xl"
            controls
            autoPlay
            playsInline
          >
            <source src={props.videoFile} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
};

export default routeGuidance;
