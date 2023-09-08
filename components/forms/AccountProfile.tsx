'use client';

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
import { usePathname, useRouter } from 'next/navigation';
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
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      profile_photo: user.image,
      name: user.name,
      username: '',
      bio: '',
    },
  });
  const handleSubmit = async (values: any) => {
    console.log(values);

    await updateUser({
      name: values.name,
      username: values.username,
      userId: user.id,
      bio: values.bio,
      image: values.profile_photo,
    });

    if (pathname === '/profile/edit') {
      router.back();
    } else {
      router.push('/');
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col justify-center gap-10">
        <FormField
          control={form.control}
          name="profile_photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base-semibold text-light-2">
                Avatar
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base-semibold text-light-2">
                Name
              </FormLabel>
              <FormControl>
                <Input {...field} className='account-form_input no-focus'/>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base-semibold text-light-2">
                User Name
              </FormLabel>
              <FormControl>
                <Input {...field} className='account-form_input no-focus'/>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base-semibold text-light-2">
                Bio
              </FormLabel>
              <FormControl>
                <Input {...field} className='account-form_input no-focus'/>
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <Button type="submit" className="bg-primary-500">{btnTitle}</Button>
      </form>
    </Form>
  );
};

export default AccountProfile;
