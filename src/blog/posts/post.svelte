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
</script>

<script>
  import { micromark } from "micromark";
  const processed = micromark(content);
  window.document.body.classList.add("lightmode");
</script>

<div>
  {@html processed}
</div>
