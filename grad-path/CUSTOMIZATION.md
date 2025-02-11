# Customizing the tool for your organization

Before deploying the tool, you will want to configure it to,
at minimum, reflect some basic details about your organization.
Beyond that initial configuration, there are several ways that
you can customize the branding or content.
Depending on what you want to customize, varying degrees of coding are required.


## Contents

1. [Prerequisites](#prerequisites)
2. [Initial configuration](#initial-configuration)
3. [Further branding customization](#further-branding-customization)
   1. [Colors](#colors)
   2. [Fonts](#fonts)
   3. [Other design elements](#other-design-elements)
4. [More extensive content editing](#more-extensive-content-editing)


## Prerequisites

Before performing any of the following customizations,
you must set up a local development environment by following the
[instructions in the README](https://github.com/cfpb/grad-path#readme).


## Initial configuration

The tool's basic configuration/customization is done by
editing some variables found in the file `config/customization.js`.
It contains three groups of variables, one each for branding,
social media sharing, and key content.
Each variable is commented to explain its purpose,
but these are the ones you really need to set
for things to make sense to users of your version of the tool:

- `org_name`: Replace the placeholder with the name of your organization.
- `footer_back_url`: Replace the placeholder with the URL to
  your organization's main website.
- `url`: Enter the URL at which the tool will live.
  This is used by social networks when sharing the tool.

You may also wish to add a logo to the header.
To do so, add the image to the `src/img/` folder
and enter the filename in the `org_logo` variable.

After making changes to this file,
you must run `npm run build` for the changes take effect.


## Further branding customization

To customize the color scheme, fonts, or other design details,
you can modify the variables in `src/css/cf-theme-overrides.less`.

### Colors

The key variables for quickly changing the color scheme are right at the top:

```less
// body
@text: @black;
@brand-color-primary: @purple;
@brand-color-secondary: @gold-40;
```

`@text` refers to the color of basic text throughout the tool.
`@brand-color-primary` and `@brand-color-secondary` are used for setting accent colors,
primarily in the header and footer of the tool.

The values on the right are color variables from the
[CFPB Design System](https://cfpb.github.io/design-system/foundation/color).
You can either choose other colors from that palette and use their variables
or enter your own specific color values using any CSS color format.

### Fonts

A little further down, past some other color variables that you can customize,
is the `@font-stack` variable, used to set the fonts throughout the tool.

```less
@font-stack: system-ui, sans-serif;
```

By default, it is set to use the native user interface font
for whatever operating system a visitor to the tool is using.
Replace this with any standard CSS font stack as you see fit.
[Modern Font Stacks](https://github.com/system-fonts/modern-font-stacks)
is a great resource for a variety of font stacks that do not
require users to download any additional fonts, regardless of their OS.

You can, of course incorporate downloadable web fonts with a bit more development work.
A free and easy way to do this
(while ensuring that you have rights to use a particular font)
is to use a service like [Google Fonts](https://fonts.google.com/).
It may require modifying the `<head>` of the template,
which can be done by editing `src/templates/index.html`.

Be mindful to not add too many downloadable fonts,
as they can have a negative impact on performance
if a user's internet connection is sluggish or has poor latency.

### Other design elements

The `cf-theme-overrides.less` file contains variables
for many other design elements that you may wish to customize.
They are organized by the CFPB Design System components they apply to.
For more information, see
[the Design System's documentation for developers](https://cfpb.github.io/design-system/development/variables).

---

After editing any of the files described above,
you must run `npm run build` for the changes take effect.


## More extensive content editing

If you are comfortable with HTML,
you can modify all of the descriptive text in the tool
by editing the files in the `src/templates/` folder.
Within that folder, the files in the `sections` folder
are where you're most likely to find content you want to modify.
The filenames are prefixed with a number indicating
the order in which they appear as a user proceeds through the tool.

These files use the
[Nunjucks templating language](https://mozilla.github.io/nunjucks/templating.html)
to dynamically build the user interface.
You will see Nunjucks tags like `{{ variable }}` and `{% include ... %}`
interleaved with regular HTML.
Take care when editing the content within such tags,
as editing certain things could result in breaking the functionality of the tool.

For example, in the following Nunjucks tag that renders a radio button control,
you could edit the `label` to change it to something like `Certification`,
but editing the `name`, `value`, or `id` properties would risk breaking
the JavaScript that handles this set of radio buttons.

```nunjucks
{{
    radio.render({
      'name':  "programType",
      'label': 'Certificate',
      'value': 'certificate',
      'id': 'program-type-radio_certificate'
    })
}}
```

If you're not sure whether a certain string is safe to edit, one tactic is to
cross-reference it with the text you see when viewing the tool in the browser.
In general, any text that is visible to the user of the tool should be safe to edit.
Also, any text inside of regular HTML tags should be safe to edit.

If you need any assistance figuring out what is safe to edit or not, feel free to
[open a discussion in this repository](https://github.com/cfpb/grad-path/discussions)
and we'll do our best to get an answer for you!

As with the basic configuration and branding customization processes,
whenever you make changes to a file in the `src/templates/` folder,
you must run `npm run build` for the changes to take effect.
