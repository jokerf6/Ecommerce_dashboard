"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
type ProfileFormProps = {
  formSchema: any;
  defaultValues: Record<string, any>;
  fields: Field[];
};
type Field = {
  name: string;
  placeholder: string;
  label: string;
};
export function ProfileForm(props: ProfileFormProps) {
  const { formSchema, defaultValues, fields } = props;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // ✅ This will be type-safe and validated.
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        {fields.map(
          (
            item: {
              name: string;
              label: string;
              placeholder: string;
              type: string;
            },
            idx: number
          ) => {
            return (
              <FormField
                key={idx}
                control={form.control}
                name={item.name}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>{item.label}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={item.placeholder}
                          type={item.type}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            );
          }
        )}
        <div className=" flex flex-row-reverse">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
}
