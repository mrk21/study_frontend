# Rails gulp test

## Running this projejct

1. Run `bundle install` command
1. Move `client` directory
1. Run `npm install` command
1. Run `./dtsm install` command
1. Run `./glup install` command
1. Move project root
1. Run `bundle exec rails s` command
1. Open [localhost:3000](http://localhost:3000) by your browser

## gulp task

### default

This task is same the `server` task.

### server

This task runs development server, and opens [localhost:8000](http://localhost:8000), which will be reload when the files were changed.

### install

This task sets the build files to the `RAILS_ROOT/public` directory.

### watch

This task watches changing of the javascript, stylesheet and html files, and builds the files.

### clean

This task cleans built files.

### test

This task runs unit testing by Node.js. Ranning tests can choose by `--grep=<pattern>` command line arguments.


### browser-test

This task runs unit testing by browser. If `--watch` command line arguments specified, karma will be a watch mode.

### build

This task build stylesheet and javascript files.

### js

This task builds javascript files.

### css

This task builds stylesheet files.

### node

This task builds javascript files for Node.js.

### karma

This task builds unit test files for Karma.

## Memo

### Rails installation

Create a `Gemfile` file:

```ruby
source 'https://rubygems.org'
gem 'rails'
```

Install a `rails` gem:

```bash
$ bundle install --path=vendor/bundle
```

Create a rails project:

```bash
$ bundle exec rails new rails_gulp \
    --skip-bundle \
    --skip-active-record \
    --skip-sprockets \
    --skip-javascript \
    --skip-turbolinks \
    --skip-test-unit
```

Install the project gems:

```bash
$ bundle install --path=vendor/bundle
```

Edit the `config/application.rb`:

```ruby
module RailsGulp
  class Application < Rails::Application
    ...
    
    config.generators do |g|
      g.javascripts false
      g.stylesheets false
      g.helper false
      g.template_engine :jbuilder
    end
  end
end
```

Remove the `assets` directories:

```bash
$ rm -rf app/assets
$ rm -rf public/assets
$ rm -rf lib/assets
$ rm -rf tmp/cache/assets  
```

Remove the `public/index.html` file:

```bash
$ rm -rf public/index.html
```
