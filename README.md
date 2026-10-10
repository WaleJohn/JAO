# JAO Tax & Financial Services Website

A website built with Next.js, TypeScript, Tailwind CSS, and shadcn-style UI components. The design and content were developed using `JAO website.pdf` as the project brief.

## Development Process

1. Reviewed the PDF to identify the business goals, audience, services, navigation, and visual preferences.
2. Created the Next.js App Router project with TypeScript and Tailwind CSS.
3. Added reusable buttons, cards, and badges using shadcn-style conventions, Radix Slot, and class-variance-authority. Lucide supplies the icons.
4. Built shared navigation and footer components and the Home, About Us, Services, and Contact Us pages.
5. Applied the requested navy, gold, white, and dark gray palette with responsive layouts.
6. Generated an office-themed hero image and saved it in `public/images/hero-tax-office.png`.
7. Added service descriptions, appointment/upload/portal entry points, FAQs, resources, and trust-focused content based on the brief.
8. Verified the production build and checked that the four page routes returned HTTP 200 locally. Browser-based visual verification was unavailable during the initial implementation.

## Run Locally

Install Node.js with npm before starting. Use Node.js 22 LTS or a compatible version supported by Next.js 15.

Open a terminal in the project folder:

```powershell
cd C:\Users\wale_\Documents\projects\JAO
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The default port is **3000**. This address is served by the running application; it is not a project folder or file.

Keep the terminal running while using the website. Press `Ctrl+C` in that terminal to stop the server.

If port 3000 is already occupied, check the address printed by Next.js or choose a port explicitly:

```powershell
npm run dev -- --port 3001
```

Then open [http://localhost:3001](http://localhost:3001). Localhost is accessible on the computer running the server; it is not a public website address.

## Pages and Files

| Page | Local URL | Source file |
| --- | --- | --- |
| Home | http://localhost:3000 | `app/page.tsx` |
| About Us | http://localhost:3000/about | `app/about/page.tsx` |
| Services | http://localhost:3000/services | `app/services/page.tsx` |
| Contact Us | http://localhost:3000/contact | `app/contact/page.tsx` |

Other important files:

- `app/layout.tsx`: shared layout and website metadata.
- `app/globals.css`: global styles and theme variables.
- `components/site-header.tsx`: desktop and mobile navigation.
- `components/site-footer.tsx`: footer links and contact information.
- `components/ui/`: reusable UI components.
- `tailwind.config.ts`: Tailwind theme configuration.
- `public/images/hero-tax-office.png`: homepage hero image.
- `JAO website.pdf`: original business requirements and feedback.

To change page wording or layout, edit the corresponding page file. The development server automatically refreshes the website after saved changes.

## Production Build

```powershell
npm run build
npm run start
```

`npm run build` creates the production output in `.next`. `npm run start` serves that build locally, normally on port 3000. Stop the development server first or use `npm run start -- --port 3001`.

## Lint

Check the code with ESLint using the Next.js and TypeScript rules:

```powershell
npm run lint
```

You can also run the project launcher from any folder:

```powershell
C:\Users\wale_\Documents\projects\JAO\lint.cmd
```

From the project folder, use `.\lint.cmd`. The launcher runs lint in the project directory and returns a nonzero exit code for errors or warnings. Rules are configured in `eslint.config.mjs`; generated build files are excluded.

## Dependency Security

Run `npm audit` to check installed packages against npm's current vulnerability advisories. The `overrides` entry in `package.json` requires `glob` version `^10.5.0` for `@next/eslint-plugin-next`, fixing the command-injection advisory in its older dependency. Keep this override until the lint dependency can be upgraded without introducing other reported vulnerabilities.

## Current Scope and Remaining Integrations

The project currently provides the website pages and visual interface. The contact form has no submission handler, and the appointment, document upload, and portal buttons are placeholders. They do not book appointments, upload documents, or authenticate clients.

The PDF also requests payments, secure messaging, notifications, electronic signatures, document tracking, and an administrative dashboard. These require additional implementation and service integrations. Privacy and terms pages, real client reviews, and any time-sensitive tax information should be completed or verified before public launch.

Connect and test the required backend services before accepting client information or tax documents. The visual security messaging alone does not establish a secure document workflow.

The domain `JAOtaxfinancialservices.com` was proposed in the brief. Domain registration and public deployment have not been configured by this project.
