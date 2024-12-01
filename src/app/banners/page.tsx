"use client";
import React, { useEffect } from "react";
import { z } from "zod";
import { useFormStore } from "@/state/formStore";
import FormWithTable from "@/components/formWithTable.component";

export default function page() {
  const { setFormSchema, setDefaultValues, setFields } = useFormStore();

  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];
  useEffect(() => {
    setFormSchema(
      z.object({
        username: z
          .string()
          .min(2, { message: "Username must be at least 2 characters" }),
      })
    );
    setDefaultValues({
      username: "John Doe",
    });
    setFields([
      {
        name: "username",
        label: "Username",
        placeholder: "Enter your username",
      },
    ]);
  }, []);

  return <FormWithTable data={data} />;
}
