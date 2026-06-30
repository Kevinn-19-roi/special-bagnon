# Authentication and roles

BAGNON STREET uses Auth.js with credentials authentication and JWT sessions. Admin routes are protected by middleware and allow OWNER, ADMIN, EDITOR, and VIEWER roles. CUSTOMER users can access storefront account flows but not /admin.

Create the first OWNER directly in PostgreSQL or through a one-off seed using bcryptjs for passwordHash.
