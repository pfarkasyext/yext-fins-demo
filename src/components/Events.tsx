import { Image, ImageType } from "@yext/pages-components";

type Event = {
  name: string;
  description: string;
  time: {
    start: string;
  };
};

interface EventsData {
  c_featuredEvents: Event[];
  c_eventPlaceholder: ImageType;
}

interface EventsProps {
  events: EventsData;
}

function EventCard({
  event,
  placeholderImage,
}: {
  event: Event;
  placeholderImage: ImageType;
}) {
  const startDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(event.time.start));

  const fullDate = new Date(event.time.start);
  const startTime = fullDate.toLocaleTimeString("en-US", { hour: "numeric" });

  return (
    <section className="flex flex-col gap-4 justify-between border rounded-lg">
      <div className="flex flex-col gap-2">
        <Image image={placeholderImage} className="w-full" />
        <div className="p-4">
          <h3 className="text-2xl text-brand-blue font-bold">{event.name}</h3>
          <div className="flex gap-2 text-gray-600 text-sm">
            <span>{startDate}</span>
            <span>|</span>
            <span>{startTime}</span>
          </div>
          <p className="text-zinc-800 mt-4">{event.description}</p>

          <a href="#" className="w-fit mt-4">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

const Events = ({ events }: EventsProps) => {
  return (
    <section className="flex flex-col gap-8 bg-gray-50 py-8 w-full md:px-32 px-4">
      <h2 className="font-bold text-brand-blue text-4xl text-center">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-8">
        {events.c_featuredEvents.map((event: Event, i) => (
          <EventCard
            event={event}
            key={i}
            placeholderImage={events.c_eventPlaceholder}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
