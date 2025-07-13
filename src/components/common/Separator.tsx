import { cn } from "@/lib/utils";

interface SeparatorProps {
    className?: string;
    orientation?: "horizontal" | "vertical";
}

export const Separator = ({
    className,
    orientation = "horizontal"
}: SeparatorProps) => {
    const baseClasses = "bg-gray-200";

    const orientationClasses = {
        horizontal: "w-full h-px my-4",
        vertical: "h-full w-px mx-4",
    };

    const classes = cn(
        cn(baseClasses, orientationClasses[orientation], className)
    );

    return <div className={classes} />;
};