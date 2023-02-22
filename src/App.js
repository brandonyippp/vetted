import React, { useState, useEffect, useRef } from "react";

/* Global Variables */
const PanelTypes = {
  Users: "Users",
  Chat: "Chat",
  Jobs: "Jobs",
};
const AuthorTypes = {
  representative: "representative",
  user: "user",
};
const BackgroundColourLiterals = [
  "bg-slate-50",
  "bg-slate-100",
  "bg-slate-200",
  "bg-slate-300",
  "bg-gray-50",
  "bg-gray-100",
  "bg-gray-200",
  "bg-gray-300",
  "bg-zinc-50",
  "bg-zinc-100",
  "bg-zinc-200",
  "bg-zinc-300",
  "bg-neutral-50",
  "bg-neutral-100",
  "bg-neutral-200",
  "bg-neutral-300",
  "bg-stone-50",
  "bg-stone-100",
  "bg-stone-200",
  "bg-stone-300",
  "bg-red-50",
  "bg-red-100",
  "bg-red-200",
  "bg-red-300",
  "bg-orange-50",
  "bg-orange-100",
  "bg-orange-200",
  "bg-orange-300",
  "bg-amber-50",
  "bg-amber-100",
  "bg-amber-200",
  "bg-amber-300",
  "bg-yellow-50",
  "bg-yellow-100",
  "bg-yellow-200",
  "bg-yellow-300",
  "bg-lime-50",
  "bg-lime-100",
  "bg-lime-200",
  "bg-lime-300",
  "bg-green-50",
  "bg-green-100",
  "bg-green-200",
  "bg-green-300",
  "bg-emerald-50",
  "bg-emerald-100",
  "bg-emerald-200",
  "bg-emerald-300",
  "bg-teal-50",
  "bg-teal-100",
  "bg-teal-200",
  "bg-teal-300",
  "bg-cyan-50",
  "bg-cyan-100",
  "bg-cyan-200",
  "bg-cyan-300",
  "bg-sky-50",
  "bg-sky-100",
  "bg-sky-200",
  "bg-sky-300",
  "bg-blue-50",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-indigo-50",
  "bg-indigo-100",
  "bg-indigo-200",
  "bg-indigo-300",
  "bg-violet-50",
  "bg-violet-100",
  "bg-violet-200",
  "bg-violet-300",
  "bg-purple-50",
  "bg-purple-100",
  "bg-purple-200",
  "bg-purple-300",
  "bg-fuchsia-50",
  "bg-fuchsia-100",
  "bg-fuchsia-200",
  "bg-fuchsia-300",
  "bg-pink-50",
  "bg-pink-100",
  "bg-pink-200",
  "bg-pink-300",
  "bg-rose-50",
  "bg-rose-100",
  "bg-rose-200",
  "bg-rose-300",
];
const TextColourLiterals = [
  "text-slate-600",
  "text-slate-700",
  "text-slate-800",
  "text-slate-900",
  "text-gray-600",
  "text-gray-700",
  "text-gray-800",
  "text-gray-900",
  "text-zinc-600",
  "text-zinc-700",
  "text-zinc-800",
  "text-zinc-900",
  "text-neutral-600",
  "text-neutral-700",
  "text-neutral-800",
  "text-neutral-900",
  "text-stone-600",
  "text-stone-700",
  "text-stone-800",
  "text-stone-900",
  "text-red-600",
  "text-red-700",
  "text-red-800",
  "text-red-900",
  "text-orange-600",
  "text-orange-700",
  "text-orange-800",
  "text-orange-900",
  "text-amber-600",
  "text-amber-700",
  "text-amber-800",
  "text-amber-900",
  "text-yellow-600",
  "text-yellow-700",
  "text-yellow-800",
  "text-yellow-900",
  "text-lime-600",
  "text-lime-700",
  "text-lime-800",
  "text-lime-900",
  "text-green-600",
  "text-green-700",
  "text-green-800",
  "text-green-900",
  "text-emerald-600",
  "text-emerald-700",
  "text-emerald-800",
  "text-emerald-900",
  "text-teal-600",
  "text-teal-700",
  "text-teal-800",
  "text-teal-900",
  "text-cyan-600",
  "text-cyan-700",
  "text-cyan-800",
  "text-cyan-900",
  "text-sky-600",
  "text-sky-700",
  "text-sky-800",
  "text-sky-900",
  "text-blue-600",
  "text-blue-700",
  "text-blue-800",
  "text-blue-900",
  "text-indigo-600",
  "text-indigo-700",
  "text-indigo-800",
  "text-indigo-900",
  "text-violet-600",
  "text-violet-700",
  "text-violet-800",
  "text-violet-900",
  "text-purple-600",
  "text-purple-700",
  "text-purple-800",
  "text-purple-900",
  "text-fuchsia-600",
  "text-fuchsia-700",
  "text-fuchsia-800",
  "text-fuchsia-900",
  "text-pink-600",
  "text-pink-700",
  "text-pink-800",
  "text-pink-900",
  "text-rose-600",
  "text-rose-700",
  "text-rose-800",
  "text-rose-900",
];
const Representative = {
  name: "Juliana Roberts",
};

