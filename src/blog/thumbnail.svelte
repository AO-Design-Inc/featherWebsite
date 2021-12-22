<script>
export let input_struct = {
      category: 'UX',
      date: '12th December 2021',
      title: 'Example Post',
      summary: `
        This is an example post to guide you in making your own posts in the future!  
      `,
      thumbnail: './assets/Feather-site-thumbnail.png',
}
</script>
<div>
  <img src={input_struct.thumbnail} alt={input_struct.title}>
  <div class="title">
    {input_struct.title}
  </div>
  <div class="summary">
    {input_struct.summary}
  </div>
  <div class="stuff">
    {input_struct.category}
    {input_struct.date}
  </div>

</div>