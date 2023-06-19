import Video from "../pages/HomePage/components/Video";
import Button from "./Button";

interface IPropGuidance {
  text: string;
  subText: string;
  btnTitle: string;
  left?: boolean;
}

const routeGuidance = (props: IPropGuidance) => {
  if (props.left === true) {
    return (
      <div className="flex items-center justify-between gap-10 max-lg:block">
        <div>
          <Video url="https://casting-arabia-uploads.s3.us-east-2.amazonaws.com/videos/talent.mp4" />
        </div>
        <div className="mt-[-20px] grid w-[65%] gap-4 max-lg:mt-8 max-lg:w-full">
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
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        <div className="mt-[-20px] grid w-[65%] gap-4 max-lg:w-full">
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
          <Video url="https://casting-arabia-uploads.s3.us-east-2.amazonaws.com/videos/seeker.mp4" />
        </div>
      </div>
    );
  }
};

export default routeGuidance;
