import { TProgress } from "./type";

const Progress = ({ variant, label }: TProgress) => {
    return (
        <div>
            <label>{label}</label>
            <div>Progress</div>
        </div>
    );
};

export default Progress;
