import { factory, oneOf, primaryKey } from '@mswjs/data';
import { v4 } from 'uuid';

export const userDB = factory({
  pushToken: {
    id: primaryKey(() => v4()),
    token: () => 'ExponentPushToken[DPieg2AcbZ9-r0f3CqJIdG]',
  },
  user: {
    id: primaryKey(() => v4()),
    email: () => 'test@gmail.com',
    profileImage: () => 'https://avatars.githubusercontent.com/u/40460655?s=96&v=4',
    type: () => 0,
    pushToken: oneOf('pushToken'),
  },
});

userDB.user.create({
  email: 'insung9546@gmail.com',
  id: 'user-test',
  profileImage: 'https://avatars.githubusercontent.com/u/40460655?s=96&v=4',
  type: 1,
});

userDB.user.create({
  email: 'admin',
  id: 'admin-test',
  profileImage: 'https://avatars.githubusercontent.com/u/40460655?s=96&v=4',
  type: 1,
});
