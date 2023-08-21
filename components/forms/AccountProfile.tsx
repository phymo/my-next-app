"use client"

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { updateUser } from '@/lib/actions/user.actions';
import { Button } from '@/components/ui/button';

interface Props {
  user: {
    objectId: string;
    id: string;
    username: string;
    name: string;
    image: string;
    bio: string;
  },
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle}: Props) => {
  const form = useForm({
    defaultValues: {
      profile_photo: user.image,
      name: user.name,
      username: '',
      bio: '',
    }
  });
  const handleSubmit = async (values: any) => {
    console.log(values);

    await updateUser({
      name: values.name,
      username: values.username,
      userId: user.id,
      bio: values.bio,
      image: values.profile_photo,
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name='profile_photo'
          render={({ field }) => (<FormItem><FormLabel>Avatar</FormLabel><FormControl>
            <Input {...field} /></FormControl></FormItem>)}
        ></FormField>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (<FormItem><FormLabel>Name</FormLabel><FormControl>
          <Input {...field} /></FormControl></FormItem>)}></FormField>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (<FormItem><FormLabel>User Name</FormLabel><FormControl>
          <Input {...field} /></FormControl></FormItem>)}></FormField>
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (<FormItem><FormLabel>Bio</FormLabel><FormControl>
          <Input {...field} /></FormControl></FormItem>)}></FormField>
        <Button type='submit'>{btnTitle}</Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
