import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { IoMdExit } from "react-icons/io";
import { Button } from "../button";
import { InputSearch } from "../input";

const contacts = [
  {
    id: 1,
    name: "teste 1",
    lastmessage: {
      content: "menssagem teste",
      createAt: new Date(),
    },
  },
  {
    id: 2,
    name: "teste 2",
    lastmessage: {
      content: "menssagem teste 2",
      createAt: new Date(),
    },
  },
  {
    id: 3,
    name: "teste 3",
    lastmessage: {
      content: "menssagem teste 3",
      createAt: new Date(),
    },
  },
  {
    id: 4,
    name: "teste 4",
    lastmessage: {
      content: "menssagem teste 4",
      createAt: new Date(),
    },
  },
];

export const SideBar = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className="w-1/3 h-screen border-r">
      <header className="w-full h-16 py-2.5 px-4 flex justify-between">
        <div className="flex items-center gap-2 text-white">
          <p>{user?.name}</p>
        </div>
        <Button type="button" onClick={() => signOut()}>
          <IoMdExit />
          Sair
        </Button>
      </header>
      <div>
        <div className="w-full py-2.5 px-4">
          <InputSearch />
        </div>
        <div className="w-full px-3">
          {contacts?.map((contact) => (
            <div
              key={contact.id}
              className="flex justify-between items-center p-5 border-t border-zinc-600"
            >
              <p>{contact.name}</p>
              <p>{contact.lastmessage.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
