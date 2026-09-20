import { useForm } from "react-hook-form";
import { validationContactSchema } from "@/Utils/Validation/validation.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useState } from "react";
import useJson from "./useJson.js";

export default function useContact() {
      const { t} =useJson();
    
    const [status, setStatus] = useState("");

    const schema = useMemo(() => validationContactSchema(t), [t]); const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });



    const onSubmit = async (data) => {
        // setIsSending(true);
        setStatus("");
        const response = await fetch("https://formspree.io/f/mzezdlan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setStatus("success");
            reset();
            setTimeout(() => {
                setStatus("");
            }, 3000);
        } else {
            setStatus("error");
            setTimeout(() => {
                setStatus("");
            }, 3000);
        }
    };
    return {
        status, register,
        handleSubmit,
        errors,
        onSubmit
}
}
