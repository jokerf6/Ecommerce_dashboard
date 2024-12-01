"use client";
import { ProfileForm } from "@/components/form";
import FormModule from "@/components/form/module";
import { columns } from "@/components/table/column.component";
import { DataTable } from "@/components/table/dataTable.component";
import React, { useEffect } from "react";
import { z } from "zod";
import { useFormStore } from "@/state/formStore";
import RootLayout from "@/app/layouts/layout";

export default function FormWithTable(props: { data: any }) {
  const { formSchema, defaultValues, fields } = useFormStore();

  const data = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
  ];

  return (
    <RootLayout>
      <div className=" px-main">
        <div className=" flex flex-col gap-4">
          <FormModule
            title="Banner"
            formSchema={formSchema}
            defaultValues={defaultValues}
            fields={fields}
          />

          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </RootLayout>
  );
}
