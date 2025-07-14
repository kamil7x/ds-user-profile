# Implementation comments

## Assumptions
1. Application will be used on modern desktop and mobile browsers - no need for polyfills
2. Application will be English-only, but might have other language versions in future

## Tech stack
For this project I used tools and libraries I'm the most familiar with. There are alternatives and I have experience with some of them, but a lot of projects I have been working on were using these in different configurations.

### Vite
I like Vite, because bootstrapping a project with it is really simple and a lot of things are working out-of-the-box (e.g. CSS modules). It builds an application very fast compared to other bundlers.

Alternatives:
- create-react-app (uses Webpack under the hood)
- manual Webpack configuration

### React Router
Easy to get started, but very powerful when needed. I like its `Outlet` component. It allows to create layouts nicely.

Alternatives:
- Tanstack Router

### Tanstack Query
Even though an application does not use any API right now, Tanstack Query allows to easily integrate with backend in the future. Just need to update queries and mutations. It's cache management is very nice. With `invalidateQueries`, you can quickly refetch new data from API after mutation.

### React Hook Form
Very flexible library for forms. With usage of hooks, there is a possibility to create common form components for quick form building. You can see examples of such components in this application (`Form`, `TextInputField`) 

Alternatives:
- Formik
- React Final Form

### Yup
Library for schema validation. It can be combined with React Hook Form for complex form validation.

Alternatives:
- Zod
- Joi

### react-i18next
Internationalization library that uses `i18next` under the hood. It can be used with translation fetched from backend or local. In this case, I used local JSON files that are stored in repository.

I assumed that application might need other languages in future. To add a language three steps are required:
1. Create JSON file with translations for new language
2. Import and use this newly created file
3. Create language switcher and put it somewhere in the app (and this step is one-time only)

Alternatives:
- React Intl

### date-fns
Set of function for date operations, like adding time, comparing, parsing, formatting and many others. I prefer this over Moment or other libraries, because these functions work on native Date object, instead of creating specialized ones

Alternatives:
- Moment.js (deprecated by authors)
- Luxon
- Day.js

## Comments

### Translations
It could be a nice idea to create a custom substitute for `useTranslation` hook. While it's not something that happens frequently, additional layer of abstraction would make it easy to switch internationalization library in future.

I did something similar for data fetching. I wrapped queries and mutations in hooks, so changing library would require only changes in these hooks and not in all places, where data is used. 

### Styling 
I tried to do custom styling as little as possible and rely on Carbon Design components. In places, where that was necessary I used SCSS modules. There were three reasons for that:
1. Vite supports SCSS modules out-of-the-box
2. Carbon Design uses SCSS, so I could use its variables in my custom stylesheets
3. With SCSS modules, styles are encapsulated and they prevent accidental style override

Alternatively I could use CSS modules, styled-components or Tailwind CSS.

### Styling without frameworks
For this requirement I created a `CookiePrompt` component. I designed it in a way that allows to copy-paste it into another project. All component-related files are places in the same directory. The only requirement for it to work in other project is support for SCSS modules.

Also, I added environment variable for cookie prompt, just in case.

### Deployment
I am using Vercel for deployment. I love its integration with GitHub, automatic deployments after pushing new commits. Its very beginner-friendly and works well for quick projects like this one.

## Post Scriptum
That was the first time I've seen and used Carbon Design System. There is a lot of room for improvement for me in that case. Especially with form design.

However, with time, I'll be more proficient with that library.

