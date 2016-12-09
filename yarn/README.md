# yarn

## How to start

1. `cd yarn && nodenv install && cd ..`
2. `yarn install`

### Comparing `yarn` command and `npm` command

<blockquote>
<table>
  <thead>
    <tr>
      <th>npm</th>
      <th>Yarn</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">npm install</code></td>
      <td><code class="highlighter-rouge">yarn install</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn install --flat</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn install --har</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn install --no-lockfile</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn install --pure-lockfile</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install [package]</code></td>
      <td><strong><em>(N/A)</em></strong></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install --save [package]</code></td>
      <td><code class="highlighter-rouge">yarn add [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install --save-dev [package]</code></td>
      <td><code class="highlighter-rouge">yarn add [package] [--dev/-D]</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn add [package] [--peer/-P]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install --save-optional [package]</code></td>
      <td><code class="highlighter-rouge">yarn add [package] [--optional/-O]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install --save-exact [package]</code></td>
      <td><code class="highlighter-rouge">yarn add [package] [--exact/-E]</code></td>
    </tr>
    <tr>
      <td><strong><em>(N/A)</em></strong></td>
      <td><code class="highlighter-rouge">yarn add [package] [--tilde/-T]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm install --global [package]</code></td>
      <td><code class="highlighter-rouge">yarn global add [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm rebuild</code></td>
      <td><code class="highlighter-rouge">yarn install --force</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm uninstall [package]</code></td>
      <td><strong><em>(N/A)</em></strong></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm uninstall --save [package]</code></td>
      <td><code class="highlighter-rouge">yarn remove [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm uninstall --save-dev [package]</code></td>
      <td><code class="highlighter-rouge">yarn remove [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm uninstall --save-optional [package]</code></td>
      <td><code class="highlighter-rouge">yarn remove [package]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">npm cache clean</code></td>
      <td><code class="highlighter-rouge">yarn cache clean</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">rm -rf node_modules &amp;&amp; npm install</code></td>
      <td><code class="highlighter-rouge">yarn upgrade</code></td>
    </tr>
  </tbody>
</table>

<p>
[Migrating from npm | Yarn](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)
</p>
</blockquote>

## Refer to

* [yarnpkg/yarn: 📦🐈 Fast, reliable, and secure dependency management.](https://github.com/yarnpkg/yarn)
* [Yarnファーストインプレッション - Qiita](http://qiita.com/mizchi/items/1002fde0de10e7c54fb2)
* [Migrating from npm | Yarn](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)