const App = () => {
  /* Mock User Data */
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "Brandon Yip",
      title: "RN - ICU",
      representative: {
        name: null,
        unsubmittedMessage: "",
      },
      lastMessageTimestamp: new Date(),
      jobs: [
        {
          id: "19058089305",
          name: "Travel ICU Nurse - Intensive Care",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 5420,
          payPeriod: "week",
          startDate: "ASAP",
        },
        {
          id: "19058089305",
          name: "Travel ICU Nurse - Intensive Care",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 4444,
          payPeriod: "week",
          startDate: "ASAP",
        },
        {
          id: "19058089305",
          name: "Travel ICU Nurse - Intensive Care",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 3333,
          payPeriod: "week",
          startDate: "ASAP",
        },
        {
          id: "19058089305",
          name: "Travel ICU Nurse - Intensive Care",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 2222,
          payPeriod: "week",
          startDate: "ASAP",
        },
      ],
      logs: [
        {
          author: AuthorTypes.user,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nisi dui. Duis venenatis nunc in sem fermentum dictum. Suspendisse eget diam ac arcu ornare pulvinar non ut tellus. Aenean fringilla lectus vitae velit sagittis faucibus. Donec sed enim vel nunc sollicitudin lacinia. Phasellus tempor cursus nunc, ut tincidunt diam mollis eu. Pellentesque eget sapien consectetur, dignissim nulla sit amet, eleifend mi. Nam viverra volutpat tristique. Praesent commodo faucibus aliquet. Suspendisse volutpat posuere leo, in porta eros tempus eget.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.representative,
          message:
            "Sed nec lacus eu neque scelerisque fringilla ornare in dui. Maecenas pharetra eleifend nulla eu auctor. Nullam felis tortor, auctor nec nulla at, ultrices tincidunt tellus. Integer imperdiet ligula eu metus suscipit laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lobortis justo a molestie interdum. Suspendisse potenti. Integer tempor nunc pellentesque euismod placerat.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.user,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nisi dui. Duis venenatis nunc in sem fermentum dictum. Suspendisse eget diam ac arcu ornare pulvinar non ut tellus. Aenean fringilla lectus vitae velit sagittis faucibus. Donec sed enim vel nunc sollicitudin lacinia. Phasellus tempor cursus nunc, ut tincidunt diam mollis eu. Pellentesque eget sapien consectetur, dignissim nulla sit amet, eleifend mi. Nam viverra volutpat tristique. Praesent commodo faucibus aliquet. Suspendisse volutpat posuere leo, in porta eros tempus eget.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.representative,
          message:
            "Sed nec lacus eu neque scelerisque fringilla ornare in dui. Maecenas pharetra eleifend nulla eu auctor. Nullam felis tortor, auctor nec nulla at, ultrices tincidunt tellus. Integer imperdiet ligula eu metus suscipit laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lobortis justo a molestie interdum. Suspendisse potenti. Integer tempor nunc pellentesque euismod placerat.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.user,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nisi dui. Duis venenatis nunc in sem fermentum dictum. Suspendisse eget diam ac arcu ornare pulvinar non ut tellus. Aenean fringilla lectus vitae velit sagittis faucibus. Donec sed enim vel nunc sollicitudin lacinia. Phasellus tempor cursus nunc, ut tincidunt diam mollis eu. Pellentesque eget sapien consectetur, dignissim nulla sit amet, eleifend mi. Nam viverra volutpat tristique. Praesent commodo faucibus aliquet. Suspendisse volutpat posuere leo, in porta eros tempus eget.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.representative,
          message:
            "Sed nec lacus eu neque scelerisque fringilla ornare in dui. Maecenas pharetra eleifend nulla eu auctor. Nullam felis tortor, auctor nec nulla at, ultrices tincidunt tellus. Integer imperdiet ligula eu metus suscipit laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lobortis justo a molestie interdum. Suspendisse potenti. Integer tempor nunc pellentesque euismod placerat.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.user,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nisi dui. Duis venenatis nunc in sem fermentum dictum. Suspendisse eget diam ac arcu ornare pulvinar non ut tellus. Aenean fringilla lectus vitae velit sagittis faucibus. Donec sed enim vel nunc sollicitudin lacinia. Phasellus tempor cursus nunc, ut tincidunt diam mollis eu. Pellentesque eget sapien consectetur, dignissim nulla sit amet, eleifend mi. Nam viverra volutpat tristique. Praesent commodo faucibus aliquet. Suspendisse volutpat posuere leo, in porta eros tempus eget.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.representative,
          message:
            "Sed nec lacus eu neque scelerisque fringilla ornare in dui. Maecenas pharetra eleifend nulla eu auctor. Nullam felis tortor, auctor nec nulla at, ultrices tincidunt tellus. Integer imperdiet ligula eu metus suscipit laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lobortis justo a molestie interdum. Suspendisse potenti. Integer tempor nunc pellentesque euismod placerat.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.user,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nisi dui. Duis venenatis nunc in sem fermentum dictum. Suspendisse eget diam ac arcu ornare pulvinar non ut tellus. Aenean fringilla lectus vitae velit sagittis faucibus. Donec sed enim vel nunc sollicitudin lacinia. Phasellus tempor cursus nunc, ut tincidunt diam mollis eu. Pellentesque eget sapien consectetur, dignissim nulla sit amet, eleifend mi. Nam viverra volutpat tristique. Praesent commodo faucibus aliquet. Suspendisse volutpat posuere leo, in porta eros tempus eget.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.representative,
          message:
            "Sed nec lacus eu neque scelerisque fringilla ornare in dui. Maecenas pharetra eleifend nulla eu auctor. Nullam felis tortor, auctor nec nulla at, ultrices tincidunt tellus. Integer imperdiet ligula eu metus suscipit laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lobortis justo a molestie interdum. Suspendisse potenti. Integer tempor nunc pellentesque euismod placerat.",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: 1,
      name: "Tommy Adler",
      title: "RN - ICU",
      representative: {
        name: null,
        unsubmittedMessage: "",
      },
      lastMessageTimestamp: new Date(),
      jobs: [
        {
          id: "19058089305",
          name: "Travel ICU Nurse - Urgent Care",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 4444,
          payPeriod: "week",
          startDate: "ASAP",
        },
        {
          id: "19058089305",
          name: "Travel ICU Nurse - Upkeep",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 3333,
          payPeriod: "week",
          startDate: "ASAP",
        },
        {
          id: "19058089305",
          name: "Monitoring",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 2222,
          payPeriod: "week",
          startDate: "ASAP",
        },
      ],
      logs: [
        {
          author: AuthorTypes.user,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nisi dui. Duis venenatis nunc in sem fermentum dictum. Suspendisse eget diam ac arcu ornare pulvinar non ut tellus. Aenean fringilla lectus vitae velit sagittis faucibus. Donec sed enim vel nunc sollicitudin lacinia. Phasellus tempor cursus nunc, ut tincidunt diam mollis eu. Pellentesque eget sapien consectetur, dignissim nulla sit amet, eleifend mi. Nam viverra volutpat tristique. Praesent commodo faucibus aliquet. Suspendisse volutpat posuere leo, in porta eros tempus eget.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.representative,
          message:
            "Sed nec lacus eu neque scelerisque fringilla ornare in dui. Maecenas pharetra eleifend nulla eu auctor. Nullam felis tortor, auctor nec nulla at, ultrices tincidunt tellus. Integer imperdiet ligula eu metus suscipit laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lobortis justo a molestie interdum. Suspendisse potenti. Integer tempor nunc pellentesque euismod placerat.",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: 2,
      name: "John Doe",

      title: "RN - ICU",
      representative: {
        name: null,
        unsubmittedMessage: "",
      },
      lastMessageTimestamp: new Date(),
      jobs: [
        {
          id: "19058089305",
          name: "Floater",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 3333,
          payPeriod: "week",
          startDate: "ASAP",
        },
        {
          id: "19058089305",
          name: "General Practitioner",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 2222,
          payPeriod: "week",
          startDate: "ASAP",
        },
      ],
      logs: [
        {
          author: AuthorTypes.user,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nisi dui. Duis venenatis nunc in sem fermentum dictum. Suspendisse eget diam ac arcu ornare pulvinar non ut tellus. Aenean fringilla lectus vitae velit sagittis faucibus. Donec sed enim vel nunc sollicitudin lacinia. Phasellus tempor cursus nunc, ut tincidunt diam mollis eu. Pellentesque eget sapien consectetur, dignissim nulla sit amet, eleifend mi. Nam viverra volutpat tristique. Praesent commodo faucibus aliquet. Suspendisse volutpat posuere leo, in porta eros tempus eget.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.representative,
          message:
            "Sed nec lacus eu neque scelerisque fringilla ornare in dui. Maecenas pharetra eleifend nulla eu auctor. Nullam felis tortor, auctor nec nulla at, ultrices tincidunt tellus. Integer imperdiet ligula eu metus suscipit laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lobortis justo a molestie interdum. Suspendisse potenti. Integer tempor nunc pellentesque euismod placerat.",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: 3,
      name: "Evan Oolong",
      title: "RN - ICU",
      representative: {
        name: null,
        unsubmittedMessage: "",
      },
      lastMessageTimestamp: new Date(),
      jobs: [
        {
          id: "19058089305",
          name: "Mobile",
          location: "Freshno California",
          sessions: "3 x 12",
          duration: "13 weeks",
          pay: 2222,
          payPeriod: "week",
          startDate: "ASAP",
        },
      ],
      logs: [
        {
          author: AuthorTypes.user,
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nisi dui. Duis venenatis nunc in sem fermentum dictum. Suspendisse eget diam ac arcu ornare pulvinar non ut tellus. Aenean fringilla lectus vitae velit sagittis faucibus. Donec sed enim vel nunc sollicitudin lacinia. Phasellus tempor cursus nunc, ut tincidunt diam mollis eu. Pellentesque eget sapien consectetur, dignissim nulla sit amet, eleifend mi. Nam viverra volutpat tristique. Praesent commodo faucibus aliquet. Suspendisse volutpat posuere leo, in porta eros tempus eget.",
          timestamp: new Date(),
        },
        {
          author: AuthorTypes.representative,
          message:
            "Sed nec lacus eu neque scelerisque fringilla ornare in dui. Maecenas pharetra eleifend nulla eu auctor. Nullam felis tortor, auctor nec nulla at, ultrices tincidunt tellus. Integer imperdiet ligula eu metus suscipit laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus lobortis justo a molestie interdum. Suspendisse potenti. Integer tempor nunc pellentesque euismod placerat.",
          timestamp: new Date(),
        },
      ],
    },
  ]);
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [isProfile, setIsProfile] = useState(true);
  const [message, setMessage] = useState("");

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers(
      users.map((user) => {
        if (currentUser.id === user.id) {
          const userCopy = {
            ...user,
            lastMessageTimestamp: new Date(),
            representative: {
              ...user.representative,
              unsubmittedMessage: "",
            },
            logs: [
              ...user.logs,
              {
                author: AuthorTypes.representative,
                message: message,
                timestamp: new Date(),
              },
            ],
          };
          setCurrentUser(userCopy);
          return userCopy;
        } else {
          return user;
        }
      })
    );
  };

  useEffect(() => {
    setUsers(
      users.sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp)
    );
  }, [users]);

  useEffect(() => {
    scrollToBottom();
    setMessage(currentUser.representative.unsubmittedMessage);
  }, [currentUser]);

  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar />
      <div className="flex flex-row justify-evenly h-screen min-w-[1100px]">
        <Panel
          className="border border-gray-300 flex flex-col bg-white w-[20%] min-w-[300px]"
          users={users}
          type={PanelTypes.Users}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
        <Panel
          className="border border-gray-300 flex flex-col bg-gray-200 w-[60%] overflow-y-hidden min-w-[500px]"
          type={PanelTypes.Chat}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          users={users}
          setUsers={setUsers}
          message={message}
          setMessage={setMessage}
          handleSubmit={handleSubmit}
          messagesEndRef={messagesEndRef}
        />
        <Panel
          className="border border-gray-300 flex flex-col bg-white w-[20%] min-w-[300px]"
          type={PanelTypes.Jobs}
          currentUser={currentUser}
          isProfile={isProfile}
          setIsProfile={setIsProfile}
        />
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="flex flex-row bg-black justify-between h-14 min-h-[50px] items-center overflow-hidden">
      <div className="flex text-white overflow-hidden ml-5 cursor-default font">
        vetted
      </div>
      <div className="flex text-white overflow-hidden mr-5 bg-gray-800 px-4 py-1 rounded-md cursor-default">
        {Representative.name.split(" ")[0]}
      </div>
    </div>
  );
};

