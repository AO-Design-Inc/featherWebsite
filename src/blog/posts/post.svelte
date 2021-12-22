<script context="module">
  const content = `
  # Hello
  asdhlaskdjalskjfasdfa;sldkfjas;dlfk
  ## Hello
  jasuuuasdbsldfjahs;dklfj
  ### Hello
  *Or, wrap your code in three backticks:*

    # code block
    print '3 backticks or'
    print 'indent 4 spaces'
  `;
  export const post_struct = {
      category: 'UX',
      date: '12th December 2021',
      title: 'Example Post',
      summary: `
        This is an example post to guide you in making your own posts in the future!
      `
  }
</script>

<script>
  import { micromark } from "micromark";
  const processed = micromark(content);
</script>

<div>
  {@html processed}
</div>
