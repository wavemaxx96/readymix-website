# Ready Mix Concrete website

Static, responsive website with no build step. Open `index.html` in a browser or run a local server from this directory, for example `python3 -m http.server 8000`.

## Public design preview

Enable GitHub Pages in the repository's **Settings > Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. This session could push code but did not have permission to enable Pages.
Once deployment finishes, the expected preview address is https://wavemaxx96.github.io/readymix-website/.
This is not a production launch. Quote requests are not connected, company details are incomplete, and the legal pages are drafts. Pages include `noindex, nofollow` to discourage search indexing; this is not access control.

## Before launch

- Replace the generic brand text with the legal and trading company name.
- Add the service area and verified phone/email details.
- Set `quoteEmail` in `script.js` so quote requests can be prepared for the correct recipient.
- Replace the draft Privacy and Terms content with reviewed policies that reflect the live site and business.
- Connect the custom domain and test the site and quote flow on desktop and mobile.

The site includes a favicon and does not include reviews, customer counts, unsupported performance claims, or an external "made with" badge.
