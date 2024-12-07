"use client";
import React, { useEffect } from "react";
import { z } from "zod";
import { useFormStore } from "@/state/formStore";
import FormWithTable from "@/components/formWithTable.component";
import { ColumnDef } from "@tanstack/react-table";

export default function page() {
  const { setColumns, setFilter, setFormSchema, setDefaultValues, setFields } =
    useFormStore();

  const data = [
    {
      id: "728ed52f",
      title: "pending",
      image: "m@example.com",
      isActive: true,
    },
  ];
  useEffect(() => {
    setFormSchema(
      z.object({
        title: z
          .string()
          .min(2, { message: "title must be at least 2 characters" }),
        image: z
          .instanceof(File)
          .refine((file) => file.type.startsWith("image/"), {
            message: "File must be an image (jpeg, png, gif, etc.)",
          })
          .refine((file) => file.size <= 5 * 1024 * 1024, {
            message: "File size must be less than 5MB",
          }),
      })
    );
    setDefaultValues({});
    setFields([
      {
        name: "title",
        label: "Title",
        placeholder: "Enter your banner title",
        type: "text",
      },
      {
        name: "file",
        label: "Banner image",
        placeholder: "Select Banner Image",
        type: "file",
      },
    ]);
    setColumns([
      {
        accessorKey: "id",
        header: "Id",
      },
      {
        accessorKey: "title",
        header: "title",
      },
      {
        accessorKey: "image",
        header: "Banner",
      },
      {
        accessorKey: "isActive",
        header: "Status",
      },
    ]);
    setFilter({
      label: "Banners",
      column: "title",
    });
  }, [setFormSchema, setDefaultValues, setFields, setColumns, setFilter]); // ✅ Add dependencies

  return <FormWithTable data={data} />;
}
