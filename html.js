export default `<!doctype html>
<html lang="en" with-selection-styled>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Professional Resume Builder · Powered by Cloudflare Workers®</title>

    <!-- Include necessary stylesheets and scripts here -->

    <style>
      /* {
  margin: 0;
  padding: 0;
  text-indent: 0;
}

h1 {
  color: #4A86E8;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 18pt;
}

.a {
  color: black;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}

.p,
p {
  color: black;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
  margin: 0pt;
}

h2 {
  color: #4A86E8;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 14pt;
}

h3 {
  color: #4A86E8;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 10pt;
}

.s1 {
  color: black;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 10pt;
}

.s2 {
  color: black;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}

.s3 {
  color: #4A86E8;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 14pt;
}

.s4 {
  color: #4A86E8;
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 10pt;
}

.s5 {
  color: #4A86E8;
  font-family: "Aktiv Grotesk Black", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 9.5pt;
}

.s6 {
  color: #4A86E8;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 10pt;
}

.s7 {
  color: #4A86E8;
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 10pt;
}

.h4 {
  color: #4A86E8;
  font-family: "Aktiv Grotesk Black", sans-serif;
  font-style: normal;
  font-weight: bold;
  text-decoration: none;
  font-size: 9.5pt;
}

li {
  display: block;
}

#l1 {
  padding-left: 0pt;
}

#l1> li>*:first-child:before {
  content: "• ";
  color: black;
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}

li {
  display: block;
}

#l2 {
  padding-left: 0pt;
}

#l2> li>*:first-child:before {
  content: "⬝ ";
  color: black;
  font-family: "Aktiv Grotesk Hair", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}

li {
  display: block;
}

#l3 {
  padding-left: 0pt;
}

#l3> li>*:first-child:before {
  content: "• ";
  color: black;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}

li {
  display: block;
}

#l4 {
  padding-left: 0pt;
}

#l4> li>*:first-child:before {
  content: "• ";
  color: black;
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}

li {
  display: block;
}

#l5 {
  padding-left: 0pt;
}

#l5> li>*:first-child:before {
  content: "● ";
  color: black;
  font-family: "Times New Roman", serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 10pt;
}

table,
tbody {
  vertical-align: top;
  overflow: visible;
}

h1 {
  padding-top: 3pt;
  padding-left: 8pt;
  text-indent: 0pt;
  text-align: justify;
}

p {
  padding-top: 3pt;
  padding-left: 8pt;
  text-indent: 0pt;
  text-align: justify;
}

h2 {
  padding-top: 11pt;
  padding-left: 8pt;
  text-indent: 0pt;
  text-align: justify;
}

h3 {
  padding-top: 1pt;
  padding-left: 8pt;
  text-indent: 0pt;
  line-height: 113%;
  text-align: justify;
}

.s1 {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 115%;
  text-align: left;
}

.s2 {
  padding-left: 29pt;
  text-indent: -8pt;
  text-align: left;
}

.s3 {
  padding-top: 4pt;
  padding-left: 2pt;
  text-indent: 0pt;
  text-align: left;
}

.s4 {
  padding-top: 6pt;
  padding-left: 2pt;
  text-indent: 0pt;
  text-align: left;
}

.s5 {
  padding-top: 1pt;
  padding-left: 2pt;
  text-indent: 0pt;
  line-height: 11pt;
  text-align: left;
}

.s6 {
  padding-top: 5pt;
  padding-left: 101pt;
  text-indent: 0pt;
  text-align: left;
}

.s7 {
  padding-top: 11pt;
  padding-left: 8pt;
  text-indent: 0pt;
  text-align: left;
}

.h4 {
  padding-top: 1pt;
  padding-left: 8pt;
  text-indent: 0pt;
  line-height: 113%;
  text-align: left;
}

#l1> li>*:first-child {
  padding-top: 9pt;
  padding-left: 44pt;
  text-indent: -18pt;
  text-align: left;
}

#l1> li>*:first-child:before {
  padding-left: 44pt;
  text-indent: -17pt;
  text-align: left;
}

#l2> li>*:first-child {
  padding-top: 10pt;
  padding-left: 29pt;
  text-indent: -8pt;
  text-align: left;
}

#l3> li>*:first-child {
  padding-top: 1pt;
  padding-left: 24pt;
  text-indent: -6pt;
  text-align: left;
}

#l4> li>*:first-child {
  padding-top: 1pt;
  padding-left: 35pt;
  text-indent: -9pt;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 112%;
  text-align: left;
}

table {
  border-collapse: collapse;
  margin-left: 5.69995pt;
}

td {
  width: 200pt;
}

td:nth-child(2) {
  width: 172pt;
}

td:nth-child(3) {
  width: 158pt;
}

#l5> li>*:first-child:before {
  padding-left: 44pt;
  text-indent: -17pt;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 4pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 11pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 11pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 113%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -17pt;
  text-align: left;
}

#l5> li>*:first-child:before {
  padding-left: 44pt;
  text-indent: -17pt;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -18pt;
  line-height: 114%;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 11pt;
  padding-left: 44pt;
  text-indent: -17pt;
  text-align: left;
}

#l5> li>*:first-child {
  padding-top: 10pt;
  padding-left: 44pt;
  text-indent: -17pt;
  text-align: left;
}

p:nth-last-child(1) {
  padding-top: 11pt;
  padding-left: 8pt;
  text-indent: 0pt;
  text-align: left;
}

p:nth-last-child(1) {
  padding-top: 1pt;
  padding-left: 8pt;
  text-indent: 0pt;
  line-height: 114%;
  text-align: left;
}/
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
