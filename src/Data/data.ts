// for some reason colors wasn't detected from vite-env.d.ts so had
// to copy it here...not sure why but didn't want to spend more time on it

enum Colors {
  Purple = "secondary",
  Blue = "primary",
  Green = "success",
}

export const eventsDB: DBEvent[] = [
  {
    Date: 1714253106,
    Name: "Test Event",
    Description: "Test description",
    Color: Colors.Blue,
  },

  {
    Date: 1714402800,
    Name: "Due Date",
    Color: Colors.Purple,
  },
  {
    Date: 1714427106,
    Name: "Test Event 2",
    Description: "Test description",
    Color: Colors.Blue,
  },
  {
    Date: 1714440306,
    Name: "Tired",
    Color: Colors.Green,
  },

  {
    Date: 1715382000,
    Name: "May Test Event",
    Description: "Hello there~",
    Color: Colors.Green,
  },
];

export const notificationsDB: {
  Date: number;
  Subject: string;
  Description: string;
}[] = [
  {
    Date: 1714208400,
    Subject: "New Booking",
    Description:
      "Sorry I rushed this a bit. I wanted to add functionality but was fighting against the devextreme components a lot to make it look good.",
  },
  {
    Date: 1714402800,
    Subject: "New Event",
    Description: "Hope you'll look past this horrid DB mockup.",
  },
  {
    Date: 1715382000,
    Subject: "Payment Processed",
    Description: "Thank you for looking at this~",
  },
];

export const mails: { Date: number; Subject: string; Description: string }[] = [
  {
    Date: 1714208400,
    Subject: "Totally Different From Notifications",
    Description:
      "Sorry I rushed this a bit. I wanted to add functionality but was fighting against the devextreme components a lot to make it look good.",
  },
  {
    Date: 1714402800,
    Subject: "New Event",
    Description: "Hope you'll look past this horrid DB mockup.",
  },
  {
    Date: 1715382000,
    Subject: "Payment Processed",
    Description: "Thank you for looking at this~",
  },
];

export const users: { Name: string; Avatar: string; Description: string }[] = [
  {
    Name: "Lily Craver",
    Avatar: "lilycraver",
    Description: "New Hire",
  },
  {
    Name: "Pidge",
    Avatar: "pidge",
    Description: "Nickname",
  },
];

export const chartDB = [
  {
    country: "UI",
    medals: 60,
  },
  {
    country: "Backend",
    medals: 40,
  },
];

export const amenitiesDB: {
  Name: string;
  Image: string;
  Description: string;
}[] = [
  {
    Name: "Swiming Pool",
    Image: "swimming",
    Description:
      "Bacon ipsum dolor amet alcatra fatback salami kielbasa shank picanha filet mignon.",
  },
  {
    Name: "Exercise Room",
    Image: "exercise",
    Description:
      "Bacon ipsum dolor amet alcatra fatback salami kielbasa shank picanha filet mignon.",
  },
  {
    Name: "Table Tennis",
    Image: "exercise",
    Description:
      "Table Tennis is great! Bacon ipsum is pretty silly but makes for a fun alternative.",
  },
];
