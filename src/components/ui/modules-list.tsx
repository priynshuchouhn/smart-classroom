/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ModuleCard } from "@/components/ui/module-card";

import { ModuleWithProgressWithSubject } from "@/types";

interface ModuleListProps {
    items: ModuleWithProgressWithSubject[];
}

export const ModulesList = ({
    items
}: ModuleListProps) => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {items.map((item) => (
                    <ModuleCard
                        key={item.moduleId}
                        id={item.moduleId}
                        title={item.title}
                        subject={item?.subject?.name!}
                        date={item.createdAt.toLocaleString('en-IN', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false // Ensures 24-hour format
                        })}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <div className="text-center text-sm text-muted-foreground mt-10">
                    No Module found
                </div>
            )}
        </div>
    )
}