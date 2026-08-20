import { type ChangeEvent, type FormEvent, useState } from "react";

type ContactFormData = {
    name: string;
    email: string;
    company: string;
    message: string;
};

const initialForm: ContactFormData = {
    name: "",
    email: "",
    company: "",
    message: "",
};

export const useContactForm = () => {
    const [form, setForm] = useState<ContactFormData>(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
            setError("Заполните имя, рабочий email и название компании.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            setError("Укажите корректный email.");
            return;
        }

        setError("");
        setSubmitted(true);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: event.target.value });
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, email: event.target.value });
    };

    const handleCompanyChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, company: event.target.value });
    };

    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setForm({ ...form, message: event.target.value });
    };

    const handleNewRequest = () => {
        setForm(initialForm);
        setError("");
        setSubmitted(false);
    };

    return {
        form,
        submitted,
        error,
        handleSubmit,
        handleNameChange,
        handleEmailChange,
        handleCompanyChange,
        handleMessageChange,
        handleNewRequest,
    };
};
