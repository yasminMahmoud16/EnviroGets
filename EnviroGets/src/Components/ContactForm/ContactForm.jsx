
import useContact from "@/Hooks/useContact.js";
import useJson from "@/Hooks/useJson.js";

export default function ContactForm() {
  // const [ isSending,setIsSending] = useState(false);
  const { isArabic ,t} =useJson();
  const { status, register, handleSubmit, errors, onSubmit } = useContact();



    return (
      <>
        <div className=" w-full  mx-auto p-6 border border-[#4FA14B] rounded-2xl shadow-md" dir={`${isArabic?"":"ltr"}`}>
          <h2 className="text-2xl font-normal text-[#1A5C2C] mb-2 leading-none">
            {t("contact.title2")}
          </h2>
          <p className="text-sm text-[#6B6B6B]   font-normal my-6 whitespace-break-spaces leading-tight">
            {t("contact.description2")}
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* name */}
            <div>
              <label className="block text-md font-semibold text-[#1A5C2C] leading-[1.65] mb-2">
                {t("contact.name.label")}
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D7A45]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* reason */}
            <div>
              <label className="block text-md font-semibold text-[#1A5C2C] leading-[1.65] mb-2">
                {t("contact.reason.label")}
              </label>
              <input
                type="text"
                {...register("reason")}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D7A45]"
              />
              {errors.reason && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.reason.message}
                </p>
              )}
            </div>
            {/* email + phone*/}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-semibold text-[#1A5C2C] leading-[1.65] mb-2">
                  {t("contact.email2.label")}
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D7A45]"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-md font-semibold text-[#1A5C2C] leading-[1.65] mb-2">
                  {t("contact.phone2.label")}
                </label>

                <div
                  dir="ltr"
                  className="flex border border-gray-300 rounded-lg overflow-hidden"
                >
                  <select
                    {...register("countryCode")}
                    defaultValue="+966"
                    className="bg-[#E9F3DE] text-xs px-2 rounded-sm text-[#1A5C2C] font-semibold focus:outline-none"
                  >
                    <option value="+966">SA +966</option>
                    <option value="+971">AE +971</option>
                    <option value="+20">EG +20</option>
                    <option value="+974">QA +974</option>
                  </select>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="flex-1 px-3 py-2 text-sm focus:outline-none min-w-0"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* message */}
            <div>
              <label className="block text-md font-semibold text-[#1A5C2C] leading-[1.65] mb-2">
                {t("contact.message.label")}
              </label>
              <textarea
                rows={4}
                {...register("message")}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D7A45] resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-[#2D7A45] hover:bg-[#256339] text-white font-semibold px-8 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                {t("contact.button")}
              </button>
            </div>

            <div>
              {status === "success" && (
                <p className="text-green-600 text-sm font-semibold mt-3">
                  {isArabic
                    ? "تم إرسال الرسالة بنجاح"
                    : "Message sent successfully"}
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm font-semibold mt-3">
                  {isArabic
                    ? "حدث خطأ، برجاء المحاولة مرة أخرى"
                    : "Something went wrong. Please try again."}
                </p>
              )}
            </div>
          </form>
        </div>

      </>
    );

}
