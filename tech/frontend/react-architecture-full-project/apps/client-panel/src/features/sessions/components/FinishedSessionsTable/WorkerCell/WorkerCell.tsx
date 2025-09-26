import type { HTMLDivProps } from "ui";

import { IEvent } from "@app-types/index";
import { IServerResponseSession } from "@features/sessions/types";

import { AssignEvent } from "./AssignEvent";
import { EventActions } from "./EventActions";
import { HiddenEvents } from "./HiddenEvents";

type Props = HTMLDivProps & {
    session: IServerResponseSession;
};

export const WorkerCell = ({ session, ...props }: Props) => {
    const workerName = `${session.worker.first_name} ${session.worker.last_name}`;
    const { events } = session;
    const shownEvents: IEvent[] = [];
    const hiddenEvents: IEvent[] = [];
    events.forEach((event, index) => {
        if (index <= 2) shownEvents.push(event);
        else hiddenEvents.push(event);
    });
    return (
        <div {...props}>
            <div className="worker-name">{workerName}</div>
            <div className="events">
                {/* show first 3 events */}
                {shownEvents.map((event, index) => (
                    <EventActions className={`event _${index % 4}`} key={event.id} event={event} />
                ))}
                {/* hide the rest of the events here */}
                {hiddenEvents.length > 0 && <HiddenEvents events={hiddenEvents} />}
                <AssignEvent sessionId={session.id} />
            </div>
        </div>
    );
};
