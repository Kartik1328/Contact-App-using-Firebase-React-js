import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/Firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2"
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-5xl pt-[3px] text-[#ffa500]"/>
          <div className="pl-3 pt-[2px]">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl space-x-1">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer text-2xl mt-1" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;