export default ({ html, css, ids }, helmet, initialState, scriptTags) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <!-- Meta Tag -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- SEO -->
    ${helmet.meta ? helmet.meta.toString() : ""}
    ${helmet.title ? helmet.title.toString() : ""} 
    <meta name="keywords" content="Willemstad, Curacao, business, Awnings, overkapping , Sail Shades, Shaduw Zeil, shaduw zeil ,Outdoors Roller Shutters, Rolluiken, rolluiken" />
    <meta name="author" content="Lucas Web Development" />
    <meta name="copyright" content="Solargard N.V." />
    
    <link rel="apple-touch-icon" sizes="180x180" href="https://vertisolsolargard.s3.amazonaws.com/suncloud/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://vertisolsolargard.s3.amazonaws.com/suncloud/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://vertisolsolargard.s3.amazonaws.com/suncloud/favicon-16x16.png">

    <!-- All CSS Plugins -->
  
     <style data-emotion-css="${ids.join(" ")}">${css}</style>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.INITIAL_STATE= ${initialState}
    </script>
    ${scriptTags}
    
  </body>
</html>`;
};
