'use client'

import { Button } from "@/components/ui/button";

const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, $ Plans. United. Welcome to <span className="underline">Notion </span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            Notion is connected workspace where better, faster work happens
            </h3>
            <Button>Enter Notion</Button>
        </div>
    );
};

export default Heading;