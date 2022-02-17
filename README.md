# package-skeleton

---

Template Setup: run `node configure-package.js` to configure.

{{package.description}}

---

## `Vite 2.x + Vue 3.x + Tailwind 3.x + Typescript 4.x starter ⚡`

![Vite, Vue, Tailwind CSS](https://user-images.githubusercontent.com/11320080/111277027-a9384c00-8640-11eb-8323-21889bd7c609.png)

This starter template also includes:

- [Vue Router 4.x](https://github.com/vuejs/vue-router-next)
- [Vuex 4.x](https://github.com/vuejs/vuex-next)
- [Inter var font](https://github.com/rsms/inter) (self-hosted, woff2, v3.19, with 'preload' attr, check out index.html)
- [TailwindCSS JIT](https://tailwindcss.com/docs/just-in-time-mode) mode by default introduced in Tailwind CSS v2.1 (in preview!)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue) - beautiful hand-crafted SVG icons,
by the makers of Tailwind CSS

First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

## Getting Started 🚀

First, configure the project:

```sh
node configure-package.js
```

npm:
```sh
npm install
npm run dev
npm run build
npm run serve
```

...or start the Electron app:
```sh
npm run start:el
```

## Testing

`package-skeleton` uses Jest for unit tests.  To run the test suite:

`npm run test`

---

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [{{package.author.name}}](https://github.com/{{package.author.github}})
- [web2033](https://github.com/web2033/vite-vue3-tailwind-starter)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
