interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Author', 'Editor', 'Editorin Chief', 'Reviewer'],
  tenantName: 'Organization',
  applicationName: 'Editorial Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View published papers', 'Search for published papers'],
  ownerAbilities: [
    'Invite and manage users.',
    'Manage roles of users within organization.',
    'Check papers for plagiarism and relevancy.',
    'Publish approved papers.',
    'Remove any user from organization.',
  ],
};
