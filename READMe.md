1. Making Package as private in package.json

## If you set "private": true in your package. json, then npm will refuse to publish it. This is a way to prevent accidental publication of private repositories. it is possible to configure it by default, in the global configuration "private": true.

2. In {workspaces:[]} property there is no need to mention the name of project prepended by @<name-of-the-project>, otherwise yarn install will not work.

3. Better naming should be provided for all the shared project in package.json for :

   1. server
   2. shared
   3. client

as well index.js files for

1.  server
2.  client

should also be referring to using @<name-of-the-project>, otherwise

> yarn install

will not work properly and install the dependencies.

Packages are installed at the top level always even if we try to put them inside child folders.
