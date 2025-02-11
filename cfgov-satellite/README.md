# CFPB cf.gov Satellite Template Instructions


1. [Install Cookiecutter](https://cookiecutter.readthedocs.io/en/latest/index.html)

   ```
   pip install --user cookiecutter
   ```

   Or with [pipsi](https://github.com/mitsuhiko/pipsi):

   ```
   pipsi install cookiecutter
   ```

2. Use Cookiecutter and this repository to make a new satellite app

   ```shell
   cookiecutter https://github.com/cfpb/cfgov-satellite
   ```

   Cookiecutter will prompt you for the package name:

   <pre>
   package_name [satellite app package name]: <b>my_satellite_app</b>
   </pre>

   `package_name` can be letters or underscores and will be the name given to
   the Python package, the template subdirectory, and compiled CSS and 
   JavaScript files. In this example *`my_satellite_app`* would be the app 
   name that gets included in `INSTALLED_APPS`.

3. Follow the [cfgov-refresh instructions for using this app](https://cfpb.github.io/cfgov-refresh/usage/#develop-satellite-apps)

4. Update the README, replacing the contents below as prescribed.

5. Add any libraries, assets, or hard dependencies whose source code will be 
   included in the project's repository to the _Exceptions_ section in the 
   [TERMS](TERMS.md).

  - If no exceptions are needed, remove that section from TERMS.

6. If working with an existing code base, answer the questions on the 
   [open source checklist](opensource-checklist.md)

7. Delete these instructions and everything up to the _Project Title_ from the 
   README.

8. Write some great software and tell people about it.

> Keep the README fresh! It's the first thing people see and will make the initial impression.
