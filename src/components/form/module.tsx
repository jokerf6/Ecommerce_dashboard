"use client";
import React from "react";
import { ProfileForm } from ".";

type Field = {
  name: string;
  placeholder: string;
  label: string;
};

type ProfileFormProps = {
  formSchema: any;
  defaultValues: Record<string, any>;
  fields: Field[];
};

type FormModuleProps = {
  title: string;
} & ProfileFormProps;

export default function FormModule(props: FormModuleProps) {
  const { title, formSchema, fields, defaultValues } = props;

  return (
    <div className="w-full flex flex-col gap-4">
      <h1 className="text-xl font-bold">Create New {title}</h1>
      <ProfileForm
        formSchema={formSchema}
        fields={fields}
        defaultValues={defaultValues}
      />
    </div>
  );
}