const Panel = (props) => {
  return (
    <div className={props.className}>
      <Header
        type={props.type}
        currentUser={props.currentUser}
        isProfile={props.isProfile}
        setIsProfile={props.setIsProfile}
        length={
          props.type === PanelTypes.Jobs && props.currentUser
            ? props.currentUser.jobs.length
            : null
        }
      />
      <div
        className={`flex flex-col ${
          props.type === PanelTypes.Chat
            ? "px-8 py-4"
            : props.type === PanelTypes.Users
            ? "px-2 py-4"
            : ""
        }`}
      >
        {props.type === PanelTypes.Users ? (
          props.users.map((user) => (
            <PanelItem
              key={user.id}
              type={props.type}
              user={user}
              currentUser={props.currentUser}
              setCurrentUser={props.setCurrentUser}
            />
          ))
        ) : props.type === PanelTypes.Chat ? (
          <>
            <div className="h-[80vh] no-scrollbar">
              <div className="flex flex-col">
                {props.currentUser.logs.map((log, index) => (
                  <PanelItem log={log} type={props.type} key={index} />
                ))}
                <div ref={props.messagesEndRef} />
              </div>
            </div>
            <div className="flex flex-col h-24 mt-6 border overflow-y-hidden">
              <div className="flex flex-row h-14 min-h-[50px] mt-1 justify-between items-center py-2 pr-2 pl-5 bg-white rounded-xl shadow overflow-y-hidden">
                <div className="flex flex-row justify-between w-[100%] items-center">
                  {props.currentUser.representative.name ? (
                    <div className="relative w-4/5 h-full py-2 overflow-y-hidden">
                      <form
                        className="h-full py-2 overflow-y-hidden"
                        onSubmit={(e) => props.handleSubmit(e)}
                      >
                        <input
                          type="text"
                          name="message"
                          className="w-[100%] min-h-full outline-none"
                          value={props.message}
                          onChange={(e) => {
                            props.setMessage(e.target.value);
                            props.currentUser.representative.unsubmittedMessage =
                              e.target.value;
                          }}
                        />
                        {props.message === "" ? (
                          <div className="flex border bg-gray-400 rounded-2xl p-2 absolute -mt-8 text-sm pointer-events-none opacity-30">
                            Replying as{" "}
                            <b>
                              &nbsp;
                              {
                                props.currentUser.representative.name.split(
                                  " "
                                )[0]
                              }
                            </b>
                          </div>
                        ) : null}
                      </form>
                    </div>
                  ) : (
                    <button
                      className="bg-gray-200 h-fit rounded-md px-3 py-1 font-semibold"
                      onClick={() => {
                        props.setUsers(
                          props.users.map((user) => {
                            if (props.currentUser.id === user.id) {
                              const userCopy = {
                                ...user,
                                representative: {
                                  ...user.representative,
                                  name: Representative.name,
                                },
                              };
                              props.setCurrentUser(userCopy);
                              return userCopy;
                            } else {
                              return user;
                            }
                          })
                        );
                      }}
                    >
                      Assign myself and reply
                    </button>
                  )}
                  <button
                    className="bg-gray-200 rounded-md px-3 py-1 font-semibold h-10"
                    onClick={(e) => props.handleSubmit(e)}
                  >
                    Send
                  </button>
                </div>
              </div>
              {props.currentUser.representative.name ? (
                <span
                  className="text-blue-600 font-semibold text-xs ml-1 mt-1 cursor-pointer"
                  onClick={() => {
                    props.setUsers(
                      props.users.map((user) => {
                        if (props.currentUser.id === user.id) {
                          const userCopy = {
                            ...user,
                            representative: {
                              ...user.representative,
                              name: null,
                            },
                          };
                          props.setCurrentUser(userCopy);
                          return userCopy;
                        } else {
                          return user;
                        }
                      })
                    );
                  }}
                >
                  Unassign Me
                </span>
              ) : null}
            </div>
          </>
        ) : (
          <div className="flex flex-col shrink-0">
            {props.currentUser.jobs.map((job, index) => (
              <PanelItem job={job} type={props.type} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Header = (props) => {
  const clickedStyle = "px-2 py-1 rounded-md bg-gray-200 font-bold";
  const unclickedStyle = "px-2 py-1 rounded-md bg-white";

  return props.type === PanelTypes.Chat ? (
    <div className="flex flex-col min-h-[75px] h-16 px-8 border-b-2 border-gray-300 justify-center">
      <span className="font-bold">{props.currentUser.name}</span>
      <span className=" font-medium text-gray-700">
        {props.currentUser.title}
      </span>
    </div>
  ) : (
    <div className="flex flex-row min-h-[75px] h-16 pl-5 border-b-2 border-gray-300 items-center">
      {props.type === PanelTypes.Users ? (
        <div className="font-bold">Unassigned</div>
      ) : (
        <div className="flex flex-row m-w-44 justify-between">
          <button
            className={props.isProfile ? clickedStyle : unclickedStyle}
            onClick={() => props.setIsProfile(true)}
          >
            Profile
          </button>
          <button
            className={props.isProfile ? unclickedStyle : clickedStyle}
            onClick={() => props.setIsProfile(false)}
          >
            Job Applications ({props.length ?? 0})
          </button>
        </div>
      )}
    </div>
  );
};

const PanelItem = (props) => {
  const obtainInitials = (sentence) => {
    return sentence.match(/\b\w/g).join("").toUpperCase();
  };
  const obtainDate = (time, onlyTime = false) => {
    /**
     * Returns a a string resembling a date such as Thu, 3:15 PM
     * onlyTime will return just the HH:DD format if true
     */
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const date = onlyTime
      ? time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      : days[time.getDay()] +
        " " +
        time.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

    return date;
  };
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const [randomIndex] = useState(
    Math.floor(Math.random() * BackgroundColourLiterals.length)
  );

  return props.type === PanelTypes.Users ? (
    <div
      className={
        props.currentUser.id === props.user.id
          ? "flex flex-row min-h-[75px] h-24 px-2 rounded-3xl items-center bg-gray-200 cursor-pointer"
          : "flex flex-row min-h-[75px] h-24 px-2 rounded-3xl items-center bg-white cursor-pointer"
      }
      onClick={() => {
        props.setCurrentUser(props.user);
      }}
    >
      <div
        className={`flex w-14 h-14 mr-3 text-center items-center rounded-3xl ${BackgroundColourLiterals[randomIndex]}`}
      >
        <span
          className={`flex ${TextColourLiterals[randomIndex]} font-bold m-auto`}
        >
          {obtainInitials(props.user.name)}
        </span>
      </div>
      <div className="flex flex-col w-[90%] mx-2 justify-center">
        <div className="flex flex-row justify-between">
          <span className="font-bold">{props.user.name}</span>
          <span className="text-xs italic font-semibold text-gray-700">
            {obtainDate(props.user.lastMessageTimestamp)}
          </span>
        </div>
        <div className=" max-h-7 text-ellipsis overflow-hidden whitespace-nowrap">
          {props.user.logs[props.user.logs.length - 1].message}
        </div>
      </div>
    </div>
  ) : props.type === PanelTypes.Chat ? (
    <div className="flex flex-col mb-8 items-end">
      <div
        className={`${
          props.log.author === AuthorTypes.representative
            ? "bg-violet-700 text-white"
            : "bg-white text-black"
        }
        rounded-2xl p-4 overflow-hidden w-fit text-left`}
      >
        <span className="font-semibold">{props.log.message}</span>
      </div>
      <div
        className={`flex items-center text-center ${
          props.log.author === AuthorTypes.user
            ? "justify-end"
            : "justify-start"
        } mt-2 font-semibold overflow-hidden`}
      >
        <span>{obtainDate(props.log.timestamp, true)}</span>
      </div>
    </div>
  ) : (
    <div className="border border-b-gray-300 border-x-0 border-t-0">
      <div className="flex flex-col pl-5 py-4 justify-center opacity-85 font-normal">
        <div className="flex flex-row justify-between w-fit items-center">
          <span className="font-bold text-xl opacity-100">
            ${numberWithCommas(props.job.pay)} per {props.job.payPeriod}
          </span>
          <span className="text-base"> &nbsp; Job ID {props.job.id}</span>
        </div>
        <span>{props.job.name}</span>
        <span>Unit in {props.job.location}</span>
        <span>
          Starts {props.job.startDate} • {props.job.sessions} •{" "}
          {props.job.duration}
        </span>
      </div>
    </div>
  );
};

export default App;
