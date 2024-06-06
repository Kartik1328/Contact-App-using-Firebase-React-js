import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/Firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-lg text-[#ffa500] font-medium" htmlFor="name">Name</label>
              <Field name="name" className="h-10 border rounded-md pl-2" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className ="text-lg text-[#ffa500] font-medium" htmlFor="email">Email</label>
              <Field name="email" className="h-10 border rounded-md pl-2" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button className="w-[150px] h-[40px] px-3 py-1.5 bg-[#ffa500] text-white font-semibold pl-2 rounded-md hover:bg-[#323334]">
              {isUpdate ? "Update" : "Add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;