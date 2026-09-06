my profile website

## GitHub Pages

The site deploys automatically to GitHub Pages whenever `main` is updated. It can also be deployed manually from **Actions > Deploy to GitHub Pages > Run workflow**.

The published project site is:
`https://namin-amin.github.io/Profile/`

### Custom domain

For a GoDaddy domain, configure these repository variables under **Settings > Secrets and variables > Actions > Variables**:

- `CUSTOM_DOMAIN`: your domain, such as `www.example.com`
- `VITE_BASE_PATH`: `/`

The workflow writes the domain to `CNAME` and switches the site to root-relative assets. You can then enable the domain under **Settings > Pages > Custom domain**.

In GoDaddy DNS:

- For the root domain (`example.com`), add A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
- For `www`, add a CNAME pointing to `namin-amin.github.io`.
- Remove old conflicting A, AAAA, forwarding, or CNAME records for `@` and `www`.
- Leave the GoDaddy NS and SOA records unchanged.
