export default `<!doctype html>
<html lang="en" with-selection-styled>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Professional Resume Builder · Powered by Cloudflare Workers®</title>

    <!-- Include necessary stylesheets and scripts here -->

    <style>
      /* Add your custom styles here */
    </style>
  </head>

  <body>
    <div class="Surface">
      <div class="Panel">
        <div class="Panel--top">
          <h1><a href="https://resume.builder.workers.dev" class="Link Link-without-underline">Professional Resume Builder</a></h1>
          <button data-js-dialog-open class="Button Button-is-help Button-is-bordered" type="button" aria-label="Help">?</button>
        </div>

        <main class="Panel--main" is-smooth-scrolling>
          <form id="form" class="Stack" method="GET" action="https://generate.resume.workers.dev">
            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="name">Full Name</label>
              </div>
              <input class="Input" id="name" type="text" name="name" autocomplete="off" autofocus/>
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="contact">Contact Information</label>
              </div>
              <textarea class="Input Input-textarea" id="contact" name="contact" rows="3" autocomplete="off"></textarea>
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="summary">Profile Summary</label>
              </div>
              <textarea class="Input Input-textarea" id="summary" name="summary" rows="4" autocomplete="off"></textarea>
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="expertise">Areas of Expertise</label>
              </div>
              <textarea class="Input Input-textarea" id="expertise" name="expertise" rows="4" autocomplete="off"></textarea>
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="experience">Professional Experience</label>
              </div>
              <textarea class="Input Input-textarea" id="experience" name="experience" rows="10" autocomplete="off"></textarea>
            </div>

            <div class="FormField">
              <div class="FormField--text">
                <label class="FormField--label" for="education">Education</label>
              </div>
              <textarea class="Input Input-textarea" id="education" name="education" rows="3" autocomplete="off"></textarea>
            </div>
          </form>
        </main>

        <div class="Panel--bottom">
          <div class="Row">
            <button class="Button Button-is-primary" type="submit" form="form"><span class="desktop-only">Update preview</span><span class="mobile-only">Generate PDF</span></button>
            <a data-js-permalink href="https://generate.resume.workers.dev" class="Button Button-is-bordered" type="button">Permalink</a>
          </div>
        </div>
      </div>

      <figure class="Preview">
        <iframe class="Preview--iframe" src="https://generate.resume.workers.dev" border="0" title="Resume PDF preview"></iframe>
      </figure>
    </div>

    <!-- Add dialog for help/about section -->

    <script>
      // Add your JavaScript here, adapting the logic for resume building
    </script>
  </body>
</html>
