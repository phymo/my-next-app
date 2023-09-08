import { useForm } from "react-hook-form";

import {
  Form,
  FormLabel,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";

export default function PostThread() {
  const form = useForm();
  return (
    <Form {...form}>
      <form action=""></form>
    </Form>
  );
}
