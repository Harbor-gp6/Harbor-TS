import { Typography } from "../Typography/Typography";

type DiaItemProps = {
    week: string
    day: string
}

export function DiaItem({ week, day }: DiaItemProps) {
    return (
        <div className="after:bg-black h-20 w-20 min-w-20 bg-gray-200 text-center flex flex-col items-center justify-center">
            <Typography className="" color="black" >{week}</Typography>
            <Typography className="" color="black" >{day}</Typography>
        </div>
    );
}
