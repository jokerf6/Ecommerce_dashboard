import { create } from "zustand";
import { z } from "zod";

// Define the type for the Zustand store
type FormStore = {
  formSchema: z.ZodObject<any> | null; // Schema can be a Zod object or null
  defaultValues: Record<string, any>; // Default values as a key-value map
  fields: { name: string; label: string; placeholder: string }[]; // Array of field definitions
  columns: any;
  filter: { label: string; column: string };
  setFormSchema: (newSchema: z.ZodObject<any>) => void;
  setDefaultValues: (newValues: Record<string, any>) => void;
  setColumns: (newValue: any) => void;
  setFilter: (newValue: { label: string; column: string }) => void;
  setFields: (
    newFields: {
      name: string;
      label: string;
      placeholder: string;
      type: string;
    }[]
  ) => void;
};

// Create the Zustand store with the defined type
export const useFormStore = create<FormStore>((set) => ({
  formSchema: null,
  defaultValues: {},
  fields: [],
  columns: [],
  filter: { label: "", column: "" },
  setColumns: (newValue) => set({ columns: newValue }),
  setFilter: (newValue) => set({ filter: newValue }),
  setFormSchema: (newSchema) => set({ formSchema: newSchema }),
  setDefaultValues: (newValues) => set({ defaultValues: newValues }),
  setFields: (newFields) => set({ fields: newFields }),
}));
