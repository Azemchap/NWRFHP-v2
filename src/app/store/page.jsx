"use client";

import { FilterProvider } from "@/components/FilterContext";
import FormContent from "@/components/FormContent";
import Sidebar from "@/components/Sidebar";

export default function StorePage() {
    return (
        <FilterProvider>
            <div className="flex min-h-screen">
                <Sidebar />
                <FormContent />
            </div>
        </FilterProvider>
    );
}
