import ContactBg from "@/Components/Contact/ContactBg/ContactBg.jsx";
import ContactDetails from "@/Components/Contact/ContactDetails/ContactDetails.jsx";
import ContactInfo from "@/Components/Contact/ContactInfo/ContactInfo.jsx";

export default function Contact() {
  return (
    <>
      <section className="min-h-screen ">
          <ContactBg />
        <div className="px-8">

          <ContactInfo />

          <ContactDetails />
        </div>
      </section>
    </>
  );
}
