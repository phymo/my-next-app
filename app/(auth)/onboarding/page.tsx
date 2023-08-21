import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();
  console.log(user);
  if(!user) return null;

  const userInfo = await fetchUser(user?.id);
  console.log(userInfo);

  const userData = {
    objectId: userInfo?._id,
    id: user.id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  }

  return (
    <main>
      <h1>Onboarding</h1>
      <p>Complete you profile to use</p>
      <section>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}

export default Page;
