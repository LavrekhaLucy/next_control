import type { FC } from "react";

type GenreBadgeTypeProps = {
    name: string;
    id: number;
    onClick: (genreId: number, page: number, sort: string) => void;
};

const GenreBadge: FC<GenreBadgeTypeProps> = ({ name, id, onClick }) => {
    return (
        <div
            className="px-3 py-1 bg-blue-100 text-blue-800 text-xl
            hover:bg-blue-200 rounded-full font-medium transition whitespace-nowrap inline-block m-2 cursor-pointer"
            onClick={() => onClick(id, 1, "popularity.desc")}>
            {name}
        </div>
    );
};

export default GenreBadge;