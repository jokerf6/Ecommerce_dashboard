"use client";
import FormModule from "@/components/form/module";
import { columns } from "@/components/table/column.component";
import { DataTable } from "@/components/table/dataTable.component";
import React from "react";
import { useFormStore } from "@/state/formStore";
import RootLayout from "@/app/layouts/layout";
import { ColumnDef, flexRender } from "@tanstack/react-table";

export default function FormWithTable(props: { data: any }) {
  const formSchema = useFormStore((state) => state.formSchema);
  const defaultValues = useFormStore((state) => state.defaultValues);
  const fields = useFormStore((state) => state.fields);
  const columns = useFormStore((state) => state.columns);
  const filter = useFormStore((state) => state.filter);
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

          <DataTable
            columns={columns}
            data={props.data}
            renderHeader={(header) => (
              <div className="flex items-center space-x-2">
                <span className=" font-bold">
                  {header.column.columnDef.header}
                </span>
              </div>
            )}
            filter={filter}
          />
        </div>
      </div>
    </RootLayout>
  );
}
