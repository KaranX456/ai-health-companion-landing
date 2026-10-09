<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Visual system
- Define shared identity colors and fonts in global semantic tokens; reserve the display-font utility for the landing hero H1 so typography remains centrally controlled.
- Keep landing-only presentation overrides scoped to `.landing-page` and `.signup-presentation`; embedded app-link and signup modules stay unchanged while the public page is restyled.
