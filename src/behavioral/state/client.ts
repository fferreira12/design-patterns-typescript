import { SocialNetwork } from "./social-network";

let social = new SocialNetwork();

social.post('Posted before login');

social.login('wrongusername', 'wrongpassword');

social.login('Fernando', '1234');

social.post('Posted after login');

social.post('Second post');

social.logout();

social.login('Fernando', '1234');

social.logout();
