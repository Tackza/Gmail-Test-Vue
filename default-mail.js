import { uuid } from "./utils";

export default {
  columns: [
    {
      name: "inbox",
      mails: [
        {
          emailName: "aaa@gmail.com",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          name: "first mail",
          id: uuid(),
          stared: false,
          time: "Wed Oct 07 2020 17:01:08 GMT+0700 (Indochina Time)",
        },
        {
          emailName: "bbb@gmail.com",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          name: "second mail",
          id: uuid(),
          stared: false,
          time: "Wed Oct 07 2020 17:01:08 GMT+0700 (Indochina Time)",
        },
      ],
    },
    {
      name: "sendbox",
      mails: [
        {
          emailName: "aaa@gmail.com",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          name: "second mail",
          id: uuid(),
          stared: false,
          time: "Wed Oct 07 2020 17:01:08 GMT+0700 (Indochina Time)",
        },
      ],
    },
    {
      name: "bin",
      mails: [
        {
          emailName: "zzz@gmail.com",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          name: "second mail",
          id: uuid(),
          stared: false,
          time: "Wed Oct 07 2020 17:01:08 GMT+0700 (Indochina Time)",
        },
      ],
    },
  ],
};
