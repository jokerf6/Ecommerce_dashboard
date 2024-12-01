import { create } from "zustand";
import { z } from "zod";

// Define the type for the Zustand store
type FormStore = {
  formSchema: z.ZodObject<any> | null; // Schema can be a Zod object or null
  defaultValues: Record<string, any>; // Default values as a key-value map
  fields: { name: string; label: string; placeholder: string }[]; // Array of field definitions
  setFormSchema: (newSchema: z.ZodObject<any>) => void;
  setDefaultValues: (newValues: Record<string, any>) => void;
  setFields: (
    newFields: { name: string; label: string; placeholder: string }[]
  ) => void;
};

// Create the Zustand store with the defined type
export const useFormStore = create<FormStore>((set) => ({
  formSchema: null,
  defaultValues: {},
  fields: [],
  setFormSchema: (newSchema) => set({ formSchema: newSchema }),
  setDefaultValues: (newValues) => set({ defaultValues: newValues }),
  setFields: (newFields) => set({ fields: newFields }),
}));
