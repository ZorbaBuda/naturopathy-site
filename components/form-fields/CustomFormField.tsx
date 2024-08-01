"use client";
import { Control } from "react-hook-form";
import Image from "next/image";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage } from "../ui/form"
import { Input} from "../ui/input"
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { FormFieldType } from "@/constants";

interface CustomProps{
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    fieldType,
    placeholder,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
  } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
        
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );

      case FormFieldType.TEXTAREA:
        return (
          <FormControl>
            <Textarea 
             placeholder={placeholder}
             {...field}
             className="shad-textArea"
             disabled={props.disabled}
             />
          </FormControl>
        );
      
      case FormFieldType.CHECKBOX:
        return (
          <FormControl>
            <div className="flex items-center gap-4">
              <Checkbox 
               id={props.name}
               checked={field.value}
               onCheckedChange={field.onChange}
               />
               <label htmlFor={props.name}
                className="checkbox-label">
                  {props.label}
                </label>
            </div>
          </FormControl>
        )

    default:
      break;
  }
};


const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
